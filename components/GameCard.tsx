"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Brain, 
  Map, 
  UtensilsCrossed, 
  Rocket, 
  Gamepad2,
  Sparkles
} from "lucide-react";

// 1. Dynamic Icon Mapper
const getCategoryIcon = (category: string) => {
  switch (category?.toLowerCase()) {
    case "personality": return Brain;
    case "travel": return Map;
    case "food & culture": return UtensilsCrossed;
    case "career": return Rocket;
    default: return Sparkles;
  }
};

export default function GameCard({ game, index = 0 }: { game: any; index?: number }) {
  const [imgError, setImgError] = useState(false);
  const CategoryIcon = getCategoryIcon(game.category);

  return (
    <Link 
      href={`/quiz/${game.slug}`} 
      className="group relative bg-white rounded-[2rem] p-2 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 hover:border-slate-200 transition-all duration-300 flex flex-col"
    >
      {/* Framer Motion wrapper for a staggered entrance animation 
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
        className="flex flex-col h-full"
      >
        {/* Banner Container */}
        <div className={`h-56 rounded-[1.5rem] w-full relative overflow-hidden flex items-center justify-center ${game.colorTheme || 'bg-slate-800'}`}>
          
          {/* 2. THE ANIMATED FALLBACK STATE */}
          {imgError ? (
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              {/* Animated CSS Background elements */}
              <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]" />
              <div className="absolute w-40 h-40 bg-white/20 blur-3xl rounded-full animate-pulse" />
              
              {/* Floating Fallback Icon */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              >
                <Gamepad2 size={64} className="text-white/80 drop-shadow-lg" />
              </motion.div>
            </div>
          ) : (
            /* 3. THE STANDARD IMAGE WITH ERROR HANDLING */
            <Image 
              src={game.coverImage} 
              alt={game.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3} 
              onError={() => setImgError(true)} 
            />
          )}

          {/* Dark gradient overlay so the badge pops */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
          
          {/* 4. THE UPGRADED GLASSMORPHISM CATEGORY BADGE */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-lg"
          >
            <CategoryIcon size={14} className="text-white drop-shadow-sm" />
            <span className="drop-shadow-sm">{game.category}</span>
          </motion.div>
        </div>

        {/* Card Text Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-pink-600 transition-colors leading-tight">
            {game.title}
          </h2>
          <p className="text-slate-500 font-medium text-sm mb-6 flex-grow leading-relaxed">
            {game.description}
          </p>
          
          {/* Play Action Button */}
          <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-slate-100">
            <span className="font-bold text-slate-900 flex items-center gap-2 group-hover:text-pink-600 transition-colors">
              Play Now
            </span>
            <motion.div 
              whileHover={{ x: 5 }}
              className="bg-slate-50 text-slate-400 group-hover:bg-pink-500 group-hover:text-white p-3 rounded-full transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-pink-500/30"
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}