"use client";

export default function RequirementsOprec() {
  const syarat = [
    { 
      judul: "Syarat 1: Mahasiswa aktif FISIB UTM", 
      detail: "Minimal semester 1, maksimal semester 5.",
      warna: "orange"
    },
    { 
      judul: "Syarat 2: Follow akun Instagram resmi kami", 
      detail: "Biar nggak ketinggalan info penting.",
      warna: "brown"
    },
    { 
      judul: "Syarat 3: Isi Formulir", 
      detail: "Isi formulir pendaftaran dengan data yang lengkap dan jujur.",
      warna: "orange"
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Persyaratan Pendaftaran
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Sebelum Daftar, Cek Dulu Ya
          </h2>
        </div>

        {/* Grid menyamping dengan 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {syarat.map((item, i) => (
            <div 
              key={i}
              className={`group relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 cursor-default
                ${item.warna === "orange" 
                  ? "hover:border-[#F27405]/30 hover:shadow-[0_20px_50px_-15px_rgba(242,116,5,0.12)]" 
                  : "hover:border-[#A6691F]/30 hover:shadow-[0_20px_50px_-15px_rgba(166,105,31,0.12)]"
                }`}
            >
              {/* Overlay Transparan saat Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${item.warna === "orange" ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

              {/* Icon Checkmark Minimalis (Outline-Only) */}
              <div className={`relative z-10 w-10 h-10 rounded-full border-2 bg-transparent flex items-center justify-center mb-6 transition-all duration-300
                ${item.warna === "orange"
                  ? "border-[#F27405]/20 group-hover:border-[#F27405] text-[#F27405]"
                  : "border-[#A6691F]/20 group-hover:border-[#A6691F] text-[#A6691F]"
                }`}
              >
                <span className="font-extrabold text-sm">✓</span>
              </div>

              <h3 className="relative z-10 font-extrabold text-lg text-[#0D0D0D] mb-2">{item.judul}</h3>
              <p className="relative z-10 text-sm text-gray-500 leading-relaxed font-medium">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}