"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  appointmentSchema,
  type AppointmentFormValues,
} from "@/lib/appointment-schema";
import { supabase } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type Appointment = {
  id: string;
  title: string;
  appointment_date: string;
  appointment_time: string;
  location: string | null;
  description: string | null;
  status: "planned" | "completed" | "cancelled" | "postponed";
};

export default function EditAppointmentForm({
  appointment,
}: {
  appointment: Appointment;
}) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      title: appointment.title,
      appointment_date: appointment.appointment_date,
      appointment_time: appointment.appointment_time.slice(0, 5),
      location: appointment.location ?? "",
      description: appointment.description ?? "",
      status: appointment.status,
    },
  });

  async function onSubmit(data: AppointmentFormValues) {
    setSubmitError(null);

    const { error } = await supabase
      .from("appointments")
      .update({
        title: data.title,
        appointment_date: data.appointment_date,
        appointment_time: data.appointment_time,
        location: data.location || null,
        description: data.description || null,
        status: data.status,
      })
      .eq("id", appointment.id);

    if (error) {
      setSubmitError(
        "Randevu güncellenirken bir hata oluştu. Lütfen tekrar deneyin."
      );
      return;
    }

    router.push("/appointments");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {submitError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {submitError}
        </p>
      )}

      <div>
        <Input label="Başlık" {...register("title")} />
        {errors.title && (
          <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input label="Tarih" type="date" {...register("appointment_date")} />
          {errors.appointment_date && (
            <p className="text-sm text-red-600 mt-1">
              {errors.appointment_date.message}
            </p>
          )}
        </div>
        <div>
          <Input label="Saat" type="time" {...register("appointment_time")} />
          {errors.appointment_time && (
            <p className="text-sm text-red-600 mt-1">
              {errors.appointment_time.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Input label="Konum" {...register("location")} />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Açıklama</label>
        <textarea
          className="border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          rows={3}
          {...register("description")}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-zinc-700">Durum</label>
        <select
          className="border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
          {...register("status")}
        >
          <option value="planned">Planlandı</option>
          <option value="completed">Tamamlandı</option>
          <option value="cancelled">İptal Edildi</option>
          <option value="postponed">Ertelendi</option>
        </select>
        {errors.status && (
          <p className="text-sm text-red-600 mt-1">{errors.status.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
      </Button>
    </form>
  );
}