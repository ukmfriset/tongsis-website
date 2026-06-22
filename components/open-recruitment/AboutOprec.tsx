"use client";

export default function AboutOprec() {
  return (
    <section id="tentang" className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Kenalan Dulu
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Wait, UKM-F Riset itu apa sih?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Bukan organisasi kampus yang kegiatannya cuma rapat doang. 
            UKM-F Riset FISIB UTM adalah komunitas mahasiswa yang genuinely suka riset, nulis, dan bikin karya yang punya dampak nyata. 
            Di sini kamu bakal nemu circle yang frekuensinya sama — sama-sama penasaran, sama-sama mau tumbuh, sama-sama capek jadi mahasiswa yang cuma kuliah-pulang-kuliah-pulang.
          </p>
        </div>

        {/* Nilai Inti */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#A6691F] uppercase">
            Nilai-nilai Inti
          </span>
          <h3 className="mt-2 text-3xl font-extrabold text-[#0D0D0D]">Hidup di UKM-F Riset?<br/>Ada satu kode: #ADIK</h3>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Ini bukan slogan asal tempel. Ini cara kita exist bareng.
          </p>
        </div>

        {/* Card Grid #ADIK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { huruf: "A", judul: "Adaptif", warna: "orange", deskripsi: "Dunia berubah cepet. Kita lebih cepet." },
            { huruf: "D", judul: "Dedikatif", warna: "brown", deskripsi: "Kalau udah commit, kita jalanin sampai kelar. No setengah-setengah." },
            { huruf: "I", judul: "Inklusif", warna: "orange", deskripsi: "Semua suara didengar. Nggak ada yang terlalu 'baru' buat punya pendapat. " },
            { huruf: "K", judul: "Kreatif", warna: "brown", deskripsi: "Dari ide receh jadi karya, dari karya jadi prestasi. Itu vibe kita." },
          ].map((item) => (
            <div
              key={item.huruf}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border text-center transition-all duration-300 hover:-translate-y-2 
              ${item.warna === "orange" 
                ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"}`}
            >
              {/* Overlay Hover Light */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-300 ${item.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              {/* Badge Huruf */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto ${
                item.warna === "orange" 
                  ? "bg-gradient-to-br from-[#F27405] to-[#ff8c21] shadow-lg shadow-[#F27405]/20 text-white" 
                  : "bg-gradient-to-br from-[#A6691F] to-[#c28132] shadow-lg shadow-[#A6691F]/20 text-white"
              }`}>
                <span className="text-3xl font-black">{item.huruf}</span>
              </div>
              
              <h4 className="relative z-10 font-extrabold text-[#0D0D0D] text-xl mb-3">{item.judul}</h4>
              <p className="relative z-10 text-gray-500 leading-relaxed text-sm font-medium">{item.deskripsi}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}