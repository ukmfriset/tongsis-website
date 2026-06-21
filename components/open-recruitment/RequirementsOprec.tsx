"use client";

export default function RequirementsOprec() {
  const syarat = [
    { 
      judul: "Mahasiswa Aktif", 
      detail: "Pastikan kamu adalah mahasiswa aktif FISIB minimal semester 1 hingga maksimal semester 5." 
    },
    { 
      judul: "Follow Media Sosial", 
      detail: "Jangan lupa untuk follow akun Instagram resmi kami agar tidak ketinggalan informasi terbaru." 
    },
    { 
      judul: "Isi Formulir", 
      detail: "Pastikan semua data di formulir pendaftaran diisi dengan lengkap dan benar." 
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Sebelum Daftar
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-[#0B1026] tracking-tight">
            Persyaratan
          </h2>
        </div>

        {/* Grid menyamping dengan 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {syarat.map((item, i) => (
            <div 
              key={i}
              className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-violet-200 hover:shadow-lg cursor-default"
            >
              {/* Icon Checkmark */}
              <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center mb-6">
                <span className="text-violet-600 font-bold">✓</span>
              </div>

              <h3 className="font-bold text-lg text-[#0B1026] mb-2">{item.judul}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}