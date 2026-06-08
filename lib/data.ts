export const GAMES = [
  {
    slug: 'superpower',
    title: "What's Your Hidden Superpower?",
    description: "Answer quick questions to find out what you're secretly capable of.",
    colorTheme: 'bg-yellow-400',
    accentColor: 'bg-yellow-200',
    questions: [
      { q: "What's your reaction to an empty coffee pot?", options: ["Cry softly", "Fight someone", "Brew more", "Switch to Red Bull"] },
      { q: "Your boss asks for a volunteer. You...", options: ["Hide", "Stare blankly", "Say YES!", "Ask for money"] }
    ],
    results: [
      { title: "Level 99 Couch Potato", desc: "Your stillness is your ultimate strength." },
      { title: "Chaos Coordinator", desc: "You thrive in the madness. Unstoppable." }
    ]
  },
  {
    slug: 'street-food',
    title: "Which Bengali Street Food Are You?",
    description: "A spicy personality test to discover your inner snack.",
    colorTheme: 'bg-orange-500',
    accentColor: 'bg-orange-300',
    questions: [
      { q: "How spicy do you like your life?", options: ["Zero spice", "A little kick", "Make me cry", "Breathe fire"] },
      { q: "Ideal weather?", options: ["Rainy", "Scorching", "Breezy", "Winter morning"] }
    ],
    results: [
      { title: "Phuchka", desc: "Spicy, unpredictable, and everyone loves you." },
      { title: "Jhalmuri", desc: "A chaotic mix, but somehow it just works perfectly." }
    ]
  }
];