import Link from "next/link";

export default function Navbar() {
  return (
    // Menggunakan border-slate-200 agar garisnya lebih tegas tapi tetap tipis
    <nav className="w-full bg-white text-slate-900 shadow-sm border-b border-slate-200 sticky top-0 z-50">
      
      <div className="w-full px-6 md:px-10 py-4 flex justify-between items-center">
        
        {/* LOGO: Tegak, Bold, Professional (Ganti nama 'DOITBro' atau Brand Anda) */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-bold text-lg rounded-md group-hover:bg-emerald-600 transition-colors">
            D
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
            DOIT<span className="text-emerald-600">BRO</span>
          </span>
        </Link>

        {/* MENU LINKS */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-sm tracking-wide text-slate-600">
          <li>
            <Link href="/" className="group relative py-2 hover:text-slate-900 transition-colors">
              Home
              {/* Garis bawah emerald saat hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          
          <li>
            <Link href="/about" className="group relative py-2 hover:text-slate-900 transition-colors">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          
          <li>
            <Link href="/services" className="group relative py-2 hover:text-slate-900 transition-colors">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Separator Garis Vertikal Kecil */}
          <li className="h-5 w-px bg-slate-200"></li>
          
          {/* Tombol Login & Register */}
          <li>
             <Link href="/login" className="text-slate-900 hover:text-emerald-600 font-semibold transition-colors">
               Log In
             </Link>
          </li>
          <li>
             <Link 
               href="/register" 
               className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-emerald-600 transition-all shadow-md"
             >
               Get Started
             </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-900 focus:outline-none hover:text-emerald-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

      </div>
    </nav>
  );
}