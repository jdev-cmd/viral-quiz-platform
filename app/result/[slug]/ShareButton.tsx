"use client";

import { Share2 } from "lucide-react";

export default function ShareButton() {
  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    
    let shareUrl = window.location.href;
    if (shareUrl.includes("localhost")) {
      shareUrl = "https://vercel.com"; // Keep our localhost bypass
    }

    // 1. Try the Native Mobile Share API first
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'I found my result!',
          text: 'Play this quick game to find out yours.',
          url: shareUrl,
        });
        return; // Exit if successful
      } catch (err) {
        console.log("Native share cancelled or not supported.", err);
        // Fall through to standard Facebook share if they cancel or it fails
      }
    }

    // 2. Fallback for Desktop or unsupported browsers
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(fbShareUrl, '_blank', 'noopener,noreferrer'); 
  };

  return (
    <button 
      onClick={handleShare}
      className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl p-4 text-lg font-semibold transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(24,119,242,0.3)] hover:shadow-[0_0_30px_rgba(24,119,242,0.5)]"
    >
      <Share2 size={20} />
      Share your Result
    </button>
  );
}