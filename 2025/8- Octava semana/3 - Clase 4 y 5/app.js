const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const chapterlist = document.getElementById("chapterList");
const mangaList = document.getElementById("mangaList")

let readProgress = JSON.parse(localStorage.getItem("readProgress")) || {};


searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchManga(query)
    }
});

async function fetchManga() {

    let query = document.getElementById("searchInput").value.trim();
  mangaList.innerHTML = "Cargando..."
  chapterlist.innerHTML = "";

  const res = await fetch(
`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(query)}`
  );
  
  const data = await res.json();

  mangaList.innerHTML = "";
  data.data.forEach(manga => {
    const title = manga.attributes.titles.en || manga.attributes.titles.en_jp || manga.attributes.titles.ja_jp;
    const poster = manga.attributes.posterImage?.small;

    const div = document.createElement("div");
    div.classList.add("manga-card");
    div.innerHTML = `
    <img src="${poster}" alt="${title}">
    <h3>${title}</h3>
    `;

    div.addEventListener("click", () => fetchChapters(manga.id, title));
    mangaList.appendChild(div);
  });
  
}

async function fetchChapters(mangaId, mangaTitle) {
    chapterlist.innerHTML = `Cargando capítulos de "${mangaTitle}"...`;

    const res = await fetch(`https://kitsu.io/api/edge/chapters?filter[mangaId]=${mangaId}&page[limit]=20`);

    const data = await res.json();

    chapterlist.innerHTML = "";
    data.data.forEach(chapter => {
        const chapterTitle = chapter.attributes.canonicalTitle;
        const chapterId = chapter.id;

        const div = document.createElement("div");
        div.classList.add("manga-card");
        div.innerHTML = `
        <h4>${chapterTitle}</h4>
        ${readProgress[chapterId] ? `<span class="read-market"> Leído</span>` : ""}
        `;
        div.addEventListener("click", () => markAsRead(chapterId, chapterTitle));
        chapterlist.appendChild(div);
    });
}

function markAsRead(chapterId, chapterTitle) {
    readProgress[chapterId] = true;
    localStorage.setItem("readProgress", JSON.stringify(readProgress));
    alert(`Marcaste como leído: ${chapterTitle}`);
    location.reload();
}

