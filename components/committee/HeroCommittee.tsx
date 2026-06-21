import Link from "next/link"

export default function HeroCommittee() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center pt-12">

      <Link
        href="/diklat"
        className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-cyan-600 transition"
      >
        ← Kembali ke Diklat TONGSIS
      </Link>

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5">
        <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
        <span className="text-xs font-medium text-cyan-600">
          TONGSIS 2026
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-[#0B1026] leading-tight max-w-3xl">
        Meet the
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-600">
          Committee
        </span>
      </h1>

      <p className="mt-6 text-gray-500 max-w-xl text-base md:text-lg leading-relaxed">
        Orang-orang di balik layar yang bekerja keras supaya TONGSIS
        jadi pengalaman yang berkesan buat kamu.
      </p>

    </section>
  )
}