"use client"; // Wajib ada karena kita pakai useState untuk ganti Tab

import { useState } from "react";
import Link from "next/link";

export default function OrdersPage() {
  // State untuk melacak Tab mana yang sedang aktif
  const [activeTab, setActiveTab] = useState("Semua");
  
  // State untuk Search
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Data berdasarkan Tab & Search
  const filteredOrders = ORDERS_DATA.filter((order) => {
    // 1. Filter Tab
    const matchTab = activeTab === "Semua" || order.status === activeTab;
    
    // 2. Filter Search (Nama Jasa atau Invoice)
    const matchSearch = 
      order.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      order.invoice.toLowerCase().includes(searchQuery.toLowerCase());

    return matchTab && matchSearch;
  });

  return (
    <div className="max-w-5xl mx-auto pb-20 space-y-6">
      
      {/* --- 1. HEADER & SEARCH --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900">Daftar Transaksi</h1>
        
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Cari invoice atau nama jasa..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
          />
          <svg className="w-5 h-5 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>

      {/* --- 2. TABS NAVIGATION (Sticky & Scrollable) --- */}
      <div className="sticky top-[73px] z-30 bg-gray-50 pt-2">
        <div className="border-b border-slate-200 overflow-x-auto scrollbar-hide">
          <nav className="flex space-x-8 min-w-max">
            {['Semua', 'Menunggu Pembayaran', 'Diproses', 'Selesai', 'Dibatalkan'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-emerald-600 text-emerald-600' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* --- 3. ORDER LIST CONTENT --- */}
      <div className="space-y-4">
        
        {/* Jika Data Kosong */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-lg font-bold text-slate-900">Tidak ada transaksi</h3>
            <p className="text-slate-500">Coba ubah filter atau pencarian Anda.</p>
          </div>
        )}

        {/* Loop Data */}
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
            
            {/* Card Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 pb-4 border-b border-slate-100 gap-2">
               <div className="flex items-center gap-3 text-sm flex-wrap">
                  <span className="font-bold text-slate-900">Jasa</span>
                  <span className="text-slate-400">{order.date}</span>
                  
                  {/* Status Badge Dinamis */}
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                    order.status === 'Menunggu Pembayaran' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    order.status === 'Diproses' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    order.status === 'Selesai' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    'bg-red-50 text-red-700 border-red-200'
                  }`}>
                    {order.status}
                  </span>
                  
                  <span className="text-slate-400 text-xs font-mono hidden md:inline">{order.invoice}</span>
               </div>
               
               {/* Countdown untuk status Menunggu Pembayaran */}
               {order.status === 'Menunggu Pembayaran' && (
                 <p className="text-xs text-slate-500">Bayar sebelum: <span className="text-red-600 font-bold">23:59 WIB</span></p>
               )}
            </div>

            {/* Card Body */}
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center text-3xl flex-shrink-0 border border-slate-100">
                {order.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 line-clamp-1">{order.title}</h3>
                <p className="text-sm text-slate-500">{order.variant}</p>
                <div className="mt-2 flex items-center gap-2">
                   <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                   <span className="text-xs text-slate-600 font-medium">{order.vendor}</span>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-slate-500 text-xs">Total Belanja</p>
                <p className="font-bold text-slate-900 text-lg">{order.price}</p>
              </div>
            </div>

            {/* Card Footer / Actions */}
            <div className="flex justify-end items-center mt-4 pt-4 gap-3">
               <div className="md:hidden mr-auto">
                 <p className="text-slate-500 text-xs">Total Belanja</p>
                 <p className="font-bold text-slate-900">{order.price}</p>
               </div>

               {/* Tombol Dinamis berdasarkan Status */}
               {order.status === 'Menunggu Pembayaran' && (
                 <>
                   <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50">Batalkan</button>
                   <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow-sm">Bayar Sekarang</button>
                 </>
               )}

               {order.status === 'Diproses' && (
                 <>
                   <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50">Chat Mitra</button>
                   <button className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg text-sm font-semibold hover:bg-emerald-50">Lacak Jadwal</button>
                 </>
               )}

               {order.status === 'Selesai' && (
                 <>
                   <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50">Invoice</button>
                   <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 shadow-sm">Beli Lagi</button>
                 </>
               )}

               {order.status === 'Dibatalkan' && (
                 <button className="px-4 py-2 border border-slate-300 text-slate-600 rounded-lg text-sm font-semibold hover:bg-slate-50">Lihat Detail</button>
               )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

// --- DUMMY DATA ---
const ORDERS_DATA = [
  {
    id: 1,
    invoice: "INV/20260124/XXI/001",
    date: "24 Jan 2026",
    status: "Menunggu Pembayaran",
    title: "Konsultasi Hukum Kontrak Bisnis (1 Jam)",
    variant: "1 Sesi x Rp 1.000.000",
    vendor: "Legal Partner Indonesia",
    price: "Rp 1.050.000",
    emoji: "⚖️"
  },
  {
    id: 2,
    invoice: "INV/20260122/XXI/045",
    date: "22 Jan 2026",
    status: "Diproses",
    title: "Service AC Cuci Besar & Isi Freon R32",
    variant: "3 Unit x Rp 75.000",
    vendor: "Berkah Teknik",
    price: "Rp 225.000",
    emoji: "❄️"
  },
  {
    id: 3,
    invoice: "INV/20260115/XXI/889",
    date: "15 Jan 2026",
    status: "Selesai",
    title: "Desain Logo & Branding UMKM Premium",
    variant: "Paket Gold",
    vendor: "Creative Studio",
    price: "Rp 350.000",
    emoji: "🎨"
  },
  {
    id: 4,
    invoice: "INV/20260110/XXI/112",
    date: "10 Jan 2026",
    status: "Selesai",
    title: "Jasa Bersih Rumah Deep Cleaning",
    variant: "Apartemen 2BR",
    vendor: "CleanJoy",
    price: "Rp 200.000",
    emoji: "✨"
  },
  {
    id: 5,
    invoice: "INV/20260105/XXI/009",
    date: "05 Jan 2026",
    status: "Dibatalkan",
    title: "Kursus Privat Bahasa Mandarin",
    variant: "1 Bulan (4 Pertemuan)",
    vendor: "Lingua Fast",
    price: "Rp 600.000",
    emoji: "🎓"
  },
];