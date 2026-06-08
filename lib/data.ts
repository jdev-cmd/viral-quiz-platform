export const GAMES = [
  {
    slug: 'superpower',
    title: "What's Your Hidden Superpower?",
    description: "Answer 4 quick questions to find out what you're secretly capable of.",
    category: "Personality",
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6ce846ce?w=800&q=80",
    colorTheme: "bg-yellow-400",
    accentColor: "bg-yellow-200",
    questions: [
      { q: "What's your reaction to an empty coffee pot?", options: ["Cry softly", "Fight someone", "Brew more", "Switch to Red Bull"] },
      { q: "Your boss asks for a volunteer. You...", options: ["Hide", "Stare blankly", "Say YES!", "Ask for money"] },
      { q: "It's 10 PM on a Friday. Where are you?", options: ["In bed", "Scrolling TikTok", "Out causing chaos", "Working on a side hustle"] },
      { q: "Choose a spirit animal:", options: ["Sloth", "Honey Badger", "Golden Retriever", "Owl"] }
    ],
    results: [
      { title: "Level 99 Couch Potato", desc: "Your stillness is your ultimate strength. You conserve energy like a pro." },
      { title: "Chaos Coordinator", desc: "You thrive in the madness. If there isn't a fire to put out, you start one." },
      { title: "Aggressive Optimist", desc: "You terrify people with your morning energy. Unstoppable." },
      { title: "The Silent Observer", desc: "You know everyone's secrets but say nothing. Powerful." }
    ]
  },
  {
    slug: 'street-food',
    title: "Which Bengali Street Food Are You?",
    description: "A spicy personality test to discover your inner snack.",
    category: "Food & Culture",
    coverImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    colorTheme: "bg-orange-500",
    accentColor: "bg-orange-300",
    questions: [
      { q: "How spicy do you like your life?", options: ["Zero spice", "A little kick", "Make me cry", "Breathe fire"] },
      { q: "Ideal weather?", options: ["Rainy and cozy", "Scorching hot", "Breezy evening", "Crisp winter morning"] },
      { q: "How do you handle stress?", options: ["I fall apart", "I eat", "I complain loudly", "I ignore it completely"] }
    ],
    results: [
      { title: "Phuchka (Pani Puri)", desc: "Spicy, unpredictable, and everyone loves you. You bring joy to the streets." },
      { title: "Jhalmuri", desc: "A chaotic mix of everything, but somehow it just works perfectly." },
      { title: "Kathi Roll", desc: "Reliable, filling, and always there when someone needs a friend." },
      { title: "Momos", desc: "Soft on the outside, full of flavor on the inside. A comforting presence." }
    ]
  },
  {
    slug: 'himalayan-escape',
    title: "Where Should Your Next Himalayan Escape Be?",
    description: "Find the perfect mountain retreat based on your travel vibe.",
    category: "Travel",
    coverImage: "https://images.unsplash.com/photo-1520681280092-e428ff27d236?w=800&q=80",
    colorTheme: "bg-teal-500",
    accentColor: "bg-teal-300",
    questions: [
      { q: "What's your ideal morning view?", options: ["Snow-capped peaks", "A dense pine forest", "A bustling local market", "Complete isolation"] },
      { q: "Pick your travel accommodation:", options: ["Luxury resort", "A cozy wooden homestay", "A tent under the stars", "A lively backpacker hostel"] },
      { q: "What's in your backpack?", options: ["DSLR and lenses", "A good novel", "Trekking poles", "Just the essentials"] },
      { q: "How do you feel about altitude?", options: ["Love the thin air", "A bit dizzy", "Keep me in the valleys", "Take me to the summit"] }
    ],
    results: [
      { title: "The Hidden Homestay", desc: "You crave authenticity. A quiet village homestay with local food is your ultimate peace." },
      { title: "The Basecamp Explorer", desc: "You need adventure. Pack your boots, you belong on a rugged mountain trail." },
      { title: "The Cafe Hopper", desc: "You love the mountain aesthetic but need your espresso. A bustling hill station calls to you." },
      { title: "The Spiritual Seeker", desc: "You're looking for clarity. High-altitude monasteries and silent valleys are your destination." }
    ]
  },
  {
    slug: 'red-flag',
    title: "What's Your Walking Red Flag?",
    description: "We all have one. Let's find out why your friends secretly judge you.",
    category: "Personality",
    coverImage: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=800&q=80",
    colorTheme: "bg-red-500",
    accentColor: "bg-red-300",
    questions: [
      { q: "How quickly do you reply to texts?", options: ["Immediately", "Within an hour", "3 to 5 business days", "I reply in my head and forget"] },
      { q: "Someone cancels plans on you. You...", options: ["Throw a fit", "Feel relieved", "Post a passive-aggressive story", "Show up to their house anyway"] },
      { q: "Your approach to alarms in the morning?", options: ["One alarm, wake up instantly", "5 alarms, 5 minutes apart", "Snooze until noon", "I wake up naturally (I'm a psychopath)"] }
    ],
    results: [
      { title: "The Serial Ghoster", desc: "You disappear for weeks and then reply 'omg same' like nothing happened." },
      { title: "The Over-Sharer", desc: "You tell your entire life trauma to the barista making your coffee." },
      { title: "The Chronic Flake", desc: "You make plans with pure intentions, but when the time comes, your bed is just too warm." },
      { title: "The Delusional Romantic", desc: "You fall in love with people on the train and plan your wedding before your stop." }
    ]
  },
  {
    slug: 'creator-type',
    title: "What Type of Digital Creator Are You?",
    description: "Discover your true content creation style.",
    category: "Career",
    coverImage: "https://images.unsplash.com/photo-1516280440502-861875e53303?w=800&q=80",
    colorTheme: "bg-purple-500",
    accentColor: "bg-purple-300",
    questions: [
      { q: "What's your strongest skill?", options: ["Writing hooks", "Video editing", "Design & Aesthetics", "Talking to camera"] },
      { q: "How do you prefer to work?", options: ["Scripting every word", "Improv and vibes", "Building faceless channels", "Live streaming"] },
      { q: "Pick a niche:", options: ["Tech & SaaS", "Travel & Lifestyle", "Comedy & Skits", "Educational & Tutorials"] }
    ],
    results: [
      { title: "The Faceless Architect", desc: "You prefer to run things behind the scenes. High value, zero screen time." },
      { title: "The Aesthetic Storyteller", desc: "Your color grading is flawless. Every piece of content looks like a movie." },
      { title: "The Viral Analyst", desc: "You don't just make content; you study the algorithm. You know exactly what gets clicks." },
      { title: "The Raw Authenticator", desc: "No scripts, no filters. Your audience loves you because you are 100% real." }
    ]
  }
];