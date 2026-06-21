import Link from "next/link";

export default function HeroDiklat() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-[#F8F9FC]">
      
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-cyan-200/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-violet-200/30 blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl">

        {/* Badge Status */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-6 py-2 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-violet-500 animate-pulse"></span>
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Pendaftaran TONGSIS 2026 Dibuka
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B1026] leading-[1.1] tracking-tighter">
          Selamat! Kamu <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-600">
            Selangkah Lagi
          </span> Menjadi Anggota
        </h1>

        {/* Description */}
        <p className="mt-8 text-gray-500 max-w-xl text-lg leading-relaxed">
          Kamu telah lolos seleksi. Langkah berikutnya adalah mengikuti 
          <strong> TONGSIS 2026</strong>, rangkaian Diklat Anggota Baru UKM-F Riset 
          FISIB UTM untuk memulai perjalanan risetmu.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#"
            className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4 text-sm font-bold text-white transition hover:scale-105 shadow-xl shadow-violet-500/20"
          >
            Daftar TONGSIS
          </Link>
          <Link
            href="#tongsis"
            className="rounded-full border border-gray-200 bg-white px-10 py-4 text-sm font-bold text-gray-600 transition hover:border-gray-300"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll ke bawah</span>
          <div className="h-10 w-0.5 bg-gradient-to-b from-gray-200 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}