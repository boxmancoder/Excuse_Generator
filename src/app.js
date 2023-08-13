import "bootstrap";
import "./style.css";

const who = [
  "My Dad",
  "The Neighbor",
  "Donald Trump",
  "The Predator",
  "The Illuminati",
  "I unfortunately"
];
const what = [
  "robbed a bank",
  "fell asleep and never woke up",
  "had a serious meeting",
  "took the dog for a walk",
  "crashed my car"
];
const where = [
  "in my room.",
  "at Walmart.",
  "at Burger King.",
  "in China.",
  "on my Birthday.",
  "on December 11th.",
  "in the alley at Grove Street."
];

const excuseSpan = document.getElementById("excuse");
const generateButton = document.getElementById("generateButton");

function generateRandomExcuse() {
  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhere = where[Math.floor(Math.random() * where.length)];

  const sentence = `${randomWho} ${randomWhat} ${randomWhere}`;
  return sentence;
}

generateButton.addEventListener("click", () => {
  excuseSpan.textContent = generateRandomExcuse();
});

// Initial generation
excuseSpan.textContent = generateRandomExcuse();
