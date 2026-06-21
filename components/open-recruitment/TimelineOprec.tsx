"use client";

export default function TimelineOprec() {
  const steps = [
    { no: "01", judul: "Pendaftaran", tanggal: "Akan Diumumkan", deskripsi: "Isi formulir pendaftaran online." },
    { no: "02", judul: "Test Tulis", tanggal: "Akan Diumumkan", deskripsi: "Tes kemampuan penalaran dan kepenulisan." },
    { no: "03", judul: "Wawancara", tanggal: "Akan Diumumkan", deskripsi: "Sesi wawancara motivasi dan minat." },
    { no: "04", judul: "Pengumuman", tanggal: "Akan Diumumkan", deskripsi: "Pengumuman peserta yang diterima." },
    { no: "05", judul: "Pendaftaran TONGSIS", tanggal: "Akan Diumumkan", deskripsi: "Pendaftaran Diklat TONGSIS 2026." },
    { no: "06", judul: "Pra Diklat", tanggal: "Akan Diumumkan", deskripsi: "Serangkaian kegiatan persiapan." },
    { no: "07", judul: "Diklat TONGSIS", tanggal: "Akan Diumumkan", deskripsi: "Pelaksanaan diklat intensif." },
    { no: "08", judul: "Resmi Jadi Anggota", tanggal: "Akan Diumumkan", deskripsi: "Resmi anggota baru UKM-F Riset." },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">Tahapan Seleksi</span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#0B1026]">Timeline Open Recruitment 2026</h2>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.no} 
              className="bg-white rounded-[2rem] p-6 border border-gray-100 transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{step.no}</span>
                <span className="text-[10px] font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded-full uppercase">
                  {step.tanggal}
                </span>
              </div>
              <h3 className="font-extrabold text-[#0B1026] text-lg mb-2">{step.judul}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}