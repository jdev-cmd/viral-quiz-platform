import { Metadata } from "next";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";
import { GAMES } from "../../../lib/data";
import ShareButton from "./ShareButton"; // <-- Importing the Client Component

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ outcome?: string }>;
};

// 1. DYNAMIC METADATA (Runs purely on the server)
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
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `My result is ${outcome}`,
        },
      ],
    },
  };
}

// 2. SERVER UI COMPONENT
export default async function ResultPage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  
  const outcome = searchParams.outcome || "Mystery";
  const game = GAMES.find((g) => g.slug === params.slug) || GAMES[0];

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-black pt-12 px-4 sm:px-0 flex flex-col items-center">
      <div className="max-w-md w-full animate-in zoom-in-95 fade-in duration-500 text-center">
        
        <div className="text-sm font-black uppercase mb-4 tracking-widest text-gray-500">
          Your Result Is In
        </div>
        
        {/* Result Card */}
        <div className={`${game.colorTheme} border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] rounded-3xl p-8 mb-8 relative overflow-hidden`}>
          <h1 className="text-5xl font-black mb-6 uppercase leading-none break-words">
            {outcome}
          </h1>
          <p className="text-xl font-bold border-t-4 border-black pt-6 bg-white/20 p-4 rounded-xl">
            {game.results.find(r => r.title === outcome)?.desc || "You broke the matrix."}
          </p>
        </div>

        {/* Render the imported Client Component here */}
        <ShareButton />

        <Link 
          href="/"
          className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-black underline decoration-2 underline-offset-4 mt-6"
        >
          <RefreshCcw size={18} />
          Play Another Game
        </Link>
      </div>
    </div>
  );
}