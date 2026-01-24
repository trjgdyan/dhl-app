import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pb-20">
      
      {/* 1. ANIMATED ICON */}
      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-lg shadow-emerald-100">
        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* 2. HEADLINE & SUBTEXT */}
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Pembayaran Berhasil!</h1>
      <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
        Terima kasih, pembayaran Anda telah kami terima. Mitra kami akan segera menghubungi Anda melalui chat untuk konfirmasi kedatangan.
      </p>

      {/* 3. RECEIPT CARD (Ringkasan) */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 w-full max-w-sm mb-8 shadow-sm relative overflow-hidden">
         {/* Hiasan gerigi struk di atas (opsional) */}
         <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>

         <div className="flex justify-between text-sm mb-3">
            <span className="text-slate-500">Nomor Invoice</span>
            <span className="font-mono font-bold text-slate-900 tracking-wide">INV/2026/XXI/001</span>
         </div>
         
         <div className="flex justify-between text-sm mb-3">
            <span className="text-slate-500">Tanggal</span>
            <span className="font-medium text-slate-900">24 Jan 2026, 14:30</span>
         </div>

         <div className="flex justify-between text-sm mb-3">
            <span className="text-slate-500">Metode Bayar</span>
            <span className="font-bold text-slate-900">BCA Virtual Account</span>
         </div>

         <div className="border-t border-dashed border-slate-200 my-4"></div>

         <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm">Total Bayar</span>
            <span className="font-bold text-emerald-600 text-xl">Rp 727.000</span>
         </div>
      </div>

      {/* 4. ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <Link 
          href="/dashboard/orders" 
          className="flex-1 bg-emerald-600 text-white py-3.5 rounded-lg font-bold hover:bg-emerald-700 transition shadow-md shadow-emerald-200"
        >
          Lihat Pesanan Saya
        </Link>
        <Link 
          href="/dashboard" 
          className="flex-1 border border-slate-300 text-slate-600 py-3.5 rounded-lg font-bold hover:bg-slate-50 transition"
        >
          Kembali ke Home
        </Link>
      </div>

      {/* 5. FOOTER TEXT */}
      <p className="mt-8 text-xs text-slate-400">
        Bukti pembayaran juga telah dikirim ke email <strong>johndoe@gmail.com</strong>
      </p>

    </div>
  );
}