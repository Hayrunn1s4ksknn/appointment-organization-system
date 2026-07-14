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
## Veritabanı Şeması

Supabase üzerinde oluşturulan `appointments` tablosu:

| Alan | Tip | Açıklama |
|---|---|---|
| `id` | uuid | Birincil anahtar, otomatik üretilir |
| `title` | text (zorunlu) | Randevu başlığı |
| `description` | text | Randevu açıklaması |
| `appointment_date` | date (zorunlu) | Randevu tarihi |
| `appointment_time` | time (zorunlu) | Randevu saati |
| `status` | text (varsayılan: planned) | planned / completed / cancelled / postponed |
| `location` | text | Randevu konumu |
| `is_active` | boolean (varsayılan: true) | Soft delete için — false olan kayıtlar listelenmez |
| `created_at` | timestamp | Kaydın oluşturulma zamanı |
| `updated_at` | timestamp | Son güncellenme zamanı |

**Güvenlik notu:** Tablo şu an Row Level Security (RLS) olmadan oluşturuldu; ayrıntılı RLS politikaları ileriki bir aşamada eklenecek. Şu an için `anon` anahtarla tabloya tam erişim mümkün, bu geliştirme aşaması için kabul edilebilir ama production öncesi mutlaka ele alınması gereken bir güvenlik notu.

## Bilinen Eksikler / Devam Eden İşler

- Sidebar, mobil görünümde henüz hamburger menüye dönüştürülmedi (küçük ekranlarda sabit ve geniş kalıyor).
- Supabase veritabanı bağlantısı henüz yapılmadı; tüm veriler şu an mock (sahte) veri.
- Randevu formu şu an sadece console.log ile test ediliyor, henüz bir veritabanına kayıt atmıyor.

## 3. Hafta Planı

Supabase projesinin Next.js uygulamasına bağlanması, `appointments` tablosunun oluşturulması ve randevu listeleme/ekleme/düzenleme/pasifleştirme (CRUD) işlemlerinin gerçek veritabanı ile tamamlanması.