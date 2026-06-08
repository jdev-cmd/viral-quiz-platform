"use client";

import { Share2 } from "lucide-react";

export default function ShareButton() {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      let shareUrl = window.location.href;

      // --- LOCALHOST OVERRIDE ---
      // Facebook rejects 'localhost'. If we detect it, swap it for a public dummy URL just to test the UI.
      if (shareUrl.includes("localhost")) {
        console.warn("Localhost detected: Using a dummy public URL for Facebook sharing.");
        // We use a safe, public URL just so the Facebook popup doesn't crash
        shareUrl = "https://vercel.com"; 
      }

      // Construct the official Facebook Share URL
      const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
      
      // Open the popup window
      window.open(fbShareUrl, 'facebook-share-dialog', 'width=800,height=600');
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="w-full bg-[#1877F2] text-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-2xl p-5 text-xl font-black uppercase hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-3"
    >
      <Share2 size={24} />
      Share to Facebook
    </button>
  );
}