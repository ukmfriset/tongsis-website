"use client";

export default function AchievementsOprec() {
  const achievements = [
    { nama: "Nama Anggota 1", prodi: "Ilmu Komunikasi • 2022", prestasi: "Juara 1 LKTI Nasional Bidang Sosial", level: "Nasional" },
    { nama: "Nama Anggota 2", prodi: "Sosiologi • 2021", prestasi: "Juara 2 Essay Competition Tingkat Regional", level: "Regional" },
    { nama: "Nama Anggota 3", prodi: "Sastra Inggris • 2022", prestasi: "Lolos PKM-RE Pendanaan Kemendikbud", level: "Nasional" },
    { nama: "Nama Anggota 4", prodi: "Psikologi • 2023", prestasi: "Juara 3 LKTI Regional Jawa Timur", level: "Regional" },
    { nama: "Nama Anggota 5", prodi: "Ilmu Komunikasi • 2021", prestasi: "Best Paper Conference Ilmiah Nasional", level: "Nasional" },
    { nama: "Nama Anggota 6", prodi: "Sosiologi • 2022", prestasi: "Finalis PKM-K Pekan Ilmiah Mahasiswa", level: "Nasional" },
  ];

  const levelIcon: Record<string, string> = { Nasional: "🏆", Regional: "🥈" };

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Bukti Nyata
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Prestasi Anggota Riset
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Melalui semangat belajar dan berkarya, anggota UKMF RISET FISIB UTM telah meraih 
            berbagai pencapaian membanggakan di tingkat regional maupun nasional.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2 
              ${item.level === "Nasional" 
                ? "border-gray-100 hover:border-violet-300 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)]" 
                : "border-gray-100 hover:border-cyan-300 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.15)]"}`}
            >
              {/* Overlay Warna saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${item.level === "Nasional" ? "bg-violet-600" : "bg-cyan-600"}`}></div>

              {/* Icon & Level Badge */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <span className="text-3xl">{levelIcon[item.level]}</span>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  item.level === "Nasional" ? "bg-violet-50 text-violet-600" : "bg-cyan-50 text-cyan-600"
                }`}>
                  {item.level}
                </span>
              </div>

              {/* Prestasi */}
              <h4 className="relative z-10 font-extrabold text-[#0B1026] text-lg leading-snug mb-6">
                {item.prestasi}
              </h4>

              {/* Profil */}
              <div className="relative z-10 pt-6 border-t border-gray-100">
                <p className="font-bold text-[#0B1026] text-sm">{item.nama}</p>
                <p className="text-xs text-gray-400 mt-1">{item.prodi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}