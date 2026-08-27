const quotes=["Believe in yourself.", "Stay positive.", "Dream big.", 
    "Never give up.", "Keep moving forward.", "Success takes patience.", 
    "Make today count.", "Be your own inspiration.", "Focus on progress.",
    "Choose happiness.", "Work hard, stay humble.", "Turn challenges into opportunities.",
    "Your future starts today.", "Small steps create big results.", "Be fearless.",
    "Learn from every mistake.", "Trust the journey.", "Create your own sunshine.",
    "Stay strong and keep going.", "You are capable of amazing things."];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[index];
});
