const API_KEY = "62ccd6d8c909419eb2d8016dd4283628";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("Assam"));
function reload() {
  window.location.reload();
}

async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  bindData(data.articles);
}

function bindData(articles) {
  const cardsContainer = document.getElementById("cardsContainer");
  const newsCardTemplate = document.getElementById("template-news-card");
  cardsContainer.innerHTML = "";

  articles.forEach(article => {
    if (!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

function fillDataInCard(cardClone, article) {
  const newsImage = cardClone.querySelector("#news-img");
  const newsTitle = cardClone.querySelector("#news-title");
  const newsSource = cardClone.querySelector("#news-source");
  const newsDesc = cardClone.querySelector("#news-desc");

  newsImage.src = article.urlToImage;
  newsTitle.innerHTML = article.title.split(" ").splice(0, 9).join(" ") + "...";
  newsDesc.innerHTML =
    article.description.split(" ").splice(0, 25).join(" ") + "...";

  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} | ${date}`;
  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

let curSelectedNav = null;
function onNavItemClick(id) {
  fetchNews(id);
  console.log(id);
  const navItem = document.getElementById(id);
  curSelectedNav?.classList.remove("active");
  curSelectedNav = navItem;

  curSelectedNav.classList.add("active");
  searchText.value = null;
}

const searchBtn = document.getElementById("search-btn");
const searchText = document.getElementById("search-input");

searchBtn.addEventListener("click", e => {
  // console.log(searchText.value);
  const query = searchText.value;
  if (!query) return;

  fetchNews(query);

  curSelectedNav?.classList.remove("active");
  curSelectedNav = null;
});
searchText.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    console.log(searchText.value);
    const query = searchText.value;
    if (!query) return;

    fetchNews(query);

    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
  }
});
