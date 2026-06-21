"use client";

export default function BenefitDiklat() {
  const benefits = [
    { 
      no: "01", 
      icon: "📚", 
      warna: "violet", 
      judul: "Materi Kepenulisan & Riset", 
      deskripsi: "Pelajari dasar-dasar riset, kepenulisan ilmiah, penalaran, dan metodologi penelitian lewat sesi pembekalan yang terstruktur." 
    },
    { 
      no: "02", 
      icon: "🎤", 
      warna: "cyan", 
      judul: "Public Speaking", 
      deskripsi: "Asah kemampuan komunikasi dan presentasi yang bermanfaat untuk kegiatan akademik maupun organisasi." 
    },
    { 
      no: "03", 
      icon: "🏕️", 
      warna: "violet", 
      judul: "Outbound & Team Building", 
      deskripsi: "Berbagai aktivitas kelompok yang dirancang untuk membangun kerja sama, kekompakan, dan kebersamaan antar peserta." 
    },
    { 
      no: "04", 
      icon: "🤝", 
      warna: "cyan", 
      judul: "Solidaritas dan Relasi Baru", 
      deskripsi: "Kenal lebih dekat dengan sesama calon anggota, pengurus, dan budaya organisasi lewat berbagai kegiatan kebersamaan." 
    },
    { 
      no: "05", 
      icon: "🌱", 
      warna: "violet", 
      judul: "Pembentukan Karakter #ADIK", 
      deskripsi: "Menumbuhkan nilai-nilai Adaptif, Dedikatif, Inklusif, dan Kreatif sebagai landasan dalam berorganisasi." 
    },
    { 
      no: "06", 
      icon: "📜", 
      warna: "cyan", 
      judul: "Sertifikat Resmi", 
      deskripsi: "Sertifikat resmi sebagai bukti partisipasi dalam rangkaian kegiatan TONGSIS." 
    },
    { 
      no: "07", 
      icon: "👕", 
      warna: "violet", 
      judul: "Fasilitas Peserta", 
      deskripsi: "Fasilitas yang disediakan panitia untuk mendukung kenyamanan dan kelancaran kegiatanmu." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Yang Kamu Dapat
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Benefit dan Fasilitas
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Berbagai materi, pengalaman, dan fasilitas yang mendukung proses pembelajaranmu selama mengikuti TONGSIS.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item.no}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.warna === "violet" 
                ? "border-gray-100 hover:border-violet-300 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)]" 
                : "border-gray-100 hover:border-cyan-300 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.15)]"}`}
            >
              {/* Overlay Warna saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${item.warna === "violet" ? "bg-violet-600" : "bg-cyan-600"}`}></div>

              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
                  item.warna === "violet" ? "bg-violet-500 shadow-violet-200 text-white" : "bg-cyan-500 shadow-cyan-200 text-white"
                }`}>
                  {item.icon}
                </div>
                <span className={`text-4xl font-black opacity-10 ${
                  item.warna === "violet" ? "text-violet-600" : "text-cyan-600"
                }`}>
                  {item.no}
                </span>
              </div>
              
              <h3 className="relative z-10 font-extrabold text-[#0B1026] text-lg mb-3">{item.judul}</h3>
              <p className="relative z-10 text-gray-500 leading-relaxed text-sm">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}