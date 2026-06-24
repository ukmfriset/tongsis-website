"use client";

export default function WhyJoinOprec() {
  const reasons = [
    { 
      no: "01", 
      icon: "🌱", 
      warna: "orange", 
      judul: "Belajar Riset Dari Awal", 
      deskripsi: "Belum pernah membuat karya ilmiah? Tidak masalah. Kamu akan belajar mulai dari dasar: mencari ide, menyusun penelitian, menulis, hingga mempresentasikan karya." 
    },
    { 
      no: "02", 
      icon: "🏆", 
      warna: "brown", 
      judul: "Peluang Mengembangkan Prestasi", 
      deskripsi: "LKTI, PKM, essay competition — kita ikut semua, dan selalu ada senior + pembina yang siap nemenin prosesnya." 
    },
    { 
      no: "03", 
      icon: "🌐", 
      warna: "orange", 
      judul: "Relasi Yang Berkembang", 
      deskripsi: "Bangun koneksi dengan teman seperjuangan, senior, alumni, dan orang-orang yang bisa membuka perspektif baru untuk masa depanmu." 
    },
    { 
      no: "04", 
      icon: "🧡", 
      warna: "brown", 
      judul: "Lingkungan Untuk Bertumbuh", 
      deskripsi: "Tempat untuk bertanya, mencoba, dan belajar tanpa takut salah. Karena setiap proses punya cerita." 
    },
    { 
      no: "05", 
      icon: "🧭", 
      warna: "orange", 
      judul: "Pengalaman Organisasi Nyata", 
      deskripsi: "Belajar mengelola program, bekerja dalam tim, mengambil keputusan, dan mengembangkan kemampuan kepemimpinan." 
    },
    { 
      no: "06", 
      icon: "📂", 
      warna: "brown", 
      judul: "Portofolio Untuk Masa Depan", 
      deskripsi: "Setiap pengalaman, karya, dan kegiatan bisa menjadi bagian dari perjalanan akademik serta profesional kamu." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Kenapa Harus Gabung?
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Apakah Ini Worth It?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Bukan cuma tentang organisasi. Ini tentang pengalaman yang bisa kamu bawa setelah lulus.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((item) => (
            <div
              key={item.no}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.warna === "orange" 
                ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"}`}
            >
              {/* Overlay Tipis di Latar Belakang Kartu saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${item.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              <div className="relative z-10 flex items-center justify-between mb-6">
                {/* Icon Wadah Minimalis dengan Border/Outline Saja */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 bg-transparent transition-all duration-300 
                  ${item.warna === "orange" 
                    ? "border-[#F27405]/20 group-hover:border-[#F27405] group-hover:shadow-md group-hover:shadow-[#F27405]/10" 
                    : "border-[#A6691F]/20 group-hover:border-[#A6691F] group-hover:shadow-md group-hover:shadow-[#A6691F]/10"
                  }`}
                >
                  {item.icon}
                </div>
                
                {/* Indikator Angka Besar */}
                <span className={`text-4xl font-black opacity-10 select-none ${
                  item.warna === "orange" ? "text-[#F27405]" : "text-[#A6691F]"
                }`}>
                  {item.no}
                </span>
              </div>
              
              <h3 className="relative z-10 font-extrabold text-[#0D0D0D] text-lg mb-3">{item.judul}</h3>
              <p className="relative z-10 text-gray-500 leading-relaxed text-sm font-medium">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}