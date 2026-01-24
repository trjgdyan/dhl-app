import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-10">
      
      {/* --- 1. WELCOME & SEARCH --- */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
        {/* Hiasan Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Mau cari jasa apa hari ini, Tri?</h1>
          <p className="text-slate-300 mb-6">Temukan profesional terbaik untuk kebutuhanmu.</p>
          
          <div className="flex bg-white rounded-lg overflow-hidden p-1.5 shadow-xl">
            <input 
              type="text" 
              placeholder="Cari layanan (ex: Service AC, Konsultan, Desain...)" 
              className="flex-1 px-4 py-2 text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-bold transition-colors">
              Cari
            </button>
          </div>
        </div>
      </div>

      {/* --- 2. KATEGORI MENU (Icon Bulat ala Tokopedia) --- */}
      <section>
        <h2 className="font-bold text-slate-900 mb-4 text-lg">Kategori Pilihan</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {[
            { name: "Keuangan", icon: "💰", color: "bg-emerald-100 text-emerald-600" },
            { name: "Teknologi", icon: "💻", color: "bg-blue-100 text-blue-600" },
            { name: "Rumah", icon: "🏠", color: "bg-orange-100 text-orange-600" },
            { name: "Otomotif", icon: "🚗", color: "bg-slate-200 text-slate-600" },
            { name: "Pendidikan", icon: "🎓", color: "bg-purple-100 text-purple-600" },
            { name: "Kesehatan", icon: "❤️", color: "bg-red-100 text-red-600" },
            { name: "Desain", icon: "🎨", color: "bg-pink-100 text-pink-600" },
            { name: "Lainnya", icon: "🔍", color: "bg-gray-100 text-gray-600" },
          ].map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <span className="text-xs font-semibold text-slate-600 group-hover:text-emerald-600 text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. PROMO BANNERS --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl p-6 text-white flex justify-between items-center shadow-md cursor-pointer hover:shadow-lg transition">
          <div>
            <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded uppercase">Promo</span>
            <h3 className="text-xl font-bold mt-2">Diskon Pajak 20%</h3>
            <p className="text-emerald-100 text-sm">Khusus pelaporan bulan ini</p>
          </div>
          <span className="text-4xl">📉</span>
        </div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 text-white flex justify-between items-center shadow-md cursor-pointer hover:shadow-lg transition">
          <div>
            <span className="bg-emerald-500 text-xs font-bold px-2 py-1 rounded uppercase">New</span>
            <h3 className="text-xl font-bold mt-2">Jasa Bersih Rumah</h3>
            <p className="text-slate-300 text-sm">Mitra terpercaya baru bergabung</p>
          </div>
          <span className="text-4xl">✨</span>
        </div>
      </section>

      {/* --- 4. FEED LAYANAN (Grid Produk) --- */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-slate-900 text-lg">Rekomendasi Untukmu</h2>
          <Link href="/explore" className="text-sm font-semibold text-emerald-600 hover:underline">Lihat Semua</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-emerald-500 transition-all duration-300 group cursor-pointer flex flex-col">
              
              {/* Image Placeholder */}
              <div className="h-36 bg-slate-100 relative flex items-center justify-center overflow-hidden">
                 <div className="text-4xl group-hover:scale-110 transition-transform duration-500">{service.emoji}</div>
                 {service.isPromo && (
                   <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                     PROMO
                   </span>
                 )}
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight mb-1 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                  <span className="text-xs text-slate-500 truncate">{service.vendor}</span>
                </div>
                
                <div className="mt-auto">
                  <p className="text-sm font-bold text-slate-900">{service.price}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <span className="text-xs text-slate-500 font-medium">{service.rating} | Terjual {service.sold}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

const SERVICES_DATA = [
  { id: 1, title: "Jasa Pembuatan Laporan SPT Tahunan Pribadi & Badan", vendor: "TaxPro Solution", price: "Rp 500.000", rating: "4.9", sold: "1.2rb", emoji: "📊", isPromo: true },
  { id: 2, title: "Service AC Cuci Besar & Isi Freon R32", vendor: "Berkah Teknik", price: "Rp 75.000", rating: "4.8", sold: "500+", emoji: "❄️", isPromo: false },
  { id: 3, title: "Konsultasi Hukum Kontrak Bisnis (1 Jam)", vendor: "Legal Partner", price: "Rp 1.000.000", rating: "5.0", sold: "80", emoji: "⚖️", isPromo: false },
  { id: 4, title: "Desain Logo & Branding UMKM Premium", vendor: "Creative Studio", price: "Rp 350.000", rating: "4.7", sold: "200+", emoji: "🎨", isPromo: true },
  { id: 5, title: "Privat Coding Next.js & React (Expert)", vendor: "Dev Academy", price: "Rp 150.000", rating: "5.0", sold: "150+", emoji: "💻", isPromo: false },
  { id: 6, title: "Deep Cleaning Apartemen Studio / 2BR", vendor: "CleanJoy", price: "Rp 200.000", rating: "4.8", sold: "1rb+", emoji: "✨", isPromo: false },
  { id: 7, title: "Translator Dokumen Tersumpah (Inggris-Indo)", vendor: "Lingua Fast", price: "Rp 50.000", rating: "4.9", sold: "300+", emoji: "📝", isPromo: false },
  { id: 8, title: "Jasa Foto Produk Katalog Marketplace", vendor: "Lens Capture", price: "Rp 25.000", rating: "4.6", sold: "800+", emoji: "📸", isPromo: true },
  { id: 9, title: "Admin Sosmed Instagram & TikTok Bulanan", vendor: "Viral Agency", price: "Rp 1.500.000", rating: "4.8", sold: "40", emoji: "📱", isPromo: false },
  { id: 10, title: "Pijat Refleksi Panggilan ke Rumah (90 Menit)", vendor: "Sehat Bugar", price: "Rp 120.000", rating: "4.7", sold: "400+", emoji: "💆", isPromo: false },
];