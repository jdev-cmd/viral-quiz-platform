import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Info */}
          <div>
            <Link href="/" className="text-xl font-black tracking-tighter flex items-center gap-2 mb-4">
              <span className="text-slate-900">VibeQuiz</span>
              <Sparkles className="text-pink-500 w-4 h-4" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Discover your true vibe through highly accurate, wildly entertaining personality games. Play, share, and connect.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-pink-600 transition-colors">All Games</Link></li>
              <li><Link href="/about" className="hover:text-pink-600 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-pink-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/privacy" className="hover:text-pink-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-pink-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} VibeQuiz. All rights reserved.</p>
          <p>Built for the culture.</p>
        </div>
      </div>
    </footer>
  );
}