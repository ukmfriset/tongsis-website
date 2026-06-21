"use client";

export default function AboutOprec() {
  return (
    <section id="tentang" className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Kenalan Dulu
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Apa itu UKMF RISET FISIB?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Lebih dari sekadar organisasi, UKM-F Riset adalah tempat untuk bertemu
            teman seperjuangan, mengembangkan kemampuan riset, dan menciptakan karya
            yang berdampak. Di sini, ide-ide berkembang menjadi prestasi.
          </p>
        </div>

        {/* Nilai Inti - TEKS INI YANG TADI HILANG */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-cyan-600 uppercase">
            Nilai-nilai Inti
          </span>
          <h3 className="mt-2 text-3xl font-extrabold text-[#0B1026]">#ADIK</h3>
        </div>

        {/* Card Grid #ADIK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { huruf: "A", judul: "Adaptif", warna: "violet", deskripsi: "Mampu menyesuaikan diri dengan perubahan dan berbagai situasi." },
            { huruf: "D", judul: "Dedikatif", warna: "cyan", deskripsi: "Bekerja dengan penuh tanggung jawab, komitmen, dan semangat." },
            { huruf: "I", judul: "Inklusif", warna: "violet", deskripsi: "Menghargai keberagaman serta membangun lingkungan yang mendukung." },
            { huruf: "K", judul: "Kreatif", warna: "cyan", deskripsi: "Menciptakan ide, solusi, dan karya inovatif melalui riset." },
          ].map((item) => (
            <div
              key={item.huruf}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.warna === "violet" 
                ? "border-gray-100 hover:border-violet-300 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)]" 
                : "border-gray-100 hover:border-cyan-300 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.15)]"}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${item.warna === "violet" ? "bg-violet-600" : "bg-cyan-600"}`}></div>

              <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                item.warna === "violet" ? "bg-violet-500 shadow-lg shadow-violet-200 text-white" : "bg-cyan-500 shadow-lg shadow-cyan-200 text-white"
              }`}>
                <span className="text-3xl font-black">{item.huruf}</span>
              </div>
              <h4 className="relative z-10 font-extrabold text-[#0B1026] text-xl mb-3">{item.judul}</h4>
              <p className="relative z-10 text-gray-500 leading-relaxed text-sm">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}