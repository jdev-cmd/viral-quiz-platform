import { GAMES } from "../lib/data";
import { Flame } from "lucide-react";
import GameCard from "@/components/GameCard";

export default function Home() {
  return (
    <div className="bg-white w-full">
      <div className="max-w-6xl mx-auto pt-12 px-6 pb-24">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-6 shadow-sm">
            <Flame size={16} className="animate-pulse" />
            Over 1M+ Quizzes Played!
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-tight">
            Play. Discover. <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Share the Fun.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Take wildly accurate personality quizzes. Find out your true vibe, challenge your friends, and see who you really are.
          </p>
        </div>

        {/* Upgraded Image-Rich Game Grid using the Client Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map((game, index) => (
            <GameCard key={game.slug} game={game} index={index} />
          ))}
        </div>
        
      </div>
    </div>
  );
}