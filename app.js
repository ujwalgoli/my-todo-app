const todos = ["Buy groceries", "Learn Git", "Build a project"];

todos.forEach((todo, index) => {
  const li = document.createElement("li");
  li.textContent = todo;
  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = () => li.remove();
  li.appendChild(btn);
  document.getElementById("todos").appendChild(li);
});
