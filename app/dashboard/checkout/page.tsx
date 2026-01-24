"use client";

import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("bca");

  return (
    <div className="max-w-5xl mx-auto pb-20">
      
      {/* Header Simple */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/cart" className="text-slate-400 hover:text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </Link>
        <h1 className="text-2xl font-bold text-slate-900">Pengiriman & Pembayaran</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* --- KOLOM KIRI (DETAIL UTAMA) --- */}
        <div className="md:col-span-2 space-y-6">
          
          {/* 1. ALAMAT PENGIRIMAN / LOKASI */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Lokasi Pengerjaan / Pengiriman
              </h2>
              <button className="text-sm font-semibold text-emerald-600 hover:underline">Ubah Alamat</button>
            </div>
            
            <div className="pl-7">
              <p className="font-bold text-slate-900">John Doe <span className="font-normal text-slate-500">(Rumah)</span></p>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                Jl. Mawar Melati Indah No. 12B, RT 05/RW 02, Kec. Kebayoran Baru, 
                Jakarta Selatan, DKI Jakarta 12150
              </p>
              <p className="text-slate-600 text-sm mt-1">0812-3456-7890</p>
            </div>
          </section>

          {/* 2. RINCIAN PESANAN (GROUP PER VENDOR) */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-6">Rincian Pesanan</h2>

            {/* Vendor 1 */}
            <div className="mb-8 last:mb-0">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                 <span className="font-bold text-slate-900 text-sm">Berkah Teknik</span>
                 <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Verified</span>
              </div>

              {/* Item */}
              <div className="flex gap-4 mb-4">
                 <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                   ❄️
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-slate-900 text-sm">Service AC Cuci Besar & Isi Freon R32</h3>
                   <p className="text-xs text-slate-500 mt-1">3 Unit x Rp 75.000</p>
                 </div>
                 <p className="font-bold text-slate-900">Rp 225.000</p>
              </div>

              {/* Opsi Pengiriman / Jadwal */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 block">Pilih Jadwal Kedatangan</label>
                <select className="w-full p-2 text-sm border border-slate-300 rounded outline-none focus:border-emerald-500 bg-white">
                  <option>Besok, 25 Jan (09:00 - 12:00)</option>
                  <option>Besok, 25 Jan (13:00 - 16:00)</option>
                  <option>Lusa, 26 Jan (09:00 - 12:00)</option>
                </select>
                <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Termasuk garansi dingin 30 hari
                </p>
              </div>
            </div>

            <div className="border-b border-slate-100 my-6"></div>

            {/* Vendor 2 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                 <span className="font-bold text-slate-900 text-sm">TaxPro Solution</span>
              </div>

              <div className="flex gap-4 mb-4">
                 <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                   📊
                 </div>
                 <div className="flex-1">
                   <h3 className="font-bold text-slate-900 text-sm">Jasa Laporan SPT Tahunan</h3>
                   <p className="text-xs text-slate-500 mt-1">1 Paket x Rp 500.000</p>
                 </div>
                 <p className="font-bold text-slate-900">Rp 500.000</p>
              </div>
              
              {/* Opsi Pengiriman Digital */}
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                 <div>
                   <p className="text-sm font-bold text-slate-900">Layanan Digital (Via Email/Zoom)</p>
                   <p className="text-xs text-slate-500">Estimasi selesai: 2 Hari Kerja</p>
                 </div>
                 <span className="text-sm font-bold text-emerald-600">Gratis</span>
              </div>
            </div>

          </section>

          {/* 3. METODE PEMBAYARAN */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-slate-900 mb-6">Metode Pembayaran</h2>
            
            <div className="space-y-3">
              {/* Option BCA */}
              <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'bca' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}>
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="bca"
                    checked={paymentMethod === 'bca'}
                    onChange={() => setPaymentMethod('bca')}
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500" 
                  />
                  <div>
                    <p className="font-bold text-slate-900">Transfer Bank BCA</p>
                    <p className="text-xs text-slate-500">Cek otomatis</p>
                  </div>
                </div>
                {/* Logo Bank Dummy */}
                <div className="h-6 w-12 bg-blue-800 rounded"></div>
              </label>

              {/* Option Mandiri */}
              <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'mandiri' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}>
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="mandiri" 
                    checked={paymentMethod === 'mandiri'}
                    onChange={() => setPaymentMethod('mandiri')}
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500" 
                  />
                  <div>
                    <p className="font-bold text-slate-900">Transfer Mandiri</p>
                    <p className="text-xs text-slate-500">Cek otomatis</p>
                  </div>
                </div>
                <div className="h-6 w-12 bg-blue-400 rounded"></div>
              </label>

              {/* Option E-Wallet */}
              <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'gopay' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'}`}>
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="gopay" 
                    checked={paymentMethod === 'gopay'}
                    onChange={() => setPaymentMethod('gopay')}
                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500" 
                  />
                  <div>
                    <p className="font-bold text-slate-900">GoPay / QRIS</p>
                    <p className="text-xs text-slate-500">Scan & Bayar</p>
                  </div>
                </div>
                <div className="h-6 w-12 bg-green-500 rounded"></div>
              </label>
            </div>
          </section>

        </div>

        {/* --- KOLOM KANAN (SUMMARY STICKY) --- */}
        <div className="md:col-span-1">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg sticky top-24">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Ringkasan Belanja</h3>
            
            {/* List Harga */}
            <div className="space-y-3 mb-6 border-b border-slate-100 pb-6">
              <div className="flex justify-between text-sm text-slate-600">
                <span>Total Harga (4 Barang)</span>
                <span>Rp 725.000</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600">
                <span>Total Ongkos Kirim</span>
                <span>Rp 0</span>
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

            {/* Promo Input */}
            <div className="mb-6">
               <div className="flex gap-2">
                 <input type="text" placeholder="Punya kode promo?" className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-emerald-500" />
                 <button className="bg-slate-200 text-slate-600 px-3 py-2 rounded-lg text-sm font-bold hover:bg-slate-300">Gunakan</button>
               </div>
            </div>

            {/* Grand Total */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="block text-sm text-slate-500">Total Tagihan</span>
                <span className="font-bold text-emerald-600 text-xl">Rp 727.000</span>
              </div>
            </div>

            {/* Button Bayar */}
            <Link href="/dashboard/orders" className="block w-full text-center bg-emerald-600 text-white py-3.5 rounded-lg font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-200">
              Bayar Sekarang
            </Link>
            
            <p className="text-[11px] text-center text-slate-400 mt-3">
              Pastikan alamat dan jadwal sudah sesuai sebelum melanjutkan pembayaran.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}