const images = [
    {src: 'img/montaña1.jpg', category: 'montaña', desc: 'Montaña nevada'},
    {src: 'img/playa1.jpg', category: 'playa', desc: 'Playa tropical'},
    {src: 'img/ciudad1.jpg', category: 'ciudad', desc: 'Ciudad nocturna'},
    {src: 'img/montaña2.jpg', category: 'montaña', desc: 'Cima al amanecer'},
    {src: 'img/playa2.jpg', category: 'playa', desc: 'Arena dorada'},
    {src: 'img/ciudad2.jpg', category: 'ciudad', desc: 'Calles iluminadas'},
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll("[data-filter]");
const toggleTheme = document.getElementById("toggle-theme");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

// Render inicial
function renderGallery(items) {
    gallery.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.innerHTML = `
        <img src="${item.src}" alt =${item.desc}" data-desc="${item.desc}">`;
        gallery.appendChild(div)
    });
}

renderGallery(images)

// Filtramos por categoría

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        if (filter === "all") {
            renderGallery(images);
        } else {
            renderGallery(images.filter(img => img.category === filter));
        }
    });
});

// Buscador

searchInput.addEventListener('input', () => {
    const search = searchInput.value.toLowerCase();
    const filtered = images.filter(img => img.desc.toLowerCase().includes(search));
    renderGallery(filtered)
})

// Modo oscuro
toggleTheme.addEventListener("change", () => {
    document.body.classList.toggle('dark')
});

// Modal al hacer click

gallery.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        modal.style.display = 'block';
        modalImg.src = e.target.src;
        modalDesc.textContent = e.target.dataset.desc;
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
});
