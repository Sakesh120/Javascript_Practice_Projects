const time = document.getElementById("time");
setInterval(() => {
  const now = new Date();
  time.textContent = now.toLocaleTimeString();
}, 1000);
