// You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";

  const pageHeading = document.createElement("h1");
  pageHeading.textContent = `Got ${episodeList.length} episode(s)`;

  const episodeContainer = document.createElement("section");
  episodeContainer.className = "episode-container";

  episodeList.forEach((episode) => {
    const episodeCard = createEpisodeCard(episode);
    episodeContainer.appendChild(episodeCard);
  });

  const sourceParagraph = document.createElement("p");
  sourceParagraph.innerHTML =
    'Data originally comes from <a href="https://tvmaze.com/" target="_blank" rel="noopener noreferrer">TVMaze.com</a>.';

  rootElem.appendChild(pageHeading);
  rootElem.appendChild(episodeContainer);
  rootElem.appendChild(sourceParagraph);
}

function createEpisodeCard(episode) {
  const article = document.createElement("article");
  article.className = "episode-card";

  const title = document.createElement("h2");
  title.textContent = `${episode.name} - ${formatEpisodeCode(
    episode.season,
    episode.number
  )}`;

  const image = document.createElement("img");
  image.src = episode.image.medium;
  image.alt = `${episode.name} episode image`;

  const summary = document.createElement("div");
  summary.innerHTML = episode.summary;

  article.appendChild(title);
  article.appendChild(image);
  article.appendChild(summary);

  return article;
}

function formatEpisodeCode(season, episodeNumber) {
  const formattedSeason = String(season).padStart(2, "0");
  const formattedEpisode = String(episodeNumber).padStart(2, "0");
  return `S${formattedSeason}E${formattedEpisode}`;
}

window.onload = setup;
