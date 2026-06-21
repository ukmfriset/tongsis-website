export default function GalleryDiklat() {
  const photos = [
    { label: "Pembukaan TONGSIS" },
    { label: "Sesi Materi" },
    { label: "Outbound" },
    { label: "Games & Ice Breaking" },
    { label: "Malam Keakraban" },
    { label: "Pelantikan Anggota" },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Dokumentasi
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Gallery TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Sekilas suasana TONGSIS tahun-tahun sebelumnya.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-[2rem] bg-gray-100 border border-gray-100 overflow-hidden cursor-pointer shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-transform duration-700 group-hover:scale-110"></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>
              
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl text-gray-300 transition-transform duration-500 group-hover:scale-110">📷</span>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <span className="text-sm font-bold text-white tracking-wide">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12 font-medium">
          Foto akan diupdate setelah pelaksanaan TONGSIS selesai
        </p>

      </div>
    </section>
  )
}