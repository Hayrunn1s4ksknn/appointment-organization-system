import SimpleTable from "@/components/ui/SimpleTable";
import Badge from "@/components/ui/Badge";
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
  return timeStr.slice(0, 5); // "10:00:00" -> "10:00"
}

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

export default async function AppointmentsPage() {
  const { data, error } = await supabase
    .from("appointments")
    .select("id, title, appointment_date, appointment_time, status, location")
    .eq("is_active", true)
    .order("appointment_date", { ascending: true });

  return (
    <div>
      <h1 className="text-2xl font-semibold text-zinc-900 mb-4">Randevular</h1>

      {error && (
        <p className="text-red-600">
          Randevular yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </p>
      )}

      {!error && data && data.length === 0 && (
        <p className="text-zinc-500">Henüz kayıtlı bir randevu bulunmuyor.</p>
      )}

      {!error && data && data.length > 0 && (
        <SimpleTable<Appointment>
          columns={[
            { header: "Başlık", accessor: (row) => row.title },
            { header: "Tarih", accessor: (row) => formatDate(row.appointment_date) },
            { header: "Saat", accessor: (row) => formatTime(row.appointment_time) },
            { header: "Konum", accessor: (row) => row.location ?? "-" },
            {
              header: "Durum",
              accessor: (row) => (
                <Badge text={row.status} color={statusColor(row.status)} />
              ),
            },
          ]}
          data={data}
        />
      )}
    </div>
  );
}