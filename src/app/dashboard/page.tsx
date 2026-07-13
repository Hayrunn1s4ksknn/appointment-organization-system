import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SimpleTable from "@/components/ui/SimpleTable";
import {
  dashboardSummary,
  recentAppointments,
  type Appointment,
  type AppointmentStatus,
} from "@/lib/mock-data";

// Randevu durumuna göre hangi renkte badge gösterileceğini belirleyen küçük yardımcı
function statusColor(status: AppointmentStatus) {
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
function statusLabel(status: AppointmentStatus) {
  const labels: Record<AppointmentStatus, string> = {
    planned: "Planlandı",
    completed: "Tamamlandı",
    cancelled: "İptal Edildi",
    postponed: "Ertelendi",
  };
  return labels[status];
}

export default function DashboardPage() {
  const hasAppointments = recentAppointments.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
        <Button variant="primary">Yeni Randevu</Button>
      </div>

      {/* Özet kartlar - artık mock-data.ts'ten geliyor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Bugünkü Randevular">
          <p className="text-2xl font-semibold">{dashboardSummary.todayCount}</p>
        </Card>
        <Card title="Bu Haftaki Randevular">
          <p className="text-2xl font-semibold">{dashboardSummary.weekCount}</p>
        </Card>
        <Card title="Bekleyen Görevler">
          <p className="text-2xl font-semibold">{dashboardSummary.pendingCount}</p>
        </Card>
        <Card title="İptal Edilenler">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">{dashboardSummary.cancelledCount}</p>
            <Badge text="Bu hafta" color="red" />
          </div>
        </Card>
      </div>

      {/* Son randevular listesi */}
      <Card title="Son Randevular">
        {hasAppointments ? (
          <SimpleTable<Appointment>
            columns={[
              { header: "Başlık", accessor: (row) => row.title },
              { header: "Tarih", accessor: (row) => row.date },
              { header: "Saat", accessor: (row) => row.time },
              { header: "Konum", accessor: (row) => row.location ?? "-" },
              {
                header: "Durum",
                accessor: (row) => (
                  <Badge text={statusLabel(row.status)} color={statusColor(row.status)} />
                ),
              },
            ]}
            data={recentAppointments}
          />
        ) : (
          // Boş veri durumu - liste boşsa kullanıcıya anlamlı bir mesaj gösteriyoruz,
          // boş bir tablo veya "undefined" gibi bir şey göstermek yerine.
          <div className="py-8 text-center text-zinc-500 text-sm">
            Henüz kayıtlı bir randevu bulunmuyor.
          </div>
        )}
      </Card>
    </div>
  );
}