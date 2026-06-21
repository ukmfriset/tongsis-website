import Link from "next/link";

export default function CommitteeDiklat() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl text-center">
        {/* Header */}
        <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
          Panitia
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
          Meet the Committee
        </h2>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Kenalan sama orang-orang di balik layar yang udah kerja keras
          bikin TONGSIS jadi pengalaman yang berkesan buat kamu.
        </p>

        {/* Committee Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="group bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col items-center gap-4 transition-all duration-300 hover:border-violet-200 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-2"
            >
              <div className="w-24 h-24 rounded-3xl bg-violet-50 flex items-center justify-center text-3xl overflow-hidden transition-colors group-hover:bg-violet-100">
                👤
              </div>
              <div className="space-y-1">
                <p className="font-extrabold text-[#0B1026] text-sm">Nama Panitia {i}</p>
                <p className="text-xs font-bold text-violet-500 bg-violet-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  Divisi
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-8">dan masih banyak lagi...</p>

        {/* Action Button */}
        <div className="mt-12">
          <Link
            href="/committee"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-10 py-4 text-sm font-bold text-white transition hover:scale-105 shadow-xl shadow-violet-500/20"
          >
            Lihat Semua Panitia
          </Link>
        </div>
      </div>
    </section>
  );
}