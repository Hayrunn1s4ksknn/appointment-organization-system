"use client";
// "use client" gerekli çünkü bu component tarayıcıda çalışan bir hook (usePathname)
// kullanıyor - hangi sayfada olduğumuzu anlamak için.

import Link from "next/link";
import { usePathname } from "next/navigation";

// Menüde göstereceğimiz her link için bir isim ve gideceği adres tanımlıyoruz.
const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Randevular", href: "/appointments" },
  { name: "Kişiler", href: "/contacts" },
  { name: "Kurumlar", href: "/organizations" },
  { name: "Takvim", href: "/calendar" },
  { name: "Raporlar", href: "/reports" },
  { name: "Ayarlar", href: "/settings" },
];

export default function Sidebar() {
  // usePathname(): tarayıcının şu an hangi URL'de olduğunu döndürür (örn: "/dashboard")
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-zinc-900 text-zinc-100 flex flex-col">
      <div className="px-6 py-5 text-lg font-semibold border-b border-zinc-800">
        Randevu Paneli
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          // Şu anki sayfa bu linkle aynıysa "aktif" stilini uygula
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-zinc-700 text-white font-medium"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}