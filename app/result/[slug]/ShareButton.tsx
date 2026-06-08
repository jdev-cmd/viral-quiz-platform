"use client";

import { Share2 } from "lucide-react";

export default function ShareButton() {
  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    
    // Grab the current URL and append our secret tracking parameter
    let baseShareUrl = window.location.href;
    if (!baseShareUrl.includes('shared=true')) {
      const separator = baseShareUrl.includes('?') ? '&' : '?';
      baseShareUrl = `${baseShareUrl}${separator}shared=true`;
    }

    // Localhost bypass for testing
    let finalShareUrl = baseShareUrl;
    if (finalShareUrl.includes("localhost")) {
      finalShareUrl = "https://vercel.com"; 
    }

    // 1. Try the Native Mobile Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'I found my result!',
          text: 'Play this quick game to find out yours.',
          url: finalShareUrl, // Use the new URL
        });
        return; 
      } catch (err) {
        console.log("Native share cancelled or not supported.", err);
      }
    }

    // 2. Fallback for Desktop
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalShareUrl)}`;
    window.open(fbShareUrl, '_blank', 'noopener,noreferrer'); 
  };

  return (
    <button 
      onClick={handleShare}
      className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl p-4 text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(24,119,242,0.3)] hover:shadow-[0_0_30px_rgba(24,119,242,0.5)] active:scale-[0.98]"
    >
      <Share2 size={20} />
      Share your Result
    </button>
  );
}