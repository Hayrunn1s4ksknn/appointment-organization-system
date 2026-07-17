// Bu component "use client" gerektirmiyor çünkü kendi içinde state yok,
// sadece dışarıdan gelen bir fonksiyonu (onMenuClick) çağırıyor.

export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="h-16 w-full border-b border-zinc-200 bg-white flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3">
        {/* Hamburger butonu - sadece mobilde (md ve altı) görünür */}
        <button
          onClick={onMenuClick}
          className="md:hidden -ml-1 p-2 text-zinc-600 hover:text-zinc-900"
          aria-label="Menüyü aç"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-sm sm:text-base font-medium text-zinc-800 truncate">
          Randevu Takip ve Organizasyon Sistemi
        </h1>
      </div>
      <div className="hidden sm:block text-sm text-zinc-500 shrink-0">
        Hoş geldin 👋
      </div>
    </header>
  );
}