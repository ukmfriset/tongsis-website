export default function InfoDiklat() {
  const info = [
    {
      icon: "💰",
      judul: "Pembayaran",
      items: [
        "Biaya pendaftaran: Rp XX.XXX",
        "Pembayaran melalui rekening panitia",
        "Konfirmasi via WhatsApp",
        "Batas bayar: 07 September 2026",
      ],
    },
    {
      icon: "🕐",
      judul: "Waktu",
      items: [
        "Pra Diklat: 08 - 10 September 2026",
        "Diklat Utama: 12 - 14 September 2026",
        "Pelantikan: 14 September 2026",
        "Durasi: 3 hari 2 malam",
      ],
    },
    {
      icon: "📍",
      judul: "Tempat",
      items: [
        "Lokasi: TBA (akan diumumkan)",
        "Area: Sekitar Bangkalan, Madura",
        "Transportasi: Mandiri",
        "Update info via panitia",
      ],
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Info Penting
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Pembayaran, Waktu & Tempat
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Persiapkan dirimu dengan baik. Berikut informasi pelaksanaan TONGSIS yang perlu kamu ketahui.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.map((item) => (
            <div 
              key={item.judul} 
              className="bg-white rounded-[2rem] border border-gray-100 p-8 transition-all duration-300 hover:border-violet-200 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-[#0B1026] text-lg">{item.judul}</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {item.items.map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-violet-500 mt-1.5 text-[10px]">●</span>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}