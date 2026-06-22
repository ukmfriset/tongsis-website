"use client";

export default function SponsorDiklat() {
  return (
    <section className="py-24 px-4 bg-[#F2F2F2]">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F27405] uppercase">
            Didukung Oleh
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0D0D0D] tracking-tight">
            Sponsor TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Terima kasih untuk para mitra yang udah ikut bikin TONGSIS bisa terjadi.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => {
            // Logika pembagian aksen selang-seling warna tim
            const isOrange = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`group relative overflow-hidden bg-white rounded-[2rem] border-2 border-dashed border-gray-200 p-8 flex items-center justify-center min-h-[7rem] transition-all duration-300 hover:-translate-y-1
                  ${isOrange 
                    ? "hover:border-[#F27405]/40 hover:shadow-[0_15px_35px_-10px_rgba(242,116,5,0.08)]" 
                    : "hover:border-[#A6691F]/40 hover:shadow-[0_15px_35px_-10px_rgba(166,105,31,0.08)]"
                  }`}
              >
                {/* Overlay Transparan saat Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 ${isOrange ? "bg-[#F27405]" : "bg-[#A6691F]"}`}></div>

                <p className={`text-xs font-extrabold uppercase tracking-widest text-gray-300 transition-colors duration-300 relative z-10
                  ${isOrange ? "group-hover:text-[#F27405]" : "group-hover:text-[#A6691F]"}`}
                >
                  Logo Sponsor {i}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section / Tautan Kerjasama */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Tertarik jadi bagian dari TONGSIS sebagai mitra?{" "}
            <a 
              href="#" 
              className="ml-1 font-extrabold text-[#F27405] hover:text-[#A6691F] underline transition-colors"
            >
              Hubungi kami untuk info kerjasama.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}