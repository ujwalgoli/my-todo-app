const todos = ["Buy groceries", "Learn Git", "Build a project"];

todos.forEach((todo) => {
  const li = document.createElement("li");
  li.textContent = todo;
  document.getElementById("todos").appendChild(li);
});
