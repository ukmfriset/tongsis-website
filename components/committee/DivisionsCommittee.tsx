export default function DivisionsCommittee() {
  const divisions = [
    {
      nama: "Divisi Acara",
      anggota: ["Nama Anggota 1", "Nama Anggota 2", "Nama Anggota 3"],
    },
    {
      nama: "Divisi Konsumsi",
      anggota: ["Nama Anggota 4", "Nama Anggota 5"],
    },
    {
      nama: "Divisi Perlengkapan",
      anggota: ["Nama Anggota 6", "Nama Anggota 7", "Nama Anggota 8"],
    },
    {
      nama: "Divisi Dokumentasi",
      anggota: ["Nama Anggota 9", "Nama Anggota 10"],
    },
    {
      nama: "Divisi Humas",
      anggota: ["Nama Anggota 11", "Nama Anggota 12"],
    },
    {
      nama: "Divisi Keamanan",
      anggota: ["Nama Anggota 13", "Nama Anggota 14"],
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#F8F9FC]">
      <div className="mx-auto max-w-5xl">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Tim TONGSIS
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Divisi-divisi
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Setiap divisi punya peran penting dalam suksesnya TONGSIS.
          </p>
        </div>

        <div className="space-y-16">
          {divisions.map((div) => (
            <div key={div.nama}>
              {/* Division Title */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-gray-200"></div>
                <h3 className="font-extrabold text-violet-600 text-lg uppercase tracking-wider text-center">
                  {div.nama}
                </h3>
                <div className="h-px w-12 bg-gray-200"></div>
              </div>

              {/* Members Flex Container: Selalu Center */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {div.anggota.map((nama) => (
                  <div
                    key={nama}
                    className="w-40 group bg-white rounded-[2rem] border border-gray-100 p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-violet-50 flex items-center justify-center text-3xl overflow-hidden transition-colors group-hover:bg-violet-100">
                      👤
                    </div>
                    <p className="font-extrabold text-[#0B1026] text-sm text-center">
                      {nama}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}