const form = document.querySelector("form");
const answers = {
  q1: "Virat Kohali",
  q2: "West Indies",
  q3: "Sachin Tendulkar",
  q4: "Rohit Sharmas",
  q5: "Muttiah Muralitharan",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let finalScore = 0;
  const data = new FormData(form);

  for (let [name, value] of data.entries()) {
    if (answers[name] == value) {
      finalScore++;
    }
  }

  const outOf = document.getElementById("outOf");
  outOf.textContent = `Your Score is ${finalScore} out of 5 `;
  form.reset();
});
