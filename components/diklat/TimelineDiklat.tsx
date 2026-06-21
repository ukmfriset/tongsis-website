export default function TimelineDiklat() {
  const steps = [
    {
      no: "01",
      judul: "Pendaftaran TONGSIS",
      tanggal: "01 - 07 September 2026",
      deskripsi: "Peserta yang lolos open recruitment mengisi formulir pendaftaran TONGSIS.",
      status: "aktif",
    },
    {
      no: "02",
      judul: "Pra Diklat",
      tanggal: "08 - 10 September 2026",
      deskripsi: "Serangkaian kegiatan persiapan sebelum pelaksanaan Diklat utama dimulai.",
      status: "akan-datang",
    },
    {
      no: "03",
      judul: "Diklat TONGSIS",
      tanggal: "12 - 14 September 2026",
      deskripsi: "Pelaksanaan Diklat intensif selama 3 hari — pembekalan skill, outbound, dan pelantikan.",
      status: "akan-datang",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Tahapan
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#0B1026] tracking-tight">
            Timeline TONGSIS
          </h2>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto leading-relaxed">
            Tiga tahapan yang harus kamu lewati sebelum resmi jadi anggota UKM-F Riset.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.no} 
              className={`relative bg-white p-8 rounded-[2rem] border transition-all duration-300 ${
                step.status === "aktif" 
                  ? "border-violet-200 shadow-xl shadow-violet-500/10" 
                  : "border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 font-black text-lg ${
                    step.status === "aktif" ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-400"
                  }`}>
                    {step.no}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0B1026] text-lg">{step.judul}</h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.deskripsi}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {step.tanggal}
                </span>
              </div>
              
              {/* Status Indicator */}
              {step.status === "aktif" && (
                <div className="absolute top-8 right-8">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}