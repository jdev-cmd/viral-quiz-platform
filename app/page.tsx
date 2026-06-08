import Link from "next/link";
import { GAMES } from "../lib/data"; // Adjust path if you used the `src/` directory (e.g., "@/lib/data")
import { Sparkles, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 font-sans text-black selection:bg-black selection:text-white pb-20">
      
      {/* Header */}
      <header className="p-6 border-b-4 border-black bg-white flex justify-between items-center sticky top-0 z-10">
        <div className="text-2xl font-black tracking-tighter uppercase hover:rotate-2 transition-transform">
          🔥 VibeQuiz
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-md mx-auto mt-12 px-4 sm:px-0">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black mb-4 leading-tight uppercase">
            Bored?<br />Play a game.
          </h1>
          <p className="text-xl font-bold text-gray-600">
            Find out who you really are (probably).
          </p>
        </div>

        {/* Dynamic Game Grid */}
        <div className="space-y-6">
          {GAMES.map((game, index) => (
            <Link href={`/quiz/${game.slug}`} key={game.slug} className="block group">
              <div 
                className={`${game.colorTheme} border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all active:translate-y-2 active:shadow-[0px_0px_0px_rgba(0,0,0,1)]`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white p-3 rounded-xl border-2 border-black group-hover:scale-110 transition-transform">
                    {/* Alternate icons just for visual variety */}
                    {index % 2 === 0 ? <Sparkles size={24} className="text-black" /> : <Play size={24} className="text-black" />}
                  </div>
                  <div className="bg-white border-2 border-black rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    Viral
                  </div>
                </div>
                <h2 className="text-3xl font-black mb-2 uppercase leading-none">{game.title}</h2>
                <p className="font-bold opacity-90 text-lg">{game.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}