"use client";

export default function WhyJoinOprec() {
  const reasons = [
    { 
      no: "01", 
      icon: "🌱", 
      warna: "violet", 
      judul: "Belajar Riset dari Nol", 
      deskripsi: "Belum punya pengalaman? Tenang, kamu dibimbing dari dasar: penulisan karya ilmiah, metodologi penelitian, sampai teknik presentasi." 
    },
    { 
      no: "02", 
      icon: "🏆", 
      warna: "cyan", 
      judul: "Kesempatan Meraih Prestasi", 
      deskripsi: "Ikuti kompetisi ilmiah dari tingkat regional sampai nasional seperti LKTI dan PKM, didampingi senior dan pembina berpengalaman." 
    },
    { 
      no: "03", 
      icon: "🌐", 
      warna: "violet", 
      judul: "Relasi dan Jaringan Alumni", 
      deskripsi: "Terhubung dengan anggota dan alumni UKM-F Riset yang sudah berkiprah di berbagai kampus, instansi, dan perusahaan." 
    },
    { 
      no: "04", 
      icon: "💙", 
      warna: "cyan", 
      judul: "Lingkungan yang Supportif", 
      deskripsi: "Belajar dan berkembang dalam komunitas yang terbuka untuk berdiskusi serta menghargai setiap proses belajar." 
    },
    { 
      no: "05", 
      icon: "🧭", 
      warna: "violet", 
      judul: "Pengalaman Organisasi yang Berharga", 
      deskripsi: "Asah kemampuan kepemimpinan, kerja sama tim, dan manajemen program lewat pengalaman nyata." 
    },
    { 
      no: "06", 
      icon: "📂", 
      warna: "cyan", 
      judul: "Portofolio, CV, dan Sertifikat Resmi", 
      deskripsi: "Tambahkan pengalaman kompetisi, publikasi, dan kepanitiaan yang diakui resmi — jadi nilai tambah untuk masa depanmu." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Kenapa Harus Gabung?
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Why Join UKMF RISET FISIB?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Masih ragu? Di UKMF RISET FISIB UTM, kamu bukan sekadar anggota. Kamu 
            adalah bagian dari komunitas yang belajar, berkembang, dan mencetak prestasi bersama.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((item) => (
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
                  item.warna === "violet" ? "text-violet-600" : "bg-transparent text-cyan-600"
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