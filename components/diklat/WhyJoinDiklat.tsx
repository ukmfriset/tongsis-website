"use client";

export default function WhyJoinDiklat() {
  const reasons = [
    {
      no: "01",
      warna: "cyan",
      judul: "Langkah Menuju Keanggotaan Resmi",
      deskripsi: "TONGSIS merupakan salah satu tahapan krusial yang perlu diikuti oleh calon anggota sebelum resmi menjadi bagian dari UKM-F Riset.",
    },
    {
      no: "02",
      warna: "violet",
      judul: "Pembelajaran yang Terarah",
      deskripsi: "Setiap rangkaian kegiatan dirancang untuk membantu calon anggota memahami dasar-dasar riset, organisasi, dan nilai-nilai UKM-F Riset.",
    },
    {
      no: "03",
      warna: "cyan",
      judul: "Mengenal UKM-F Riset Lebih Dekat",
      deskripsi: "Kesempatan untuk berinteraksi langsung dengan pengurus, anggota aktif, dan sesama calon anggota dalam suasana yang lebih akrab.",
    },
    {
      no: "04",
      warna: "violet",
      judul: "Pengalaman Belajar yang Berkesan",
      deskripsi: "Melalui berbagai kegiatan dan dinamika kelompok, TONGSIS menjadi ruang untuk belajar, berkolaborasi, dan bertumbuh bersama.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Alasan Ikut
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Kenapa Harus Ikut TONGSIS?
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            TONGSIS bukan sekadar kewajiban — ini adalah awal dari perjalananmu
            yang sesungguhnya di UKM-F Riset.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((item) => (
            <div
              key={item.no}
              className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5"
            >
              {/* Nomor */}
              <span className={`text-4xl font-black transition-colors ${
                item.warna === "cyan" ? "text-cyan-100 group-hover:text-cyan-200" : "text-violet-100 group-hover:text-violet-200"
              }`}>
                {item.no}
              </span>
              
              <h3 className="mt-4 font-extrabold text-[#0B1026] text-lg mb-3">{item.judul}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.deskripsi}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}