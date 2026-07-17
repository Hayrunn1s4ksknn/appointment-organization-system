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

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // usePathname(): tarayıcının şu an hangi URL'de olduğunu döndürür (örn: "/dashboard")
  const pathname = usePathname();

  return (
    <>
      {/* Mobilde sidebar açıkken arkada beliren karartma - tıklanınca sidebar kapanır */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`fixed z-40 md:static md:z-auto top-0 left-0 h-screen w-64 bg-[#0a1f3d] text-zinc-100 flex flex-col relative overflow-hidden
          transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Arka plandaki ağ/nokta deseni - Mersin Teknopark temasından ilham alındı */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          viewBox="0 0 256 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="white" strokeWidth="0.6">
            <line x1="20" y1="40" x2="95" y2="115" />
            <line x1="95" y1="115" x2="55" y2="205" />
            <line x1="55" y1="205" x2="160" y2="265" />
            <line x1="160" y1="265" x2="115" y2="365" />
            <line x1="20" y1="40" x2="55" y2="205" />
            <line x1="160" y1="265" x2="215" y2="175" />
            <line x1="115" y1="365" x2="185" y2="425" />
            <line x1="185" y1="425" x2="85" y2="490" />
            <line x1="85" y1="490" x2="155" y2="565" />
            <line x1="155" y1="565" x2="55" y2="630" />
            <line x1="55" y1="630" x2="125" y2="705" />
            <line x1="125" y1="705" x2="200" y2="760" />
          </g>
          <g fill="white">
            <circle cx="20" cy="40" r="2.5" />
            <circle cx="95" cy="115" r="2" />
            <circle cx="55" cy="205" r="3" />
            <circle cx="160" cy="265" r="2" />
            <circle cx="115" cy="365" r="2.5" />
            <circle cx="215" cy="175" r="2" />
            <circle cx="185" cy="425" r="2" />
            <circle cx="85" cy="490" r="2.5" />
            <circle cx="155" cy="565" r="2" />
            <circle cx="55" cy="630" r="3" />
            <circle cx="125" cy="705" r="2" />
            <circle cx="200" cy="760" r="2.5" />
          </g>
        </svg>

        <div className="relative px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-medium tracking-widest text-blue-200/80">
              MERSİN TEKNOPARK
            </div>
            <div className="text-lg font-bold text-white leading-tight">
              RANDEVU PANELİ
            </div>
          </div>
          {/* Mobilde sidebar içinde kapatma butonu */}
          <button
            onClick={onClose}
            className="md:hidden text-blue-200/70 hover:text-white p-1"
            aria-label="Menüyü kapat"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="relative flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            // Şu anki sayfa bu linkle aynıysa "aktif" stilini uygula
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-white/15 text-white font-medium"
                    : "text-blue-100/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}