"use client"; // 1. Wajib tambahkan ini agar bisa mendeteksi URL

import Link from "next/link";
import { usePathname } from "next/navigation"; // 2. Import hook ini

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // 3. Ambil URL saat ini

  // Daftar Menu Navigasi
  const navItems = [
    { name: "Overview", href: "/dashboard" },
    { name: "Pesanan", href: "/dashboard/orders" },
    { name: "Pengaturan", href: "/dashboard/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* KIRI: Logo & Menu */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-md font-bold text-sm">
                  D
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">
                  DOIT<span className="text-emerald-600">BRO</span>
                </span>
              </Link>

              {/* LOGIKA MENU DINAMIS DISINI */}
              <nav className="hidden md:flex space-x-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium py-5 border-b-2 transition-colors ${
                        isActive
                          ? "text-slate-900 border-emerald-600" // Style jika Aktif
                          : "text-slate-500 border-transparent hover:text-emerald-600 hover:border-emerald-600" // Style jika Tidak Aktif
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* KANAN: Icons & Profile */}
            <div className="flex items-center gap-1 md:gap-3">
              <Link
                href="/dashboard/cart"
                className="p-2 text-slate-400 hover:text-emerald-600 transition-colors relative group"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute top-1 right-0 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full border-2 border-white">
                  2
                </span>
              </Link>

              <Link
                href="/dashboard/messages"
                className="p-2 text-slate-400 hover:text-emerald-600 transition-colors relative"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border border-white"></span>
              </Link>

              <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors relative">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="h-6 w-px bg-slate-200 hidden md:block mx-2"></div>

              <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-1 pr-2 rounded-full border border-transparent hover:border-slate-200 transition-all">
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
                  TA
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-xs font-bold text-slate-900">Tri Jagad</p>
                  <p className="text-[10px] text-slate-500">Premium Member</p>
                </div>
                <svg
                  className="w-4 h-4 text-slate-400 hidden md:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-slate-600 ml-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}