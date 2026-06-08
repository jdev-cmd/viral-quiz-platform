export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 pb-24 px-6 w-full">
      <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-slate-500 font-medium mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using VibeQuiz, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Content</h2>
            <p>
              The quizzes, text, images, and logic provided on VibeQuiz are for entertainment purposes only. While we strive to make them engaging, they should not be taken as professional psychological, medical, or life advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including the specific quiz concepts, custom graphics, and platform design, is the property of VibeQuiz and is protected by copyright laws. You may share results via provided social links, but you may not scrape or republish our interactive content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Disclaimer of Warranties</h2>
            <p>
              This site is provided on an "as is" and "as available" basis. VibeQuiz makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, or materials included.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}