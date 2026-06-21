export default function CTAOprec() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-3xl">
        {/* CTA Block */}
        <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 to-cyan-500 p-12 text-center shadow-xl shadow-violet-500/20 mb-10">
          <h2 className="text-4xl font-extrabold text-white leading-tight tracking-tight">
            Yuk Join UKM-F Riset! 🚀
          </h2>
          <p className="mt-6 text-white/90 max-w-lg mx-auto text-lg leading-relaxed">
            Jangan tunda lagi. Daftar sekarang dan mulai perjalananmu
            bersama komunitas riset terbaik di FISIB UTM.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="rounded-full bg-white px-10 py-4 text-sm font-bold text-violet-600 transition hover:scale-105 shadow-lg shadow-black/10">
              Daftar Sekarang
            </a>
            <a href="https://www.ukmfriset.or.id" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              Website UKM-F Riset
            </a>
          </div>
        </div>

        {/* Contact Person Box */}
        <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm text-center">
          <p className="text-gray-500 text-sm font-bold mb-6 uppercase tracking-widest">Ada pertanyaan? Hubungi Narahubung</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              { nama: "Dinda", nomor: "0857-3019-7634", link: "https://wa.me/6285730197634" },
              { nama: "Roicha", nomor: "0882-0091-0179", link: "https://wa.me/6288200910179" },
            ].map((cp, idx) => (
              <a
                key={idx}
                href={cp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 p-4 rounded-2xl border border-gray-100 hover:border-violet-200 hover:bg-violet-50 transition-all"
              >
                <span className="font-bold text-[#0B1026]">{cp.nama}</span>
                <span className="text-xs text-gray-500 group-hover:text-violet-600 font-medium">{cp.nomor}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}