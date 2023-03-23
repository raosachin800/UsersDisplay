const albumPageTitle = document.querySelector(".album-page-title");
const loadJsonData = async (filepath) => {
  const res = await fetch(filepath);
  return await res.json();
};

loadJsonData("../jsons/albums.json").then((data) => {
  const albumData = data;
  console.log(window.location.pathname);
  const selectedAlbumData = albumData.find(function (data) {
    if (location.hash === "#" + data.id) {
      console.log(data);
      return data;
    }
  });

  albumPageTitle.innerHTML = selectedAlbumData.title;
});
