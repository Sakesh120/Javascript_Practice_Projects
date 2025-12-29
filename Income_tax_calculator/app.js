const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const income = document.querySelector("#income");
  const amount = parseInt(income.value);
  const result = document.querySelector("h2");
  let totaltax = 0;
  if (amount <= 1200000) {
    totaltax = 0;
  } else if (amount <= 1600000) {
    totaltax = (amount - 1200000) * 0.15; //15%
  } else if (amount <= 2000000) {
    totaltax = (amount - 1600000) * 0.2 + 60000; ///20% + (1200000-1600000)*0.15
  } else if (amount <= 2400000) {
    totaltax = (amount - 2000000) * 0.25 + 80000 + 60000; ///25%+(160000-200000) *0.20+ (1200000-1600000)*0.15
  } else {
    totaltax = (amount - 2400000) * 0.25 + 100000 + 80000 + 60000; ///25%+(240000-200000)*0.25+(160000-200000) *0.20+ (1200000-1600000)*0.15
  }
  result.textContent = `📊 Total tax :${Math.round(totaltax)}`;
  form.reset();
});
