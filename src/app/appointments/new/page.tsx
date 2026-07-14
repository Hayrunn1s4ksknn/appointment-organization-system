"use client";
// "use client" zorunlu çünkü form, kullanıcı etkileşimi (yazma, submit etme)
// ve React state (useForm hook'u) kullanıyor - bunlar tarayıcıda çalışmalı.

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  appointmentSchema,
  type AppointmentFormValues,
} from "@/lib/appointment-schema";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function NewAppointmentPage() {
    const router = useRouter();
const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,       // her input'u forma "kaydetmek" için kullanılır
    handleSubmit,    // submit olayını yönetir, önce validation çalıştırır
    formState: { errors, isSubmitting }, // hata mesajları ve gönderim durumu
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema), // Zod şemasını doğrulama motoru olarak bağlıyoruz
    defaultValues: {
      status: "planned",
    },
  });

  // Form geçerli (valid) olduğunda çalışacak fonksiyon.
  // Şimdilik sadece console.log ile veriyi gösteriyoruz, henüz Supabase'e
  // bağlı değiliz - o Gün 14'te olacak.
  async function onSubmit(data: AppointmentFormValues) {
  setSubmitError(null);

  const { error } = await supabase.from("appointments").insert({
    title: data.title,
    appointment_date: data.appointment_date,
    appointment_time: data.appointment_time,
    location: data.location || null,
    description: data.description || null,
    status: data.status,
  });

  if (error) {
    setSubmitError(
      "Randevu kaydedilirken bir hata oluştu. Lütfen tekrar deneyin."
    );
    return;
  }

  router.push("/appointments");
}

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-semibold text-zinc-900 mb-6">
        Yeni Randevu
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {submitError && (
  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
    {submitError}
  </p>
)}
        <div>
          <Input
            label="Başlık"
            placeholder="Örn. Diş Kontrolü"
            {...register("title")}
          />
          {/* Hata varsa küçük kırmızı bir mesaj gösteriyoruz */}
          {errors.title && (
            <p className="text-sm text-red-600 mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              label="Tarih"
              type="date"
              {...register("appointment_date")}
            />
            {errors.appointment_date && (
              <p className="text-sm text-red-600 mt-1">
                {errors.appointment_date.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label="Saat"
              type="time"
              {...register("appointment_time")}
            />
            {errors.appointment_time && (
              <p className="text-sm text-red-600 mt-1">
                {errors.appointment_time.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Input
            label="Konum"
            placeholder="Örn. Merkez Klinik (opsiyonel)"
            {...register("location")}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700">
            Açıklama
          </label>
          <textarea
            className="border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-400"
            rows={3}
            placeholder="Opsiyonel not..."
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
          {isSubmitting ? "Kaydediliyor..." : "Randevuyu Kaydet"}
        </Button>
      </form>
    </div>
  );
}