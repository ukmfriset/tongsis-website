"use client";

export default function GalleryOprec() {
  const kegiatan = [
    { label: "Seminar Nasional", warna: "from-violet-100 to-violet-50" },
    { label: "Penelitian", warna: "from-cyan-100 to-cyan-50" },
    { label: "Pelatihan Kepenulisan", warna: "from-violet-100 to-cyan-50" },
    { label: "Webinar Nasional", warna: "from-cyan-100 to-violet-50" },
    { label: "Rapat Anggota", warna: "from-violet-100 to-violet-50" },
    { label: "Kunjungan Ilmiah", warna: "from-cyan-100 to-cyan-50" },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Dokumentasi
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Foto Kegiatan Riset
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Sekilas gambaran suasana kegiatan di UKM-F Riset — biar kamu
            makin yakin sebelum memutuskan untuk bergabung.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {kegiatan.map((item, index) => (
            <div
              key={index}
              className={`group relative aspect-video rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden cursor-pointer bg-gradient-to-br ${item.warna} transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2`}
            >
              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                <span className="text-4xl opacity-30">📷</span>
              </div>
              
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-10 font-medium">
          *Foto kegiatan akan diupdate segera oleh tim dokumentasi
        </p>

      </div>
    </section>
  )
}