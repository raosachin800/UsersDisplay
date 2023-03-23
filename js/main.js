const li = document.querySelector(".li");

const liTemplate = document.querySelector("#user-name-li");
const ulContainer = document.querySelector(".user-name-li-container");

const loadJsonData = async (filepath) => {
  const res = await fetch(filepath);
  return await res.json();
};

const ulContainer1 = document.querySelector(".user-name-ul");
const liTemplate1 = document.querySelector("#ul-template");
const li1 = document.querySelectorAll(".user-name-list");

fetch("https://jsonplaceholder.typicode.com/users/")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const usersData = data;

    usersData.forEach((list) => {
      const userClone = liTemplate1.content.cloneNode(true);
      userClone.querySelector(".user-name-list").innerHTML = list.name;
      userClone.querySelector(".user-name-list").setAttribute("id", list.id);
      userClone.querySelectorAll(".user-name-list").forEach((eachList) => {
        eachList.addEventListener("mouseover", (e) => {
          if (e.target.innerHTML == list.name) {
            document.querySelector(".user-card-name").innerHTML = list.name;
            document.querySelector(".user-email").innerHTML = list.email;
            document.querySelector(".user-number").innerHTML = list.phone;
            document.querySelector(".user-website").innerHTML = list.website;
            document
              .querySelector(".user-website")
              .setAttribute("href", list.website);
            document.querySelector(".company-name").innerHTML =
              list.company.name;
            document.querySelector(".company-catchphrase").innerHTML =
              list.company.catchPhrase;
            document.querySelector(".company-bs").innerHTML = list.company.bs;
          }
        });
      });
      ulContainer1.appendChild(userClone);
    });
  });

// Retrieve all the posts

const postContainer = document.querySelector(".post-title-container");
const postTemplate = document.querySelector("#post-template");

const productId = location.hash || "#Posts";

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const postsData = data;
    const selectedpostsData = postsData.find(function (data) {
      if (window.location.pathname + data.id === productId) return data;
    });
    const windowHash = "/html/posts.html/" + data.id;
    postsData.forEach((post) => {
      const postClone = postTemplate.content.cloneNode(true);

      postClone
        .querySelector(".post-title")
        .setAttribute("href", "../html/posts.html#" + post.id);

      postClone.querySelector(".post-title").setAttribute("data-id", post.id);
      postClone.querySelector(".post-title").innerHTML =
        post.id + ". " + "  " + post.title;
      postContainer.appendChild(postClone);
    });
  });
document.querySelectorAll(".post-title").forEach((postTitle) => {
  console.log(postTitle);
  postTitle.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href =
      "../html/posts.html" + "#" + postTitle.getAttribute("data-id");
    window.location.reload();
  });
});

// Album Data

const albumContainer = document.querySelector(".album-title-container");
const albumTemplate = document.querySelector("#album-template");

fetch("https://jsonplaceholder.typicode.com/albums/")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const albumData = data;
    console.log(albumData);
    albumData.forEach((album) => {
      const albumClone = albumTemplate.content.cloneNode(true);

      albumClone
        .querySelector(".album-title")
        .setAttribute("href", "../html/album.html#" + album.id);

      albumClone
        .querySelector(".album-title")
        .setAttribute("data-id", album.id);
      albumClone.querySelector(".album-title").innerHTML =
        album.id + ". " + "  " + album.title;
      albumContainer.appendChild(albumClone);
    });
  });

// Todos Data Retrieve to homepage
const todoContainer = document.querySelector(".todo-title-container");
const todoTemplate = document.querySelector("#todo-template");

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const todoData = data;
    console.log(todoData);
    todoData.forEach((todo) => {
      const todoClone = todoTemplate.content.cloneNode(true);

      todoClone
        .querySelector(".todo-title")
        .setAttribute("href", "../html/todos.html#" + todo.id);

      todoClone.querySelector(".todo-title").setAttribute("data-id", todo.id);
      todoClone.querySelector(".todo-title").innerHTML =
        todo.id + ". " + "  " + todo.title;
      todoContainer.appendChild(todoClone);
    });
  });
