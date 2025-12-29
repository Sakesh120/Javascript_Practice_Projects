const result = document.getElementById("result");
const button = document.querySelector("#btn");
const container = document.getElementById("container");

function strong() {
  let love = Math.floor(Math.random() * 21) + 80;
  return love;
}

function weak() {
  let love = Math.floor(Math.random() * 21) + 60;
  return love;
}

function sorry() {
  let love = Math.floor(Math.random() * 21) + 40;
  return love;
}

button.addEventListener("click", () => {
  if (
    container.children[0].value.length == 0 ||
    container.children[1].value.length == 0
  ) {
    result.textContent = `Aree Nam to dal yaar`;
  } else {
    setTimeout(() => {
      if (
        container.children[0].value.length == container.children[1].value.length
      ) {
        result.textContent = `${strong()}%`;
      } else if (
        container.children[0].value.length < container.children[1].value.length
      ) {
        result.textContent = `${weak()}%`;
      } else {
        result.textContent = `${sorry()}%`;
      }
    }, 1000);
  }
});
