"use client";

export default function WhyJoinDiklat() {
  const reasons = [
    {
      no: "01",
      warna: "orange",
      judul: " Pintu Resmi Jadi Anggota",
      deskripsi: "TONGSIS adalah tahapan yang harus kamu lewatin sebelum resmi jadi bagian UKM-F Riset. Nggak ada shortcut, tapi percaya deh, prosesnya yang bikin it meaningful.",
    },
    {
      no: "02",
      warna: "brown",
      judul: "Belajar yang Terarah",
      deskripsi: "Setiap sesi dirancang dengan tujuan — dari dasar riset, cara kerja organisasi, sampai nilai-nilai #ADIK yang jadi DNA kita.",
    },
    {
      no: "03",
      warna: "orange",
      judul: "Kenal Lebih Dekat",
      deskripsi: "Ngobrol langsung sama pengurus, anggota aktif, dan sesama calon anggota baru. Ini tempat terbentuknya persahabatan yang beneran.",
    },
    {
      no: "04",
      warna: "brown",
      judul: "Pengalaman yang Nggak Terlupakan",
      deskripsi: "Dinamika kelompok, diskusi, outbound — semua dirancang buat bikin kamu tumbuh. Dan ya, bakal jadi cerita yang sering kamu inget.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Alasan Ikut
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Wajib Nih? Emang Worthit?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Ya wajib — tapi bukan karena formalitas. Ini alasannya kenapa kamu bakal glad you did it:
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.no}
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-8 border transition-all duration-300 hover:-translate-y-2
                ${item.warna === "orange"
                  ? "border-gray-100 hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]"
                  : "border-gray-100 hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                }`}
            >
              {/* Overlay Transparan saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${item.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              {/* Indikator Angka Besar (Gaya Transparan Tipis) */}
              <span className={`text-4xl font-black select-none transition-colors duration-300 block
                ${item.warna === "orange" 
                  ? "text-[#F27405]/15 group-hover:text-[#F27405]" 
                  : "text-[#A6691F]/15 group-hover:text-[#A6691F]"
                }`}
              >
                {item.no}
              </span>
              
              <h3 className="mt-4 font-extrabold text-[#0D0D0D] text-lg mb-3 relative z-10">{item.judul}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium relative z-10">{item.deskripsi}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}