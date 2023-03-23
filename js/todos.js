const todoPageTitle = document.querySelector(".todo-page-title");
const loadJsonData = async (filepath) => {
  const res = await fetch(filepath);
  return await res.json();
};

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
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
