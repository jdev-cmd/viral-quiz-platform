import { Metadata } from "next";
import Link from "next/link";
import { RefreshCcw, Sparkles, Trophy, Flame } from "lucide-react";
import { GAMES } from "../../../lib/data";
import ShareButton from "./ShareButton"; 
import GameCard from "@/components/GameCard";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ outcome?: string; shared?: string }>;
};

// DYNAMIC METADATA
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const searchParams = await props.searchParams;
  
  const outcome = searchParams.outcome || "Unknown";
  const game = GAMES.find((g) => g.slug === params.slug) || GAMES[0];

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const ogImageUrl = `${appUrl}/api/og?slug=${params.slug}&result=${encodeURIComponent(outcome)}`;

  return {
    title: `I got: ${outcome}!`,
    description: `Play ${game.title} to find out yours.`,
    openGraph: {
      title: `I got: ${outcome}!`,
      description: `Play ${game.title} to find out yours.`,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
  };
}

// SERVER UI COMPONENT
export default async function ResultPage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  
  const outcome = searchParams.outcome || "Mystery";
  const isShared = searchParams.shared === "true"; // DETECT IF THIS IS A FRIEND CLICKING
  
  const game = GAMES.find((g) => g.slug === params.slug) || GAMES[0];
  const relatedGames = GAMES.filter((g) => g.slug !== game.slug).slice(0, 3);

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center">
        
        <div className="max-w-lg w-full animate-in slide-in-from-bottom-8 fade-in duration-700 text-center mb-24">
          
          {/* Dynamic Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-500 text-xs font-black uppercase tracking-widest mb-6 border border-slate-100 shadow-sm">
            <Trophy size={14} className="text-yellow-500" />
            {isShared ? "A Friend's Result" : "Your Official Result"}
          </div>
          
          {/* Vibrant Result Card */}
          <div className={`${game.colorTheme || 'bg-pink-500'} shadow-xl shadow-${game.colorTheme}/20 rounded-[3rem] p-8 md:p-10 mb-8 relative overflow-hidden text-white border border-white/20`}>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-32 h-32 bg-white/20 blur-2xl rounded-full" />
            <Sparkles className="absolute top-8 right-8 text-white/40 w-12 h-12 animate-pulse" />

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-tight tracking-tight drop-shadow-md">
                {outcome}
              </h1>
              
              <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-[2rem] shadow-sm">
                <p className="text-lg md:text-xl font-bold leading-relaxed text-white">
                  {game.results.find(r => r.title === outcome)?.desc || "You broke the matrix. We have no words."}
                </p>
              </div>
            </div>
          </div>

          {/* DYNAMIC ACTION BUTTONS */}
          <div className="space-y-4">
            {isShared ? (
              // If a friend is viewing the page, give them a massive Play button
              <Link 
                href={`/quiz/${game.slug}`}
                className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-xl p-5 text-xl font-black uppercase transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/25 active:scale-[0.98] animate-bounce-subtle"
              >
                <Flame size={24} />
                Play to Find Out Yours!
              </Link>
            ) : (
              // If the user just took the quiz, show Share and Retake buttons
              <>
                <ShareButton />
                <Link 
                  href={`/quiz/${game.slug}`}
                  className="w-full bg-white text-slate-600 border border-slate-200 shadow-sm rounded-xl p-4 text-lg font-bold transition-all flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 active:scale-[0.98]"
                >
                  <RefreshCcw size={20} />
                  Retake this Quiz
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="w-full border-t border-slate-100 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight">
              Keep Playing <span className="text-pink-500">🔥</span>
            </h3>
            <Link href="/" className="hidden sm:flex text-sm font-bold text-slate-500 hover:text-pink-500 transition-colors items-center gap-1">
              View all games &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedGames.map((relatedGame, index) => (
               <GameCard key={relatedGame.slug} game={relatedGame} index={index} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}