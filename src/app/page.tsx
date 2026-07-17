import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0a1f3d] px-6 text-center">
      {/* Arka plandaki ağ/nokta deseni - sidebar ile aynı görsel dil */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="white" strokeWidth="0.6">
          <line x1="80" y1="60" x2="240" y2="160" />
          <line x1="240" y1="160" x2="160" y2="300" />
          <line x1="160" y1="300" x2="380" y2="360" />
          <line x1="380" y1="360" x2="300" y2="520" />
          <line x1="80" y1="60" x2="160" y2="300" />
          <line x1="380" y1="360" x2="560" y2="220" />
          <line x1="560" y1="220" x2="720" y2="320" />
          <line x1="720" y1="320" x2="640" y2="500" />
          <line x1="640" y1="500" x2="820" y2="560" />
          <line x1="300" y1="520" x2="480" y2="620" />
          <line x1="480" y1="620" x2="700" y2="680" />
          <line x1="820" y1="560" x2="900" y2="700" />
        </g>
        <g fill="white">
          <circle cx="80" cy="60" r="3.5" />
          <circle cx="240" cy="160" r="3" />
          <circle cx="160" cy="300" r="4" />
          <circle cx="380" cy="360" r="3" />
          <circle cx="300" cy="520" r="3.5" />
          <circle cx="560" cy="220" r="3" />
          <circle cx="720" cy="320" r="3" />
          <circle cx="640" cy="500" r="3.5" />
          <circle cx="820" cy="560" r="3" />
          <circle cx="480" cy="620" r="3" />
          <circle cx="700" cy="680" r="3.5" />
          <circle cx="900" cy="700" r="3" />
        </g>
      </svg>

      <div className="relative flex flex-col items-center gap-6">
        {/* Basit bir "randevu/takvim" simgesi */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 16l2 2 4-4" />
          </svg>
        </div>

        <div className="text-xs font-medium tracking-[0.2em] text-blue-200/80">
          MERSİN TEKNOPARK
        </div>

        <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Randevu Takip ve Organizasyon Sistemi
        </h1>

        <p className="max-w-md text-base leading-7 text-blue-100/70">
          40 günlük staj projesi kapsamında Next.js, TypeScript ve Supabase
          kullanılarak geliştirilmektedir.
        </p>

        <Link
          href="/dashboard"
          className="mt-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[#0a1f3d] transition-colors hover:bg-blue-50"
        >
          Panele Git
        </Link>
      </div>
    </div>
  );
}