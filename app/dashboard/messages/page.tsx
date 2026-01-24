export default function MessagesPage() {
  return (
    // Height dikalkulasi agar pas dilayar (100vh - tinggi header - padding)
    <div className="h-[calc(100vh-8rem)] flex bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      
      {/* --- SIDEBAR CHAT LIST (KIRI) --- */}
      <div className="w-80 border-r border-slate-200 flex flex-col bg-slate-50/50">
        
        {/* Header List */}
        <div className="p-4 border-b border-slate-200 bg-white">
           <h2 className="font-bold text-slate-900 text-lg mb-3">Chat</h2>
           <div className="relative">
             <input type="text" placeholder="Cari kontak..." className="w-full pl-9 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm outline-none focus:ring-1 focus:ring-emerald-500" />
             <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
        </div>

        {/* List Items */}
        <div className="overflow-y-auto flex-1">
          {/* Chat 1 (Active) */}
          <div className="flex items-center gap-3 p-4 bg-emerald-50 border-l-4 border-emerald-600 cursor-pointer transition">
             <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 relative">
               <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
             </div>
             <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline">
                 <h4 className="font-bold text-slate-900 text-sm truncate">Teknisi AC (Budi)</h4>
                 <span className="text-[10px] text-emerald-600 font-bold">14:20</span>
               </div>
               <p className="text-xs text-slate-600 truncate mt-0.5 font-medium">Baik pak, saya meluncur sekarang.</p>
             </div>
          </div>

          {/* Chat 2 */}
          <div className="flex items-center gap-3 p-4 hover:bg-slate-100 border-l-4 border-transparent border-b border-slate-100 cursor-pointer transition">
             <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
             <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline">
                 <h4 className="font-bold text-slate-900 text-sm truncate">Admin TaxPro</h4>
                 <span className="text-[10px] text-slate-400">Kemarin</span>
               </div>
               <p className="text-xs text-slate-500 truncate mt-0.5">Dokumen sudah kami terima ya kak.</p>
             </div>
          </div>
        </div>

      </div>

      {/* --- MAIN CHAT AREA (KANAN) --- */}
      <div className="flex-1 flex flex-col bg-slate-50 relative">
        
        {/* Chat Header */}
        <div className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-slate-200"></div>
             <div>
               <h3 className="font-bold text-slate-900 text-sm">Teknisi AC (Budi)</h3>
               <p className="text-xs text-emerald-600 font-medium">Online</p>
             </div>
           </div>
           <button className="text-slate-400 hover:text-slate-600">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
           </button>
        </div>

        {/* Chat Bubbles */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
           
           {/* Date Separator */}
           <div className="flex justify-center">
             <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-1 rounded-full">Hari Ini</span>
           </div>

           {/* Bubble Mitra */}
           <div className="flex justify-start">
             <div className="max-w-md">
               <div className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-r-xl rounded-tl-xl text-sm shadow-sm">
                 Halo selamat siang, untuk service AC nya jadi jam 2 siang pak?
               </div>
               <span className="text-[10px] text-slate-400 ml-1 mt-1 block">14:00</span>
             </div>
           </div>

           {/* Bubble User (Me) */}
           <div className="flex justify-end">
             <div className="max-w-md text-right">
               <div className="bg-emerald-600 text-white px-4 py-2 rounded-l-xl rounded-tr-xl text-sm shadow-md">
                 Iya jadi mas, ditunggu ya.
               </div>
               <div className="flex items-center justify-end gap-1 mt-1">
                 <span className="text-[10px] text-slate-400">14:05</span>
                 <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
               </div>
             </div>
           </div>

           {/* Bubble Mitra */}
           <div className="flex justify-start">
             <div className="max-w-md">
               <div className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-r-xl rounded-tl-xl text-sm shadow-sm">
                 Baik pak, saya meluncur sekarang.
               </div>
               <span className="text-[10px] text-slate-400 ml-1 mt-1 block">14:20</span>
             </div>
           </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-200">
           <div className="flex items-end gap-2 bg-slate-100 p-2 rounded-xl">
              <button className="p-2 text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
              </button>
              <textarea 
                placeholder="Tulis pesan..." 
                rows={1}
                className="flex-1 bg-transparent outline-none text-sm text-slate-900 py-2 resize-none"
              ></textarea>
              <button className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
           </div>
        </div>

      </div>
    </div>
  );
}