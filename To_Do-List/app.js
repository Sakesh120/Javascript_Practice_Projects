const form = document.querySelector("form");
const allTask = document.getElementById("allTask");
const input = document.querySelector("#task");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  const parent = document.createElement("div");
  const task = document.createElement("span");
  task.textContent = text;
  parent.classList.add("parent");
  task.classList.add("task");
  const btns = document.createElement("span");
  btns.classList.add("btns");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  btns.append(deleteBtn);
  btns.append(doneBtn);
  parent.append(task);
  parent.append(btns);

  allTask.append(parent);

  btns.addEventListener("click", (e) => {
    console.log(e.parent);
    if (e.target.textContent == "Delete") {
      parent.remove();
    }
    if (e.target.textContent == "Done") {
      task.style.textDecoration = "line-through";
      task.style.color = "gray";
      alert("Well done");
    }
  });
  form.reset();
});
