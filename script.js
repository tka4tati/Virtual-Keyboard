// создаем элементы
const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
const header = document.createElement("header");
header.classList.add("header");
const h1 = document.createElement("h1");
h1.classList.add("header__title");
const main = document.createElement("main");
main.classList.add("main");
const form = document.createElement("form");
form.classList.add("main__form");
const textarea = document.createElement("textarea");
textarea.classList.add("main__textarea");
textarea.textContent = "If you want to change lenguage press buttons shift + alt";
const section = document.createElement("section");
section.classList.add("keyboard");

