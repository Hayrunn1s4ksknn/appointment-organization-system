// Bu component "use client" gerektirmiyor çünkü içinde hiçbir tarayıcı-özel
// hook (state, event vs.) yok, sadece sabit metin gösteriyor.

export default function Header() {
  return (
    <header className="h-16 w-full border-b border-zinc-200 bg-white flex items-center justify-between px-6">
      <h1 className="text-base font-medium text-zinc-800">
        Randevu Takip ve Organizasyon Sistemi
      </h1>
      <div className="text-sm text-zinc-500">Hoş geldin 👋</div>
    </header>
  );
}