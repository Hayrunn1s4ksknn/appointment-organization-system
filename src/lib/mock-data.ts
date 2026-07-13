// Bu dosya, henüz Supabase'e bağlı olmadığımız için kullandığımız SAHTE (mock) verileri
// tek bir yerde topluyor. İleride gerçek veritabanı bağlantısına geçerken,
// sadece bu dosyanın import edildiği yerleri değiştirmemiz yeterli olacak -
// component'lerin içine dağınık veri gömmediğimiz için temiz bir geçiş yapabileceğiz.

export type AppointmentStatus = "planned" | "completed" | "cancelled" | "postponed";

export interface Appointment {
  id: string;
  title: string;
  date: string; // "14.07.2026" formatında
  time: string; // "14:30" formatında
  status: AppointmentStatus;
  location?: string;
}

// Dashboard'daki özet kartlar için sayılar
export const dashboardSummary = {
  todayCount: 3,
  weekCount: 12,
  pendingCount: 5,
  cancelledCount: 2,
};

// Son randevular listesi için örnek veriler
export const recentAppointments: Appointment[] = [
  {
    id: "1",
    title: "Diş Kontrolü",
    date: "14.07.2026",
    time: "10:00",
    status: "planned",
    location: "Merkez Klinik",
  },
  {
    id: "2",
    title: "Proje Toplantısı",
    date: "15.07.2026",
    time: "14:30",
    status: "completed",
    location: "Ofis - Toplantı Odası A",
  },
  {
    id: "3",
    title: "Danışmanlık Görüşmesi",
    date: "16.07.2026",
    time: "09:15",
    status: "planned",
    location: "Online",
  },
  {
    id: "4",
    title: "Bakım Randevusu",
    date: "12.07.2026",
    time: "16:00",
    status: "cancelled",
    location: "Servis Merkezi",
  },
];

// Boş veri durumunu test edebilmek için ayrı bir örnek liste (kullanmak istersek)
export const emptyAppointments: Appointment[] = [];