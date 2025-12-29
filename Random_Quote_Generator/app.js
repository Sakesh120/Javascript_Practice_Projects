const quotes = [
  "Honesty is the best policy.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Dream big, start small, but act now.",
  "Discipline is the bridge between goals and accomplishment.",
  "Your time is limited, don’t waste it living someone else’s life.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Consistency turns average into excellence.",
  "Don’t wait for opportunity. Create it.",
  "Believe you can and you’re halfway there.",
  "Focus on progress, not perfection.",
  "Small steps every day lead to big results.",
  "Learning never exhausts the mind.",
  "Failure is simply the opportunity to begin again, this time more intelligently.",
  "The secret of getting ahead is getting started.",
  "If you want different results, you must do things differently.",
  "Patience and perseverance conquer all things.",
  "Great things never come from comfort zones.",
  "You become what you repeatedly do.",
  "Confidence comes from preparation.",
  "Action is the foundational key to all success.",
  "The best way to predict the future is to create it.",
  "Challenges are what make life interesting.",
  "Push yourself, because no one else is going to do it for you.",
  "Work in silence, let success make the noise.",
  "Turn your wounds into wisdom.",
];

const button = document.getElementById("generate");
const h1 = document.getElementById("myQuote");
button.addEventListener("click", () => {
  h1.textContent = quotes[Math.floor(Math.random() * 25)];
});
