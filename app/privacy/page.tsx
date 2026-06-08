export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-16 pb-24 px-6 w-full">
      <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-500 font-medium mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p>
              At VibeQuiz, your privacy is a top priority. When you play our games, we do not require you to create an account or provide personally identifiable information unless you choose to contact us or subscribe to a newsletter. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Social Media Sharing</h2>
            <p>
              Our platform allows you to share your quiz results to platforms like Facebook. We use the standard Facebook Open Graph API to generate shareable images. We do not pull, store, or analyze your personal Facebook data, friends lists, or private information during this process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies and Analytics</h2>
            <p>
              We may use basic analytics tools to understand aggregate traffic (e.g., which quizzes are the most popular) to improve the platform. These tools may use cookies to operate, but they do not track individual identities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Deletion Instructions</h2>
            <p>
              Because VibeQuiz does not require user accounts, we do not store personal profiles. If you have contacted us via email and wish for your correspondence to be deleted, please email us at <strong>hello@vibequiz.io</strong> with the subject "Data Deletion Request."
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}