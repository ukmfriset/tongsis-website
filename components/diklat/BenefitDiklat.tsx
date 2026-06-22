"use client";

export default function BenefitDiklat() {
  const benefits = [
    { 
      no: "01", 
      icon: "📚", 
      warna: "orange", 
      judul: "Materi Kepenulisan & Riset", 
      deskripsi: "Dasar-dasar riset, kepenulisan ilmiah, penalaran, dan metodologi — disampein dengan cara yang masuk akal, bukan ceramah satu arah." 
    },
    { 
      no: "02", 
      icon: "🎤", 
      warna: "brown", 
      judul: "Public Speaking", 
      deskripsi: "Latihan komunikasi dan presentasi yang berguna nggak cuma di organisasi, tapi juga buat kehidupan akademik dan karir ke depannya." 
    },
    { 
      no: "03", 
      icon: "🏕️", 
      warna: "orange", 
      judul: "Outbound & Team Building", 
      deskripsi: "Aktivitas kelompok yang bikin kamu sadar: hal-hal besar emang nggak bisa diselesaikan sendirian." 
    },
    { 
      no: "04", 
      icon: "🤝", 
      warna: "brown", 
      judul: "Relasi Baru yang Solid", 
      deskripsi: "Kamu bakal kenal orang-orang yang frekuensinya sama. Dan dari sini, circle itu mulai terbentuk." 
    },
    { 
      no: "05", 
      icon: "🌱", 
      warna: "orange", 
      judul: "Karakter #ADIK", 
      deskripsi: "Adaptif, Dedikatif, Inklusif, Kreatif — bukan dihafal, tapi dihidupin selama tiga hari bareng." 
    },
    { 
      no: "06", 
      icon: "📜", // PERBAIKAN: Mengembalikan properti icon ke emoji semula
      warna: "brown", // PERBAIKAN: Mengembalikan properti warna yang sempat hilang
      judul: "Sertifikat Resmi", 
      deskripsi: "Bukti keikutsertaanmu. Nilai tambah yang nggak ada ruginya buat portofolio." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Yang Kamu Dapat
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Ini yang Kamu Bawa Pulang dari TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Berbagai materi, pengalaman, dan fasilitas yang mendukung proses pembelajaranmu selama mengikuti TONGSIS.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item.no}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.warna === "orange" 
                ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"}`}
            >
              {/* Overlay Warna saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${item.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              <div className="relative z-10 flex items-center justify-between mb-6">
                {/* Icon Wadah Minimalis Outline-Only */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 bg-transparent transition-all duration-300 
                  ${item.warna === "orange" 
                    ? "border-[#F27405]/20 group-hover:border-[#F27405] group-hover:shadow-md group-hover:shadow-[#F27405]/10" 
                    : "border-[#A6691F]/20 group-hover:border-[#A6691F] group-hover:shadow-md group-hover:shadow-[#A6691F]/10"
                  }`}
                >
                  {item.icon}
                </div>
                
                {/* Big Number Indicator */}
                <span className={`text-4xl font-black opacity-10 select-none transition-colors duration-300 ${
                  item.warna === "orange" ? "text-[#F27405]" : "text-[#A6691F]"
                }`}>
                  {item.no}
                </span>
              </div>
              
              <h3 className="relative z-10 font-extrabold text-[#0D0D0D] text-lg mb-3">{item.judul}</h3>
              <p className="relative z-10 text-gray-500 leading-relaxed text-sm font-medium min-h-[4.5rem]">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}