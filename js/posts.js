const postPageTitle = document.querySelector(".post-page-title");
const postBody = document.querySelector(".post-body");
const loadJsonData = async (filepath) => {
  const res = await fetch(filepath);
  return await res.json();
};

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then(function (response) {
    return response.json();
  })
  .then((data) => {
    const postsData = data;
    const windowHash = "/html/posts.html/" + data.id;
    console.log(window.location.pathname);
    const productId = location.hash;
    const selectedpostsData = postsData.find(function (data) {
      if (location.hash === "#" + data.id) {
        console.log(data);
        return data;
      }
    });

    postPageTitle.innerHTML = selectedpostsData.title;
    postBody.innerHTML = selectedpostsData.body;
  });
