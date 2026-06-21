export default function SponsorDiklat() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Didukung Oleh
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Sponsor TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            Terima kasih kepada para mitra dan sponsor yang telah mendukung 
            kesuksesan pelaksanaan TONGSIS.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="group rounded-[2rem] border-2 border-dashed border-gray-200 p-8 flex items-center justify-center transition-all duration-300 hover:border-violet-300 hover:bg-violet-50/50"
            >
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest group-hover:text-violet-400 transition-colors">
                Logo Sponsor {i}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Tertarik menjadi bagian dari TONGSIS? 
            <a href="#" className="ml-1 font-bold text-violet-600 hover:underline">
              Hubungi kami untuk kerjasama.
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}