const loading = document.getElementById("loading");
const loader = document.createElement("div");
loader.classList.add("loader");
loading.appendChild(loader);

for (let i = 0; i < 3; i++) {
    const newElement = document.createElement("div");
    newElement.classList.add("loader-item");
    loader.appendChild(newElement);
}

window.onload = function () {
    loading.style.display = "none";
};
