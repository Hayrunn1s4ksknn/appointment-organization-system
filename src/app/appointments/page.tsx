import SimpleTable from "@/components/ui/SimpleTable";
import Badge from "@/components/ui/Badge";

type Appointment = {
  title: string;
  date: string;
  status: "planned" | "completed" | "cancelled";
};

const mockAppointments: Appointment[] = [
  { title: "Diş Kontrolü", date: "14.07.2026", status: "planned" },
  { title: "Proje Toplantısı", date: "15.07.2026", status: "completed" },
];

export default function AppointmentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-zinc-900 mb-4">Randevular</h1>
      <SimpleTable<Appointment>
        columns={[
          { header: "Başlık", accessor: (row) => row.title },
          { header: "Tarih", accessor: (row) => row.date },
          {
            header: "Durum",
            accessor: (row) => (
              <Badge
                text={row.status}
                color={row.status === "completed" ? "green" : "gray"}
              />
            ),
          },
        ]}
        data={mockAppointments}
      />
    </div>
  );
}