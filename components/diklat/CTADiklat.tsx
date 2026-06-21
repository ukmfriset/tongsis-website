import Link from "next/link";

export default function CTADiklat() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-3xl">
        {/* Main CTA Box */}
        <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 to-cyan-500 p-12 md:p-16 text-center shadow-2xl shadow-violet-500/20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Siap Ikut TONGSIS? 🎉
          </h2>
          <p className="mt-6 text-white/90 max-w-xl mx-auto text-lg leading-relaxed">
            Ini adalah langkah terakhirmu sebelum resmi jadi bagian dari
            keluarga besar UKM-F Riset. Jangan sampai terlewat!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="rounded-full bg-white px-10 py-4 text-sm font-bold text-violet-600 transition hover:scale-105 shadow-lg"
            >
              Daftar TONGSIS Sekarang
            </Link>
            <Link
              href="/open-recruitment"
              className="rounded-full border-2 border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Kembali ke Oprec
            </Link>
          </div>
        </div>

        {/* Contact Person Section - Terpisah sebagai Card tersendiri */}
        <div className="mt-8 bg-white rounded-[2rem] p-8 border border-gray-100 text-center shadow-sm">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-6">
            Ada pertanyaan? Hubungi Panitia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/6285730197634"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-50 border border-gray-100 px-8 py-4 text-sm font-bold text-gray-700 hover:bg-violet-50 hover:border-violet-100 hover:text-violet-600 transition-all"
            >
              <span>💬</span> Dinda
            </Link>
            <Link
              href="https://wa.me/6288200910179"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-50 border border-gray-100 px-8 py-4 text-sm font-bold text-gray-700 hover:bg-violet-50 hover:border-violet-100 hover:text-violet-600 transition-all"
            >
              <span>💬</span> Roicha
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}