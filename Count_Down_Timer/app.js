const result = document.getElementById("result");

setInterval(() => {
  const current = Date.now();

  const olympicTime = new Date(2026, 0, 1).getTime(); //// months start from 0 , therefore for january use 6
  let timer = olympicTime - current;
  const day = Math.floor(timer / (1000 * 60 * 60 * 24));
  timer %= 1000 * 60 * 60 * 24;
  const hours = Math.floor(timer / (1000 * 60 * 60));
  timer %= 1000 * 60 * 60;
  const minutes = Math.floor(timer / (1000 * 60));
  timer %= 1000 * 60;
  const seconds = Math.floor(timer / 1000);
  timer %= 1000;

  result.textContent = `${day}:Days   ${hours}:Hour  ${minutes}:Minutes  ${seconds}:Seconds`;
}, 1000);
