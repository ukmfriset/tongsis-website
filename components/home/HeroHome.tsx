"use client";

export default function HeroHome() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-[#F8F9FC]">
      
      {/* Elemen Dekoratif Playful */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-200/40 blur-3xl mix-blend-multiply"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl mix-blend-multiply"></div>
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl mix-blend-multiply"></div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-md px-4 py-1.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"></span>
          <span className="text-xs font-medium text-gray-500">
            UKMF RISET FISIB UTM
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-6xl md:text-8xl font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 transition-all duration-500 ease-out hover:scale-105 cursor-pointer inline-block">
          TONGSIS 2026
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xs md:text-base text-gray-400 max-w-full font-medium whitespace-nowrap font-sans">
          Training of Good Skill of People to Imagination and Smarter
        </p>

        {/* Description */}
        <p className="mt-8 text-gray-500 max-w-lg text-base md:text-lg leading-relaxed font-sans">
          Siap Menjadi Bagian dari{" "}
          <span className="font-semibold text-violet-600">UKMF RISET FISIB UTM</span>?
          Mulai langkah pertamamu di TONGSIS 2026 dan temukan pengalaman belajar, riset, serta pengembangan diri yang inspiratif.
        </p>

        {/* Divider */}
        <div className="mt-10 flex items-center gap-3 text-gray-400">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-300"></div>
          <span className="text-xs font-medium font-sans">Pilih jalurmu di bawah</span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-300"></div>
        </div>

      </div>

    </section>
  );
}