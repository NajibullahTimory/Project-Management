import React from 'react'

function Buttons_Style () {
  return (
    <div className='h-8/10 w-9/10 bg-gray-300 flex justify-center items-center gap-4'>
      <button className="px-6 py-3 rounded-[20px_6px_20px_6px] bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#38BDF8] text-white font-bold border border-cyan-300/50 ring-1 ring-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(34,211,238,0.9)] active:scale-95">Edit</button>
      <button className=" cursor-pointer  relative overflow-hidden rounded-[60px_12px_60px_12px/20px_60px_20px_60px] border border-cyan-400/30 ring-1 ring-violet-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:rotate-[1deg] hover:border-cyan-300/70 hover:ring-2 hover:ring-violet-400/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.45),0_0_80px_rgba(168,85,247,0.35)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-1/2 before:skew-x-[-25deg] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:left-[150%] before:transition-all before:duration-700">Cilck</button>
      <button className="px-6 py-3 rounded-[25px] bg-gradient-to-r from-[#450A0A] via-[#B91C1C] to-[#7F1D1D] text-white font-semibold border-2 border-red-500/50 ring-1 ring-red-300/30 shadow-[0_0_25px_rgba(220,38,38,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_50px_rgba(220,38,38,0.85)] active:scale-95">Delete</button>
      <button className="px-6 py-3 rounded-[18px_6px_18px_6px] bg-gradient-to-r from-[#7F1D1D] via-[#DC2626] to-[#991B1B] text-white font-bold border border-red-400/50 shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.9)] active:scale-95 cursor-pointer">Delete</button>
      <button className="px-6 py-3 rounded-[30px_8px_30px_8px] bg-gradient-to-r from-[#2E1065] via-[#7C3AED] to-[#C084FC] text-white font-semibold border border-violet-400/50 ring-1 ring-fuchsia-300/30 shadow-[0_0_25px_rgba(168,85,247,0.45)] transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-[0_0_55px_rgba(168,85,247,0.9)] active:scale-95">Next</button>
    </div>
  )
}

export default Buttons_Style