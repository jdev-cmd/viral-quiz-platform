"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { GAMES } from "../../../lib/data"; // Adjust path based on your setup
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Brain, Loader2 } from "lucide-react";

// Note the type change: params is now a Promise
export default function QuizPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  
  // Unwrap the params promise using React's use() hook (Next.js 15 standard)
  const resolvedParams = use(params);
  const game = GAMES.find((g) => g.slug === resolvedParams.slug);

  // State Management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  // Safely handle the redirect inside a useEffect so it doesn't interrupt rendering
  useEffect(() => {
    if (!game) {
      router.push("/");
    }
  }, [game, router]);

  // Return empty while redirecting if game isn't found
  if (!game) return null;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentIndex < game.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsProcessing(true);
      
      const sum = newAnswers.reduce((a, b) => a + b, 0);
      const resultIndex = sum % game.results.length;
      const calculatedResult = game.results[resultIndex].title;

      setTimeout(() => {
        router.push(`/result/${game.slug}?outcome=${encodeURIComponent(calculatedResult)}`);
      }, 3500);
    }
  };

  if (isProcessing) {
    return <ProcessingScreen theme={game.colorTheme} />;
  }

  const currentQuestion = game.questions[currentIndex];
  const progressPercent = (currentIndex / game.questions.length) * 100;

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-black pt-8 px-4 sm:px-0">
      <div className="max-w-md mx-auto">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-black mb-2 uppercase text-gray-600">
            <span>Question {currentIndex + 1} of {game.questions.length}</span>
          </div>
          <div className="h-4 w-full bg-white border-4 border-black rounded-full overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div
              className={`h-full ${game.colorTheme} transition-all duration-500 ease-out`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question & Options with Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-3xl font-black mb-8 leading-tight">
              {currentQuestion.q}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 rounded-xl border-4 border-black font-bold text-lg ${game.accentColor} hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:shadow-none bg-white hover:bg-opacity-80 group flex justify-between items-center`}
                >
                  <span>{option}</span>
                  <ChevronRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Processing Screen Component
// ----------------------------------------------------------------------
function ProcessingScreen({ theme }: { theme: string }) {
  const [loadingText, setLoadingText] = useState("Analyzing brainwaves...");

  useEffect(() => {
    const texts = [
      "Analyzing brainwaves...",
      "Consulting the crystal ball...",
      "Calculating sheer awesomeness...",
      "Generating undeniable facts...",
    ];
    let i = 0;

    const interval = setInterval(() => {
      i++;
      if (i < texts.length) setLoadingText(texts[i]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 text-center">
      <div
        className={`${theme} p-8 rounded-full border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] animate-bounce mb-8`}
      >
        <Brain size={64} className="animate-pulse" />
      </div>
      <h2 className="text-2xl font-black uppercase mb-4 h-8">{loadingText}</h2>
      <div className="flex items-center gap-2">
        <Loader2 size={24} className="animate-spin text-black" />
        <span className="font-bold text-gray-500">Please hold...</span>
      </div>
    </div>
  );
}