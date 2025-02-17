const searchButton = document.querySelector("button.search-button");
const closeSearchButton = document.querySelector("button.close-search-button");
const closeSearchBox = () => {
    document.querySelector("#search-dialog").style.display = "none";
    document.querySelector("body").classList.remove("search-opened");
    searchButton.classList.remove("search-button-hide");
    closeSearchButton.classList.add("search-button-hide")
}

const openSearchBox = () => {
    const body = document.querySelector("body");
    if(!body.classList.contains("search-opened")) {
        document.querySelector("#search-dialog").style.display = "flex";
        body.classList.add("search-opened");
        searchButton.classList.add("search-button-hide");
        closeSearchButton.classList.remove("search-button-hide");
    }
}

searchButton.addEventListener("click", openSearchBox);
closeSearchButton.addEventListener("click", closeSearchBox);