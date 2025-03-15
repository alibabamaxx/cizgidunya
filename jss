function openReader(title) {
    const reader = document.getElementById("reader");
    const comicTitle = document.getElementById("comic-title");
    comicTitle.textContent = title;
    reader.classList.remove("hidden");
}

function closeReader() {
    document.getElementById("reader").classList.add("hidden");
}
