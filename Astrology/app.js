const zodiacSigns = [
  "Capricorn",
  "Aquarius",
  "Pisces",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
];

const compliments = [
  "You have a natural charm that attracts people.",
  "Your confidence inspires others around you.",
  "You bring calm even in chaotic situations.",
  "Your creativity makes you stand out.",
  "You have a strong sense of responsibility.",
  "People trust your decisions instinctively.",
  "You are emotionally intelligent and wise.",
  "Your determination is your biggest strength.",
  "You make others feel valued and heard.",
  "Your patience helps you achieve long-term success.",
  "You have leadership qualities within you.",
  "Your honesty earns deep respect.",
  "You adapt quickly to changing situations.",
  "Your positive mindset lifts others up.",
  "You are more talented than you realize.",
  "Your discipline sets you apart.",
  "You have a unique way of solving problems.",
  "Your loyalty is rare and valuable.",
  "You bring balance wherever you go.",
  "Your courage helps you overcome challenges.",
  "You are a natural motivator.",
  "Your intuition guides you well.",
  "You have a magnetic personality.",
  "Your hard work never goes unnoticed.",
  "You inspire trust and reliability.",
  "Your optimism is contagious.",
  "You have strong inner values.",
  "Your empathy makes you special.",
  "You are mentally resilient.",
  "Your ambition will take you far.",
  "You have the ability to influence positively.",
];

const victimCardComplimets = [
  "You often give more than you receive.",
  "People misunderstand your intentions.",
  "You carry emotional weight silently.",
  "You are too kind for a harsh world.",
  "Others rely on you without appreciating you.",
  "You sacrifice your comfort for others.",
  "You feel deeply, even when others don’t notice.",
  "You try to keep peace at your own expense.",
  "Your efforts often go unseen.",
  "You expect loyalty but rarely get it.",
  "You overthink because you care.",
  "You absorb negativity from people around you.",
  "You stay strong even when exhausted.",
  "You forgive even when you shouldn’t.",
  "You put others first too often.",
  "You hide your struggles behind a smile.",
  "You feel responsible for things beyond your control.",
  "You give second chances easily.",
  "You hope people will change.",
  "You deserve more emotional support than you receive.",
];

const recommendations = [
  "Focus on your personal growth this month.",
  "Avoid impulsive decisions today.",
  "Trust your instincts more than opinions.",
  "Take a break and recharge mentally.",
  "Set clear boundaries with people.",
  "Prioritize your health and sleep.",
  "Revisit an old goal you abandoned.",
  "Be patient; good things are forming.",
  "Communicate clearly to avoid misunderstandings.",
  "Don’t rush emotional decisions.",
  "Save money instead of spending impulsively.",
  "Stay consistent with your efforts.",
  "Learn something new this week.",
  "Avoid unnecessary conflicts.",
  "Practice gratitude daily.",
  "Listen more than you speak today.",
  "Stay away from negative influences.",
  "Focus on long-term benefits.",
  "Be honest with yourself.",
  "Take responsibility for your choices.",
  "Give yourself time to heal.",
  "Trust the process.",
  "Reconnect with a close friend.",
  "Avoid overthinking small issues.",
  "Channel energy into productive work.",
  "Balance logic and emotions.",
  "Don’t ignore warning signs.",
  "Follow through on commitments.",
  "Take calculated risks.",
  "Be kind to yourself.",
];

const predictions = [
  "A new opportunity will present itself soon.",
  "An unexpected conversation may change your perspective.",
  "Financial stability will improve gradually.",
  "You may reconnect with someone from the past.",
  "A challenge will help you grow.",
  "Your efforts will soon be recognized.",
  "Emotional clarity is approaching.",
  "A decision you make now will impact your future.",
  "Patience will bring positive results.",
  "You may feel more confident this phase.",
  "A small risk could bring rewards.",
  "Someone may seek your advice.",
  "Your hard work will pay off.",
  "A fresh start is on the horizon.",
  "You will overcome a lingering doubt.",
  "A positive change in routine is coming.",
  "You may receive good news unexpectedly.",
  "An obstacle will turn into a lesson.",
  "Your intuition will guide you correctly.",
  "Personal growth is inevitable.",
];

const Form = document.getElementById("astroForm");
const result = document.getElementById("result");

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  const text = `Hi ${name} ${surname}, Your Zodiac sign is ${
    zodiacSigns[month - 1]
  }.${compliments} ${victimCardComplimets[year % 20]} ${
    recommendations[(day * month) % 30]
  }  ${predictions[(name.length * month.length) % 20]}`;

  result.textContent = text;
});
