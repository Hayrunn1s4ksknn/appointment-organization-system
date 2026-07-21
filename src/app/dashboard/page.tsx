import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SimpleTable from "@/components/ui/SimpleTable";
import { supabase } from "@/lib/supabase/client";

type Appointment = {
  id: string;
  title: string;
  appointment_date: string;
  appointment_time: string;
  status: "planned" | "completed" | "cancelled" | "postponed";
  location: string | null;
};

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split("-");
  return `${day}.${month}.${year}`;
}

function formatTime(timeStr: string) {
  return timeStr.slice(0, 5);
}

// Randevu durumuna göre hangi renkte badge gösterileceğini belirleyen küçük yardımcı
function statusColor(status: Appointment["status"]) {
  switch (status) {
    case "completed":
      return "green";
    case "cancelled":
      return "red";
    case "postponed":
      return "yellow";
    default:
      return "gray";
  }
}

// Durum metnini kullanıcı dostu Türkçeye çeviren yardımcı
function statusLabel(status: Appointment["status"]) {
  const labels: Record<Appointment["status"], string> = {
    planned: "Planlandı",
    completed: "Tamamlandı",
    cancelled: "İptal Edildi",
    postponed: "Ertelendi",
  };
  return labels[status];
}

// YYYY-MM-DD formatında, local saat diliminde bugünün tarihi
function todayISODate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// İçinde bulunduğumuz takvim haftasının Pazartesi ve Pazar tarihlerini
// YYYY-MM-DD formatında döndürür.
function getCurrentWeekRange() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Pazar, 1 = Pazartesi, ...
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const toISO = (d: Date) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return { weekStart: toISO(monday), weekEnd: toISO(sunday) };
}

export default async function DashboardPage() {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, title, appointment_date, appointment_time, status, location")
    .eq("is_active", true)
    .order("appointment_date", { ascending: true });

  const allAppointments = data ?? [];
  const hasAppointments = allAppointments.length > 0;

  // Özet kartlar için gerçek verilerden hesaplama
  const today = todayISODate();
  const { weekStart, weekEnd } = getCurrentWeekRange();

  const todayCount = allAppointments.filter(
    (a) => a.appointment_date === today
  ).length;

  const weekCount = allAppointments.filter(
    (a) => a.appointment_date >= weekStart && a.appointment_date <= weekEnd
  ).length;

  const pendingCount = allAppointments.filter(
    (a) => a.status === "planned"
  ).length;

  const cancelledThisWeekCount = allAppointments.filter(
    (a) =>
      a.status === "cancelled" &&
      a.appointment_date >= weekStart &&
      a.appointment_date <= weekEnd
  ).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
        <Link href="/appointments/new">
          <Button variant="primary">Yeni Randevu</Button>
        </Link>
      </div>

      {/* Özet kartlar - artık Supabase'den çekilen gerçek verilerden hesaplanıyor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Bugünkü Randevular">
          <p className="text-2xl font-semibold">{todayCount}</p>
        </Card>
        <Card title="Bu Haftaki Randevular">
          <p className="text-2xl font-semibold">{weekCount}</p>
        </Card>
        <Card title="Bekleyen Görevler">
          <p className="text-2xl font-semibold">{pendingCount}</p>
        </Card>
        <Card title="İptal Edilenler">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">{cancelledThisWeekCount}</p>
            <Badge text="Bu hafta" color="red" />
          </div>
        </Card>
      </div>

      {/* Son randevular listesi - Supabase'den canlı veri, tüm aktif randevular */}
      <Card title="Son Randevular">
        {error && (
          <p className="text-red-600 text-sm py-4">
            Randevular yüklenirken bir hata oluştu.
          </p>
        )}

        {!error && hasAppointments ? (
          <SimpleTable<Appointment>
            columns={[
              { header: "Başlık", accessor: (row) => row.title },
              { header: "Tarih", accessor: (row) => formatDate(row.appointment_date) },
              { header: "Saat", accessor: (row) => formatTime(row.appointment_time) },
              { header: "Konum", accessor: (row) => row.location ?? "-" },
              {
                header: "Durum",
                accessor: (row) => (
                  <Badge text={statusLabel(row.status)} color={statusColor(row.status)} />
                ),
              },
            ]}
            data={allAppointments}
          />
        ) : (
          !error && (
            <div className="py-8 text-center text-zinc-500 text-sm">
              Henüz kayıtlı bir randevu bulunmuyor.
            </div>
          )
        )}
      </Card>
    </div>
  );
}