# Randevu Takip ve Organizasyon Sistemi
Staj projesi. Next.js, TypeScript, Supabase, Vercel kullanılarak geliştirilmektedir.

## Canlı Demo
https://appointment-organization-system.vercel.app

## Kullanılan Teknolojiler
- **Next.js 16** (App Router) — React tabanlı web framework
- **TypeScript** — tip güvenli JavaScript
- **Tailwind CSS** — utility-first stil kütüphanesi
- **React Hook Form** — form state yönetimi
- **Zod** — şema tabanlı veri doğrulama
- **Supabase** — PostgreSQL tabanlı backend/veritabanı
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
  app/                          → Sayfalar (App Router)
    dashboard/                  → Genel özet ekranı
    appointments/                → Randevu listesi (Supabase'den canlı veri)
    appointments/new/            → Yeni randevu ekleme formu
    appointments/[id]/edit/      → Randevu düzenleme sayfası
    contacts/                    → Kişiler (iskelet)
    organizations/                → Kurumlar (iskelet)
    calendar/                    → Takvim (iskelet)
    reports/                      → Raporlar (iskelet)
    settings/                    → Ayarlar (iskelet)
  components/
    layout/                      → Sidebar, Header, MainLayout
    appointments/                 → EditAppointmentForm, DeactivateButton
    ui/                           → Button, Card, Input, Badge, SimpleTable
  lib/
    mock-data.ts                  → Dashboard özet kartları için örnek veriler
    appointment-schema.ts          → Randevu formu için Zod doğrulama şeması
    supabase/client.ts             → Supabase bağlantı istemcisi
```

## Sayfalar
| Sayfa | Yol | Durum |
|---|---|---|
| Ana Sayfa | `/` | Tamamlandı — kurumsal karşılama ekranı |
| Dashboard | `/dashboard` | Özet kartlar mock veriyle, "Son Randevular" tablosu mock veriyle çalışıyor |
| Randevular | `/appointments` | Tamamlandı — Supabase'den canlı veri, düzenleme/pasifleştirme dahil |
| Yeni Randevu | `/appointments/new` | Tamamlandı — form, validation ve Supabase kaydı çalışıyor |
| Randevu Düzenle | `/appointments/[id]/edit` | Tamamlandı — mevcut kayıt güncelleniyor |
| Kişiler, Kurumlar, Takvim, Raporlar, Ayarlar | ilgili yollar | İskelet halinde, içerik ileriki bir aşamada eklenecek |

## Tasarım
Arayüz, Mersin Teknopark kurumsal kimliğine uygun özel bir tema ile tasarlanmıştır: koyu lacivert zemin, ağ/nokta deseni ve tutarlı vurgu renkleri sidebar, butonlar, input alanları ve kartlarda kullanılmaktadır. Sidebar, küçük ekranlarda hamburger menüye dönüşen mobil uyumlu bir yapıya sahiptir.

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



## Bilinen Eksikler / Devam Eden İşler
- `appointments` tablosunda Row Level Security (RLS) henüz etkin değil.
- Dashboard'daki özet kartlar ve "Son Randevular" tablosu hâlâ mock veriyle çalışıyor, Supabase'e bağlı değil.
- Kişiler, Kurumlar, Takvim, Raporlar ve Ayarlar sayfaları henüz iskelet halinde.

## Tamamlanan İşler (1–3. Hafta)
Geliştirme ortamı kurulumu, GitHub/Vercel/Supabase entegrasyonu, panel arayüz iskeleti, temel UI bileşenleri, randevu formu ve validation, Supabase bağlantısı, `appointments` tablosu ve randevu listeleme/ekleme/düzenleme/pasifleştirme (CRUD) işlemleri tamamlandı.

