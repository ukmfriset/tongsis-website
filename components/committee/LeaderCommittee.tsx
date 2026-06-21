export default function LeaderCommittee() {
  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-2xl">

        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Ketua Pelaksana
          </span>
        </div>

        {/* Leader Card */}
        <div className="group bg-white rounded-[2rem] border border-gray-100 p-10 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:border-violet-200 hover:shadow-[0_30px_60px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-2">
          
          {/* Photo Placeholder */}
          <div className="w-32 h-32 rounded-[2rem] bg-violet-50 flex items-center justify-center text-5xl overflow-hidden mb-8 shadow-inner transition-colors group-hover:bg-violet-100">
            👤
          </div>
          
          <h2 className="text-3xl font-extrabold text-[#0B1026]">Nama Ketua Pelaksana</h2>
          <p className="text-sm font-bold text-violet-600 bg-violet-50 px-4 py-1 rounded-full mt-3 inline-block uppercase tracking-widest">
            Prodi • Angkatan
          </p>
          
          <div className="mt-8 relative">
            <span className="text-5xl text-violet-100 font-serif absolute -top-4 -left-4">"</span>
            <p className="relative z-10 text-gray-600 text-lg leading-relaxed italic max-w-md">
              "Quote singkat dari Ketua Pelaksana untuk calon peserta TONGSIS yang menginspirasi."
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}