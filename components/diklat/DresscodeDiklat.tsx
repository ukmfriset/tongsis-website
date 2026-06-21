export default function DresscodeDiklat() {
  const days = [
    { day: "Day 1", status: "Coming Soon" },
    { day: "Day 2", status: "Coming Soon" },
    { day: "Day 3", status: "Coming Soon" },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="mx-auto max-w-5xl">

        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-violet-600 uppercase">
            Persiapan
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#0B1026] tracking-tight">
            Dresscode TONGSIS
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dresscode akan diumumkan setelah pendaftaran TONGSIS ditutup. 
            Pantau terus halaman ini!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {days.map((item) => (
            <div
              key={item.day}
              className="group bg-white rounded-[2rem] border-2 border-dashed border-gray-200 p-10 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 hover:border-violet-300 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.15)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-3xl bg-gray-50 flex items-center justify-center transition-colors group-hover:bg-violet-50">
                <span className="text-3xl">👕</span>
              </div>
              <h3 className="font-extrabold text-xl text-[#0B1026]">{item.day}</h3>
              <span className="text-xs font-bold px-4 py-2 rounded-full bg-amber-50 text-amber-600 tracking-wider uppercase">
                {item.status}
              </span>
              <p className="text-sm text-gray-400 mt-2">
                Akan diumumkan setelah pendaftaran ditutup
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}