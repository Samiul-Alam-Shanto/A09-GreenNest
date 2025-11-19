import React from "react";

const GlobalLoading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-linear-to-br from-[#f0f9f4] to-[#c6e9d3] font-black text-7xl z-50">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-[6px] border-transparent border-t-[#4caf50] border-r-[#81c784] rounded-full animate-spin drop-shadow-lg"></div>

        <div className="absolute w-8 h-8 bg-[#81c784] rounded-full animate-ping opacity-50"></div>

        <p className="mt-8 text-[#2e7d32] text-lg font-semibold tracking-wide animate-pulse">
          Growing your garden...
        </p>
      </div>
    </div>
  );
};

export default GlobalLoading;
