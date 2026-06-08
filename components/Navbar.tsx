"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, Flame } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Games", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-2 group z-50">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            VibeQuiz
          </span>
          <Sparkles className="text-pink-500 w-5 h-5 group-hover:rotate-12 transition-transform" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-slate-500 text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="hover:text-pink-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Pill */}
        <div className="hidden md:flex">
          <Link 
            href="/" 
            className="bg-slate-900 hover:bg-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-sm hover:shadow-pink-500/20 active:scale-95"
          >
            <Flame size={16} />
            Play a Quiz
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-slate-600 hover:text-pink-500 transition-colors z-50 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl shadow-slate-200/20 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-600 hover:text-pink-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-100 mt-2">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-pink-500 text-white w-full py-4 rounded-xl text-center font-bold transition-colors flex items-center justify-center gap-2 shadow-sm hover:bg-pink-600 active:scale-[0.98]"
              >
                <Flame size={18} />
                Play Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}