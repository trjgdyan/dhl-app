"use client";

import Link from "next/link";
import { useState } from "react";

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <div className="max-w-5xl mx-auto pb-24">
      
      {/* Breadcrumb Simple */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <Link href="/dashboard" className="hover:text-emerald-600">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Detail Jasa</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- KOLOM KIRI: KONTEN UTAMA --- */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* 1. GALERI FOTO */}
          <div className="space-y-4">
             {/* Main Image */}
             <div className="h-[400px] w-full bg-slate-200 rounded-2xl flex items-center justify-center text-6xl overflow-hidden relative group">
                ❄️
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
             </div>
             {/* Thumbnails */}
             <div className="flex gap-4 overflow-x-auto pb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 cursor-pointer hover:ring-2 ring-emerald-500"></div>
                ))}
             </div>
          </div>

          {/* 2. INFO HEADER */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Service AC Cuci Besar & Isi Freon R32 (Garansi Dingin)
            </h1>
            <div className="flex items-center gap-4 text-sm">
               <span className="flex items-center gap-1 text-slate-900 font-bold">
                 ⭐ 4.9 <span className="text-slate-500 font-normal">(500+ Ulasan)</span>
               </span>
               <span className="text-slate-300">|</span>
               <span className="text-slate-600">Terjual 1.2rb</span>
            </div>
          </div>

          {/* 3. PROFIL MITRA */}
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                  BT
                </div>
                <div>
                   <h3 className="font-bold text-slate-900">Berkah Teknik</h3>
                   <p className="text-xs text-emerald-600 font-bold">● Online 5 menit lalu</p>
                </div>
             </div>
             <button className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg text-sm font-bold hover:bg-emerald-50 transition">
               Chat Mitra
             </button>
          </div>

          {/* 4. TABS (Deskripsi / Ulasan) */}
          <div>
             <div className="flex border-b border-slate-200 mb-6">
                <button 
                  onClick={() => setActiveTab("deskripsi")}
                  className={`px-6 py-3 text-sm font-bold border-b-2 transition ${activeTab === 'deskripsi' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}`}
                >
                  Deskripsi Jasa
                </button>
                <button 
                  onClick={() => setActiveTab("ulasan")}
                  className={`px-6 py-3 text-sm font-bold border-b-2 transition ${activeTab === 'ulasan' ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500'}`}
                >
                  Ulasan (500)
                </button>
             </div>

             {activeTab === "deskripsi" ? (
               <div className="text-slate-600 leading-relaxed space-y-4">
                 <p>
                   Layanan service AC profesional untuk rumah dan kantor. Pengerjaan dilakukan oleh teknisi bersertifikat BNSP.
                 </p>
                 <ul className="list-disc pl-5 space-y-1">
                   <li>Cuci indoor & outdoor unit</li>
                   <li>Pengecekan tekanan freon</li>
                   <li>Isi ulang Freon R32 (maksimal 30 psi)</li>
                   <li>Pengecekan kelistrikan & amperemeter</li>
                   <li>Garansi pengerjaan 30 hari (bocor/tidak dingin)</li>
                 </ul>
                 <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-yellow-800">
                   ⚠️ <strong>Catatan:</strong> Harga belum termasuk penggantian sparepart berat (kompresor, kapasitor, dll) jika ditemukan kerusakan.
                 </div>
               </div>
             ) : (
               <div className="space-y-6">
                 {/* Review Item */}
                 {[1, 2].map((i) => (
                   <div key={i} className="border-b border-slate-100 pb-6 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
                        <span className="text-xs text-slate-400">Hari ini</span>
                      </div>
                      <p className="text-slate-700 text-sm">
                        Teknisi datang tepat waktu, pengerjaan rapi dan bersih. AC jadi dingin lagi seperti baru. Recommended!
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                         <span className="text-xs text-slate-500 font-bold">Budi Sudarsono</span>
                      </div>
                   </div>
                 ))}
               </div>
             )}
          </div>

        </div>

        {/* --- KOLOM KANAN: STICKY BOOKING CARD --- */}
        <div className="lg:col-span-1">
           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4">Atur Pesanan</h3>
              
              {/* Varian Pilihan */}
              <div className="space-y-3 mb-6">
                 <label className="text-sm font-semibold text-slate-700">Pilih Paket</label>
                 <select className="w-full p-2.5 border border-slate-300 rounded-lg text-sm outline-none focus:border-emerald-500 bg-white">
                    <option>Cuci Besar + Freon (Rp 75.000)</option>
                    <option>Cuci Saja (Rp 50.000)</option>
                    <option>Tambah Freon Saja (Rp 150.000)</option>
                 </select>
              </div>

              {/* Jumlah Order */}
              <div className="flex justify-between items-center mb-6">
                 <span className="text-sm font-semibold text-slate-700">Jumlah Unit</span>
                 <div className="flex items-center border border-slate-300 rounded-lg">
                    <button className="px-3 py-1 hover:bg-slate-100 text-slate-600">-</button>
                    <span className="px-2 text-sm font-bold text-slate-900">1</span>
                    <button className="px-3 py-1 hover:bg-slate-100 text-emerald-600">+</button>
                 </div>
              </div>

              {/* Total Price */}
              <div className="flex justify-between items-end mb-6">
                 <span className="text-sm text-slate-500">Subtotal</span>
                 <span className="text-2xl font-bold text-slate-900">Rp 75.000</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                 <Link 
                   href="/dashboard/cart" 
                   className="block w-full text-center bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700 transition shadow-md"
                 >
                   + Keranjang
                 </Link>
                 <button className="block w-full text-center border border-emerald-600 text-emerald-600 py-3 rounded-lg font-bold hover:bg-emerald-50 transition">
                   Beli Langsung
                 </button>
              </div>
              
              <div className="mt-4 flex justify-center gap-4 text-xs text-slate-400">
                 <span className="flex items-center gap-1">🛡️ Garansi 30 Hari</span>
                 <span className="flex items-center gap-1">🔒 Transaksi Aman</span>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
}