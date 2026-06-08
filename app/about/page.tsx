import { Sparkles, Heart, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 pb-24 px-6 w-full">
      <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-500 text-sm font-bold mb-8 border border-pink-100">
          <Sparkles size={16} />
          Our Story
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight leading-tight">
          Bringing the fun back to the <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            internet.
          </span>
        </h1>

        <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
          <p>
            Remember when the internet was just about having fun? We built VibeQuiz to bring back that era. No endless doomscrolling, no algorithm anxiety—just highly accurate, wildly entertaining personality games you can share with your friends.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg hover:shadow-pink-500/5 transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-pink-500">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Made with Love</h3>
              <p className="text-sm text-slate-500">Every quiz is hand-crafted to be hilarious, insightful, and highly shareable.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg hover:shadow-violet-500/5 transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-violet-500">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
              <p className="text-sm text-slate-500">Built on modern edge technology so you never have to wait for a result.</p>
            </div>
          </div>

          <p>
            Whether you are figuring out your walking red flag or deciding which street food perfectly matches your soul, we are here to help you discover your true vibe.
          </p>
        </div>
      </div>
    </div>
  );
}