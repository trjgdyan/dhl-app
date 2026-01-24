"use client";

import { useState } from "react";
import Link from "next/link";

export default function MitraDashboardPage() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="max-w-5xl mx-auto pb-20 px-4 pt-8">
      
      {/* --- 1. HEADER & STATUS --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Halo, Berkah Teknik 👋</h1>
          <p className="text-slate-500 text-sm">Siap menerima pesanan hari ini?</p>
        </div>
        
        {/* Toggle Online/Offline */}
        <button 
          onClick={() => setIsOnline(!isOnline)}
          className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all shadow-sm ${
            isOnline 
              ? "bg-emerald-600 text-white hover:bg-emerald-700" 
              : "bg-slate-200 text-slate-500 hover:bg-slate-300"
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-white animate-pulse' : 'bg-slate-400'}`}></div>
          {isOnline ? "Status: ONLINE" : "Status: OFFLINE"}
        </button>
      </div>

      {/* --- 2. STATISTIK KILAT --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card Saldo */}
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <p className="text-slate-300 text-sm mb-1">Saldo Dompet</p>
          <h3 className="text-3xl font-bold">Rp 1.500.000</h3>
          <div className="mt-4 pt-4 border-t border-slate-700 flex gap-3">
             <button className="text-xs font-bold bg-white/10 px-3 py-1.5 rounded hover:bg-white/20 transition">Riwayat</button>
             <button className="text-xs font-bold bg-emerald-500 px-3 py-1.5 rounded hover:bg-emerald-600 transition">Tarik Dana</button>
          </div>
        </div>

        {/* Card Performa */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm">Rating Toko</p>
            <div className="flex items-center gap-2 mt-1">
               <span className="text-3xl font-bold text-slate-900">4.9</span>
               <div className="flex text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
            </div>
            <p className="text-xs text-slate-400 mt-2">Dari 150 ulasan</p>
          </div>
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-2xl">🏆</div>
        </div>

        {/* Card Order */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm">Pesanan Selesai</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">24</h3>
            <p className="text-xs text-emerald-600 mt-2 font-bold">▲ +4 Hari ini</p>
          </div>
          <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-2xl">📦</div>
        </div>
      </div>

      {/* --- 3. PESANAN MASUK (URGENT) --- */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            Pesanan Baru Masuk
            <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">1</span>
          </h2>
        </div>

        {/* Card Pesanan Baru */}
        <div className="bg-white border-l-4 border-emerald-600 rounded-xl shadow-md p-6 animate-in slide-in-from-bottom-2 duration-500">
           <div className="flex flex-col md:flex-row justify-between gap-6">
              
              {/* Info Customer & Jasa */}
              <div className="flex gap-4">
                 <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                    ❄️
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 text-lg">Cuci AC Besar & Isi Freon</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                       <span className="font-semibold">John Doe</span>
                       <span>•</span>
                       <span>3 Unit</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                       📍 Jl. Mawar Melati Indah No. 12B, Jakarta Selatan (3.5 km)
                    </p>
                 </div>
              </div>

              {/* Waktu & Aksi */}
              <div className="flex flex-col items-end justify-between gap-4">
                 <div className="text-right">
                    <p className="text-sm font-bold text-emerald-600">Rp 225.000</p>
                    <p className="text-xs text-slate-400">Metode: Cashless (Lunas)</p>
                 </div>
                 <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-6 py-2 border border-red-200 text-red-600 rounded-lg font-bold hover:bg-red-50 transition">
                       Tolak
                    </button>
                    <button className="flex-1 md:flex-none px-8 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
                       Terima Order
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- 4. MENU CEPAT --- */}
      <section>
         <h2 className="text-lg font-bold text-slate-900 mb-4">Menu Kelola</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/mitra/services" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition text-center group">
               <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛠️</div>
               <h3 className="font-bold text-slate-900 text-sm">Jasa Saya</h3>
            </Link>
            <Link href="/mitra/orders" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition text-center group">
               <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📋</div>
               <h3 className="font-bold text-slate-900 text-sm">Riwayat Order</h3>
            </Link>
            <Link href="/mitra/reviews" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition text-center group">
               <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⭐</div>
               <h3 className="font-bold text-slate-900 text-sm">Ulasan Pelanggan</h3>
            </Link>
            <Link href="/mitra/settings" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition text-center group">
               <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚙️</div>
               <h3 className="font-bold text-slate-900 text-sm">Pengaturan Toko</h3>
            </Link>
         </div>
      </section>

    </div>
  );
}