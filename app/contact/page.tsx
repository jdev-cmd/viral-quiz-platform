import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 pb-24 px-6 w-full">
      <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Let's talk <br/>
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            vibes.
          </span>
        </h1>
        
        <p className="text-lg text-slate-600 font-medium mb-12">
          Have a quiz idea? Found a bug? Just want to say hi? We would love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-50 border border-pink-100 text-pink-500 rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-500 text-sm mb-2">Our friendly team is here to help.</p>
                <a href="mailto:hello@vibequiz.io" className="text-pink-600 font-semibold hover:underline">hello@vibequiz.io</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-50 border border-violet-100 text-violet-500 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
                <p className="text-slate-500 text-sm">North Dumdum<br/>West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Clean Placeholder Form */}
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none" placeholder="What's on your mind?"></textarea>
              </div>
              <button type="button" className="w-full bg-slate-900 hover:bg-pink-500 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}