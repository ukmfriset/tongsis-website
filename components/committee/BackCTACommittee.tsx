import Link from "next/link";

export default function BackCTACommittee() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-2xl text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1026] tracking-tight">
          Sudah Kenal Tim Kami?
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Yuk lanjut cek info lengkap TONGSIS dan siapkan dirimu.
        </p>

        <div className="mt-10">
          <Link
            href="/diklat"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4 text-sm font-bold text-white transition hover:scale-105 shadow-xl shadow-violet-500/20"
          >
            Kembali ke Info Diklat
          </Link>
        </div>

      </div>
    </section>
  )
}