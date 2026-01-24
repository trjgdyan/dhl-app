"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MitraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Menu Navigasi Khusus Mitra
  const navItems = [
    { name: "Dashboard", href: "/mitra/dashboard" },
    { name: "Pesanan Masuk", href: "/mitra/orders" },
    { name: "Kelola Jasa", href: "/mitra/services" },
    { name: "Keuangan", href: "/mitra/finance" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* --- MITRA TOP NAVBAR --- */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* KIRI: Logo Brand + Badge Mitra */}
            <div className="flex items-center gap-8">
              <Link href="/mitra/dashboard" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-md font-bold text-sm shadow-md group-hover:bg-emerald-700 transition">
                  M
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">
                    DOIT<span className="text-emerald-600">BRO</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Mitra Area</span>
                </div>
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex space-x-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium px-4 py-5 border-b-2 transition-all ${
                        isActive
                          ? "text-emerald-700 border-emerald-600 bg-emerald-50/50" // Style Aktif
                          : "text-slate-500 border-transparent hover:text-emerald-600 hover:border-emerald-300" // Style Tidak Aktif
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* KANAN: Status, Notif, Profile */}
            <div className="flex items-center gap-4">
              
              {/* Notifikasi Lonceng */}
              <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>

              <div className="h-6 w-px bg-slate-200 hidden md:block"></div>

              {/* Profile Dropdown */}
              <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1.5 pl-2 pr-3 rounded-full border border-slate-100 transition-all">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow-sm">
                  BT
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs font-bold text-slate-900">Berkah Teknik</p>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <p className="text-[10px] text-slate-500 font-medium">Verified Partner</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-slate-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-slate-600">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

    </div>
  );
}