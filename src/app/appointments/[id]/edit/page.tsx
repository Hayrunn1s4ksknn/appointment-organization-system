import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import EditAppointmentForm from "@/components/appointments/EditAppointmentForm";

export default async function EditAppointmentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("appointments")
    .select("id, title, appointment_date, appointment_time, location, description, status")
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-semibold text-zinc-900 mb-6">
        Randevuyu Düzenle
      </h1>
      <EditAppointmentForm appointment={data} />
    </div>
  );
}