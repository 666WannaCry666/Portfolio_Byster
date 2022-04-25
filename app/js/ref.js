// Ищем параметр ref, пишем его в localstorage и редиректим на страницу без ref
let searchRef = new URLSearchParams(window.location.search);

if (searchRef.has("ref")) {
    localStorage.setItem("ref", searchRef.get("ref"));

    document.location.replace(window.location.href.split("?")[0]);
}
