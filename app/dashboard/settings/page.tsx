"use client";

import { useState } from "react";

export default function SettingsPage() {
  // State untuk melacak menu yang aktif
  const [activeTab, setActiveTab] = useState("biodata");

  // Daftar Menu Sidebar
  const menus = [
    { id: "biodata", label: "Biodata Diri" },
    { id: "alamat", label: "Daftar Alamat" },
    { id: "rekening", label: "Rekening Bank" },
    { id: "notifikasi", label: "Notifikasi" },
    { id: "keamanan", label: "Keamanan" },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20">
      
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Pengaturan Akun</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* --- 1. SIDEBAR MENU (Sticky & Dynamic) --- */}
        <div className="md:col-span-1">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden sticky top-24">
            <nav className="flex flex-col">
              {menus.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => setActiveTab(menu.id)}
                  className={`text-left px-4 py-3 text-sm font-medium border-l-4 transition-colors ${
                    activeTab === menu.id
                      ? "text-emerald-600 bg-emerald-50 border-emerald-600 font-semibold" // Style Aktif
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent" // Style Tidak Aktif
                  }`}
                >
                  {menu.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* --- 2. MAIN CONTENT (Dynamic Content) --- */}
        <div className="md:col-span-3 space-y-6">
          
          {/* KONTEN: BIODATA DIRI */}
          {activeTab === "biodata" && (
            <>
              {/* CARD: FOTO PROFIL */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Foto Profil</h2>
                <div className="flex items-center gap-6">
                  <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl font-bold border-4 border-slate-100 overflow-hidden">
                      TA
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <span className="text-xs text-white">Ubah</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-3 max-w-xs">
                      Besar file: maksimum 10 MB. Ekstensi: .JPG .JPEG .PNG
                    </p>
                    <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition">
                      Pilih Foto
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD: BIODATA */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-1">Ubah Biodata</h2>
                <p className="text-sm text-slate-500 mb-6">Pastikan data diri sesuai untuk verifikasi.</p>
                
                <div className="space-y-5">
                  <div className="grid md:grid-cols-3 gap-2 items-center">
                    <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                    <div className="md:col-span-2">
                      <input type="text" defaultValue="Tri Jagad Ariyani" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-2 items-center">
                    <label className="text-sm font-semibold text-slate-700">Tanggal Lahir</label>
                    <div className="md:col-span-2">
                        <div className="flex gap-2">
                          <select className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-white flex-1"><option>12</option></select>
                          <select className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-white flex-1"><option>Agustus</option></select>
                          <select className="px-4 py-2 border border-slate-300 rounded-lg text-sm bg-white flex-1"><option>1995</option></select>
                        </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-2 items-center">
                    <label className="text-sm font-semibold text-slate-700">Jenis Kelamin</label>
                    <div className="md:col-span-2 flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" defaultChecked className="text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-slate-700">Laki-laki</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" className="text-emerald-600 focus:ring-emerald-500" />
                        <span className="text-sm text-slate-700">Perempuan</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD: KONTAK */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Kontak Pribadi</h2>
                <div className="space-y-5">
                  <div className="grid md:grid-cols-3 gap-2 items-center">
                    <label className="text-sm font-semibold text-slate-700">Email</label>
                    <div className="md:col-span-2 flex items-center gap-2">
                      <input type="email" defaultValue="johndoe@gmail.com" disabled className="flex-1 px-4 py-2 border border-slate-300 bg-slate-50 rounded-lg text-sm text-slate-500" />
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-bold">Verified</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-2 items-center">
                    <label className="text-sm font-semibold text-slate-700">Nomor HP</label>
                    <div className="md:col-span-2">
                      <input type="tel" defaultValue="081234567890" className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button className="bg-slate-900 text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:bg-emerald-600 transition shadow-lg">
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </>
          )}

          {/* KONTEN: DAFTAR ALAMAT */}
          {activeTab === "alamat" && (
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
               <div className="flex justify-between items-center mb-6">
                 <h2 className="text-lg font-bold text-slate-900">Daftar Alamat</h2>
                 <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-700 transition">
                   + Tambah Alamat
                 </button>
               </div>
               
               {/* List Alamat */}
               <div className="border border-emerald-500 bg-emerald-50/30 rounded-lg p-4 mb-4 relative">
                 <div className="absolute top-4 right-4 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">Utama</div>
                 <h3 className="font-bold text-slate-900">Rumah</h3>
                 <p className="text-slate-900 font-bold text-sm mt-1">John Doe <span className="font-normal text-slate-500">(08123456789)</span></p>
                 <p className="text-sm text-slate-600 mt-1 leading-relaxed max-w-lg">
                   Jl. Mawar Melati Indah No. 12B, RT 05/RW 02, Kec. Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12150
                 </p>
                 <div className="flex gap-4 mt-4 pt-4 border-t border-emerald-100">
                    <button className="text-sm font-bold text-emerald-600">Ubah</button>
                    <button className="text-sm font-bold text-slate-400 hover:text-red-500">Hapus</button>
                 </div>
               </div>
            </div>
          )}

          {/* KONTEN: REKENING BANK */}
          {activeTab === "rekening" && (
             <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 text-center py-20">
               <div className="text-5xl mb-4">💳</div>
               <h3 className="text-lg font-bold text-slate-900">Rekening Bank</h3>
               <p className="text-slate-500 text-sm mt-2">Anda belum menambahkan rekening bank untuk penarikan dana.</p>
               <button className="mt-6 px-6 py-2 border border-slate-300 text-slate-700 font-bold rounded-lg hover:bg-slate-50">
                 Tambah Rekening
               </button>
             </div> 
          )}
          
          {/* KONTEN LAINNYA (Placeholder) */}
          {(activeTab === "notifikasi" || activeTab === "keamanan") && (
             <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 text-center py-20">
               <div className="text-5xl mb-4">🚧</div>
               <h3 className="text-lg font-bold text-slate-900">Segera Hadir</h3>
               <p className="text-slate-500 text-sm mt-2">Fitur {activeTab} sedang dalam pengembangan.</p>
             </div>
          )}

        </div>

      </div>
    </div>
  );
}