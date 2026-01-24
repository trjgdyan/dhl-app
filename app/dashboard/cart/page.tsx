import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-5xl mx-auto pb-20">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Keranjang Belanja</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* --- KOLOM KIRI: DAFTAR ITEM --- */}
        <div className="flex-1 space-y-4">
          
          {/* Header List */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500" defaultChecked />
            <span className="font-semibold text-slate-700">Pilih Semua (2)</span>
          </div>

          {/* ITEM 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100">
               <div className="w-6 h-6 rounded-full bg-slate-200"></div>
               <span className="font-bold text-slate-900 text-sm">Berkah Teknik</span>
               <span className="text-slate-400 text-xs">Official Partner</span>
            </div>

            <div className="flex gap-4">
               {/* Checkbox */}
               <div className="flex items-start pt-2">
                 <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500" defaultChecked />
               </div>
               
               {/* Gambar Produk */}
               <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                 ❄️
               </div>

               {/* Detail */}
               <div className="flex-1">
                 <h3 className="font-bold text-slate-900 line-clamp-2">Service AC Cuci Besar & Isi Freon R32 - Jakarta Selatan</h3>
                 <p className="text-sm text-slate-500 mt-1">Varian: Cuci Besar + Freon</p>
                 <p className="text-lg font-bold text-slate-900 mt-2">Rp 75.000</p>
               </div>
            </div>

            {/* Actions (Note & Quantity) */}
            <div className="flex justify-end items-center mt-4 gap-4">
               <button className="text-slate-400 hover:text-red-500 transition">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
               </button>
               <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                 <button className="px-3 py-1 text-slate-600 hover:bg-slate-100">-</button>
                 <input type="text" value="3" className="w-12 text-center text-sm font-semibold outline-none" readOnly />
                 <button className="px-3 py-1 text-emerald-600 hover:bg-emerald-50">+</button>
               </div>
            </div>
            
            {/* Notes Input */}
            <div className="mt-4">
              <input type="text" placeholder="Tulis catatan untuk teknisi (Opsional)..." className="w-full text-sm border-b border-dashed border-slate-300 pb-1 outline-none focus:border-emerald-500 text-slate-600" />
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-100">
               <div className="w-6 h-6 rounded-full bg-slate-200"></div>
               <span className="font-bold text-slate-900 text-sm">TaxPro Solution</span>
            </div>

            <div className="flex gap-4">
               <div className="flex items-start pt-2">
                 <input type="checkbox" className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500" defaultChecked />
               </div>
               
               <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                 📊
               </div>

               <div className="flex-1">
                 <h3 className="font-bold text-slate-900 line-clamp-2">Jasa Pembuatan Laporan SPT Tahunan Pribadi</h3>
                 <p className="text-sm text-slate-500 mt-1">Varian: Express (1 Hari)</p>
                 <p className="text-lg font-bold text-slate-900 mt-2">Rp 500.000</p>
               </div>
            </div>

            <div className="flex justify-end items-center mt-4 gap-4">
               <button className="text-slate-400 hover:text-red-500 transition">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
               </button>
               <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                 <button className="px-3 py-1 text-slate-600 hover:bg-slate-100">-</button>
                 <input type="text" value="1" className="w-12 text-center text-sm font-semibold outline-none" readOnly />
                 <button className="px-3 py-1 text-emerald-600 hover:bg-emerald-50">+</button>
               </div>
            </div>
          </div>

        </div>

        {/* --- KOLOM KANAN: RINGKASAN --- */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Ringkasan Belanja</h3>
            
            <div className="space-y-3 mb-6 border-b border-slate-100 pb-6">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Total Harga (4 Barang)</span>
                <span>Rp 725.000</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Biaya Layanan</span>
                <span>Rp 2.000</span>
              </div>
              <div className="flex justify-between text-sm text-emerald-600 font-medium">
                <span>Total Diskon</span>
                <span>-Rp 0</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-slate-900 text-lg">Total Tagihan</span>
              <span className="font-bold text-emerald-600 text-xl">Rp 727.000</span>
            </div>

            <Link 
              href="/dashboard/checkout" 
              className="block w-full text-center bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition shadow-md mb-3"
            >
              Beli (2)
            </Link>
            
            <p className="text-xs text-center text-slate-400">
              Dengan membayar, saya menyetujui S&K DOITBRO.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}