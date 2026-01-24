import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20 bg-gray-50">
      
      {/* --- HERO SECTION: Dark & Premium --- */}
      <section className="relative bg-slate-900 text-white pt-24 pb-40 px-6 rounded-b-[40px] overflow-hidden shadow-2xl">
        
        {/* Subtle Grid Pattern (Latar Belakang Teknis) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative container mx-auto text-center z-10 max-w-5xl space-y-8">
          
          {/* Badge Professional */}
          <div className="inline-flex items-center gap-2 border border-slate-700 bg-slate-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300 tracking-widest uppercase">Verified Professional Platform</span>
          </div>

          {/* Headline Tegas */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Solusi Jasa Profesional <br />
            <span className="text-emerald-400">Tanpa Kompromi.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Hubungkan bisnis dan kebutuhan Anda dengan ribuan tenaga ahli terverifikasi. 
            Cepat, aman, dan bergaransi uang kembali.
          </p>
          
          {/* SEARCH BAR (Clean & Sharp) */}
          <div className="max-w-3xl mx-auto mt-10 p-2 bg-white rounded-lg shadow-2xl shadow-black/20 flex flex-col md:flex-row gap-2">
            <div className="flex-grow flex items-center px-6 h-14 bg-gray-50 rounded-md md:bg-transparent">
              <svg className="w-5 h-5 text-slate-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input 
                type="text" 
                placeholder="Cari layanan (misal: Konsultan Pajak, IT Support...)" 
                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 font-medium"
              />
            </div>
            <button className="h-14 md:h-auto px-10 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-semibold transition-all shadow-lg tracking-wide">
              Cari
            </button>
          </div>

          {/* Popular Categories Text */}
          <p className="text-sm text-slate-500 pt-4">
            Trending: <span className="text-slate-300 hover:text-emerald-400 cursor-pointer transition mx-2">Legal Consultant</span> • <span className="text-slate-300 hover:text-emerald-400 cursor-pointer transition mx-2">Web Developer</span> • <span className="text-slate-300 hover:text-emerald-400 cursor-pointer transition mx-2">Translator</span>
          </p>
        </div>
      </section>

      {/* --- KATEGORI JASA (Structured Grid) --- */}
      <section className="container mx-auto px-6 -mt-32 relative z-20">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
          <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
            <h3 className="text-2xl font-bold text-slate-900">Sektor Layanan</h3>
            <Link href="/categories" className="text-emerald-600 font-semibold text-sm hover:underline tracking-wide">LIHAT SEMUA</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "⚖️", title: "Legal & Hukum", desc: "Konsultan, Notaris" },
              { icon: "📈", title: "Bisnis & Keuangan", desc: "Pajak, Akuntan" },
              { icon: "💻", title: "IT & Digital", desc: "Web, Mobile App" },
              { icon: "🔧", title: "Teknik & Sipil", desc: "Arsitek, Reparasi" },
            ].map((cat, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-slate-700 rounded-lg flex items-center justify-center text-2xl mb-4 transition-colors">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-lg">{cat.title}</h4>
                <p className="text-sm text-slate-500 group-hover:text-slate-400 mt-1">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED SERVICES (Professional Cards) --- */}
      <section className="container mx-auto px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900">Top Rated Professionals</h2>
          <p className="text-slate-500 mt-2">Bekerja sama dengan mitra terbaik yang telah diverifikasi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg group">
            <div className="h-48 bg-slate-100 relative flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                 [Image Placeholder]
               </div>
               <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                 Verified
               </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">Konsultan Pajak Senior</h3>
                <span className="flex items-center text-sm font-bold text-slate-900">★ 5.0</span>
              </div>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">Spesialisasi restitusi pajak perusahaan dan pelaporan tahunan.</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                <span className="text-xs text-slate-600 font-medium">Oleh: PT Solusi Fiskal</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-lg font-bold text-slate-900">Rp 1.500.000 <span className="text-xs font-normal text-slate-500">/ Sesi</span></span>
                <button className="text-emerald-600 font-bold text-sm hover:underline">Book Now</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg group">
            <div className="h-48 bg-slate-100 relative flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                 [Image Placeholder]
               </div>
               <span className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                 Verified
               </span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">Jasa Audit Laporan Keuangan</h3>
                <span className="flex items-center text-sm font-bold text-slate-900">★ 4.9</span>
              </div>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">Audit internal dan eksternal untuk kebutuhan tender atau perbankan.</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                <span className="text-xs text-slate-600 font-medium">Oleh: KAP Santoso & Rekan</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-lg font-bold text-slate-900">Rp 5.000.000 <span className="text-xs font-normal text-slate-500">/ Project</span></span>
                <button className="text-emerald-600 font-bold text-sm hover:underline">Book Now</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl border border-slate-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg group">
            <div className="h-48 bg-slate-100 relative flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                 [Image Placeholder]
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition">Senior Web Developer (React)</h3>
                <span className="flex items-center text-sm font-bold text-slate-900">★ 5.0</span>
              </div>
              <p className="text-slate-500 text-sm mb-4 line-clamp-2">Pembuatan website korporat high-performance dengan Next.js.</p>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                <span className="text-xs text-slate-600 font-medium">Oleh: DevStudio One</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-lg font-bold text-slate-900">Rp 3.500.000 <span className="text-xs font-normal text-slate-500">/ Project</span></span>
                <button className="text-emerald-600 font-bold text-sm hover:underline">Book Now</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TRUST BANNER (Monochrome) --- */}
      <section className="container mx-auto px-6 py-10">
        <div className="border-t border-b border-slate-200 py-12">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Dipercaya oleh Perusahaan Terdepan</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {/* Logo Placeholder dengan teks simpel */}
            <span className="text-xl font-bold text-slate-800">GOTO</span>
            <span className="text-xl font-bold text-slate-800">TRAVELOKA</span>
            <span className="text-xl font-bold text-slate-800">BUKALAPAK</span>
            <span className="text-xl font-bold text-slate-800">BCA</span>
            <span className="text-xl font-bold text-slate-800">MANDIRI</span>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Solid Dark) --- */}
      <section className="container mx-auto px-6 mb-10">
        <div className="bg-slate-900 rounded-2xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bergabung Sebagai Mitra Profesional
            </h2>
            <p className="text-slate-400 text-lg">
              Tingkatkan jangkauan bisnis Anda. Akses ke ribuan klien potensial tanpa biaya pendaftaran awal.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <Link 
              href="/register-mitra" 
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-md font-bold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}