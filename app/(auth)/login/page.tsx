"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic
  };

  return (
    <div className="min-h-screen w-full flex bg-white">
      
      {/* LEFT SIDE: Visual & Branding (Hidden on mobile) 
          Ini memberikan kesan "Bespoke/Custom" yang kuat */}
      <div className="hidden lg:flex w-1/2 relative bg-[#0f172a] overflow-hidden flex-col justify-between p-12 text-white">
        
        {/* Background Gradients & Texture */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
          {/* Noise texture overlay (optional css pattern) */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">A</span>
             </div>
             <span className="font-semibold tracking-wide text-lg">Acme Inc.</span>
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Start turning your <span className="text-blue-400">ideas</span> into reality.
          </h2>
          <p className="text-blue-200/80 text-lg leading-relaxed">
            "This platform has completely transformed how we manage our design systems. It's intuitive, fast, and beautiful."
          </p>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
               {[1,2,3].map((i) => (
                 <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#0f172a] bg-blue-${i+3}00 flex items-center justify-center text-xs text-black font-bold bg-gray-200`}>
                    U{i}
                 </div>
               ))}
            </div>
            <span className="text-sm text-blue-200 font-medium">Join 40,000+ users</span>
          </div>
        </div>

        <div className="relative z-10 text-sm text-blue-400/60 font-medium">
          © 2024 Acme Inc. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE: The Form 
          Bersih, tanpa border kartu, fokus pada input */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">
        <div className="w-full max-w-[420px] space-y-10">
          
          {/* Header Mobile Only Logo */}
          <div className="lg:hidden w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-8">
             <span className="font-bold text-white">A</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Login</h1>
            <p className="text-slate-500 text-lg">Welcome back! Please enter your details.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Groups dengan Style Minimalist */}
            <div className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-3 border-b-2 border-slate-200 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all duration-300 text-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-0 py-3 border-b-2 border-slate-200 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-all duration-300 text-lg pr-10"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    ) : (
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                <label htmlFor="remember" className="ml-2 text-sm text-slate-600">Remember me</label>
              </div>
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white h-14 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Sign In 
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </form>

          {/* Social / Divider - Minimalist */}
          <div className="pt-4">
             <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-slate-400 text-sm uppercase tracking-wider">Or</span>
                <div className="h-px bg-slate-200 flex-1"></div>
             </div>
             
             <button className="w-full border border-slate-200 h-12 rounded-full font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
             </button>
          </div>

          <p className="text-center text-slate-500">
            Don't have an account? <a href="/register" className="font-bold text-blue-600 hover:underline">Sign up for free</a>
          </p>

        </div>
      </div>
    </div>
  );
}