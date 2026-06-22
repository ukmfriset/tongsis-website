"use client";

export default function TimelineOprec() {
  const steps = [
    { no: "01", judul: "Pendaftaran", tanggal: "Akan Diumumkan", deskripsi: "Isi formulir online. Simpel, nggak perlu lampiran aneh-aneh dulu.", warna: "orange" },
    { no: "02", judul: "Test Tulis", tanggal: "Akan Diumumkan", deskripsi: "Tes penalaran dan kemampuan kepenulisan. Bukan ujian hafalan — ini soal cara kamu berpikir.", warna: "brown" },
    { no: "03", judul: "Wawancara", tanggal: "Akan Diumumkan", deskripsi: "Ngobrol santai soal motivasi dan minat kamu. Bukan interogasi, promise.", warna: "orange" },
    { no: "04", judul: "Pengumuman", tanggal: "Akan Diumumkan", deskripsi: "Saatnya cek notif. Siapa yang lolos, siapa yang lanjut ke tahap berikutnya.", warna: "brown" },
    { no: "05", judul: "Pendaftaran TONGSIS", tanggal: "Akan Diumumkan", deskripsi: "Kamu yang lolos bisa langsung daftar Diklat TONGSIS 2026.", warna: "orange" },
    { no: "06", judul: "Pra Diklat", tanggal: "Akan Diumumkan", deskripsi: "Serangkaian kegiatan persiapan sebelum diklat dimulai.", warna: "brown" },
    { no: "07", judul: "Diklat TONGSIS", tanggal: "Akan Diumumkan", deskripsi: "Diklat intensif. Ini momen yang bakal kamu ceritain ke orang-orang.", warna: "orange" },
    { no: "08", judul: "Resmi Jadi Anggota", tanggal: "Akan Diumumkan", deskripsi: "Welcome to the family. Ini baru awal dari segalanya.", warna: "brown" },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">Tahapan Seleksi</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">Tahapan Open Recruitment 2026</h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Nggak ribet. Prosesnya transparan, kamu tahu apa yang harus disiapkan.
          </p>
        </div>

        {/* Grid Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.no} 
              className={`group relative overflow-hidden bg-white rounded-[2rem] p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1
                ${step.warna === "orange" 
                  ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                  : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                }`}
            >
              {/* Overlay Transparan saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${step.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              <div className="relative z-10 flex justify-between items-center mb-6">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{step.no}</span>
                
                {/* Badge Status Tanggal Minimalis (Outline-Only) */}
                <span className={`text-[10px] font-extrabold border bg-transparent px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300
                  ${step.warna === "orange" 
                    ? "border-[#F27405]/20 text-[#F27405] group-hover:border-[#F27405]" 
                    : "border-[#A6691F]/20 text-[#A6691F] group-hover:border-[#A6691F]"
                  }`}
                >
                  {step.tanggal}
                </span>
              </div>
              
              <h3 className="relative z-10 font-extrabold text-[#0D0D0D] text-lg mb-2">{step.judul}</h3>
              <p className="relative z-10 text-sm text-gray-500 leading-relaxed font-medium">{step.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}