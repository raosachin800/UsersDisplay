const todoPageTitle = document.querySelector(".todo-page-title");
const loadJsonData = async (filepath) => {
  const res = await fetch(filepath);
  return await res.json();
};

loadJsonData("../jsons/todos.json").then((data) => {
  const todosData = data;
  console.log(window.location.pathname);
  const selectedTodoData = todosData.find(function (data) {
    if (location.hash === "#" + data.id) {
      console.log(data);
      return data;
    }
  });

  todoPageTitle.innerHTML = selectedTodoData.title;
});
