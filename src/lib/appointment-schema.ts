import { z } from "zod";

// Zod ile "bir randevu formunun geçerli olması için hangi kurallara uyması gerekir?"
// sorusunun cevabını tek bir yerde tanımlıyoruz. Bu şema hem doğrulama yapar
// hem de TypeScript'in formun tipini otomatik çıkarmasını sağlar (aşağıdaki
// AppointmentFormValues satırına bak).

export const appointmentSchema = z.object({
  // min(1) = boş bırakılamaz demek. Boş string de "1 karakterden az" sayılır.
  title: z.string().min(1, "Başlık zorunludur."),

  // Tarih alanı için de boş olmaması yeterli (input type="date" zaten
  // geçersiz tarih girilmesini tarayıcı seviyesinde engeller).
  appointment_date: z.string().min(1, "Tarih zorunludur."),

  appointment_time: z.string().min(1, "Saat zorunludur."),

  // Konum ve açıklama zorunlu değil, o yüzden .optional() kullanıyoruz.
  location: z.string().optional(),
  description: z.string().optional(),

  // Durum alanı sadece belirli değerlerden biri olabilir (enum).
  status: z.enum(["planned", "completed", "cancelled", "postponed"], {
    message: "Geçerli bir durum seçin.",
  }),
});

// Bu satır, yukarıdaki şemadan otomatik bir TypeScript tipi üretir.
// Yani appointmentSchema'yı değiştirirsek, bu tip de otomatik güncellenir -
// iki yerde aynı şeyi tanımlamak zorunda kalmayız.
export type AppointmentFormValues = z.infer<typeof appointmentSchema>;