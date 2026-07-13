# Randevu Takip ve Organizasyon Sistemi

40 günlük staj projesi. Next.js, TypeScript, Supabase, Vercel kullanılarak geliştirilmektedir.

## Canlı Demo

https://appointment-organization-system.vercel.app

## Kullanılan Teknolojiler

- **Next.js 16** (App Router) — React tabanlı web framework
- **TypeScript** — tip güvenli JavaScript
- **Tailwind CSS** — utility-first stil kütüphanesi
- **React Hook Form** — form state yönetimi
- **Zod** — şema tabanlı veri doğrulama
- **Supabase** — PostgreSQL tabanlı backend/veritabanı (entegrasyon 3. haftada tamamlanacak)
- **Vercel** — deployment/hosting
- **GitHub** — versiyon kontrolü

## Kurulum

```bash
git clone https://github.com/Hayrunn1s4ksknn/appointment-organization-system.git
cd appointment-organization-system
npm install
npm run dev
```

Proje `http://localhost:3000` adresinde çalışmaya başlar.

## Proje Yapısı
```
src/
  app/                  → Sayfalar (App Router)
    dashboard/          → Genel özet ekranı
    appointments/       → Randevu listesi
    appointments/new/   → Yeni randevu ekleme formu
    contacts/           → Kişiler (iskelet)
    organizations/      → Kurumlar (iskelet)
    calendar/           → Takvim (iskelet)
    reports/            → Raporlar (iskelet)
    settings/           → Ayarlar (iskelet)
  components/
    layout/             → Sidebar, Header, MainLayout
    ui/                 → Button, Card, Input, Badge, SimpleTable
  lib/
    mock-data.ts         → Geliştirme aşamasında kullanılan örnek veriler
    appointment-schema.ts → Randevu formu için Zod doğrulama şeması
```

## Sayfalar

| Sayfa | Yol | Durum |
|---|---|---|
| Dashboard | `/dashboard` | Mock verilerle çalışıyor |
| Randevular | `/appointments` | Mock verilerle listeleniyor |
| Yeni Randevu | `/appointments/new` | Form + validation çalışıyor |
| Kişiler, Kurumlar, Takvim, Raporlar, Ayarlar | ilgili yollar | İskelet halinde, içerik 3. haftada eklenecek |

## Bilinen Eksikler / Devam Eden İşler

- Sidebar, mobil görünümde henüz hamburger menüye dönüştürülmedi (küçük ekranlarda sabit ve geniş kalıyor).
- Supabase veritabanı bağlantısı henüz yapılmadı; tüm veriler şu an mock (sahte) veri.
- Randevu formu şu an sadece console.log ile test ediliyor, henüz bir veritabanına kayıt atmıyor.

## 3. Hafta Planı

Supabase projesinin Next.js uygulamasına bağlanması, `appointments` tablosunun oluşturulması ve randevu listeleme/ekleme/düzenleme/pasifleştirme (CRUD) işlemlerinin gerçek veritabanı ile tamamlanması.