// создать элементы и их содержимое

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const header = document.createElement("header");
header.classList.add("header");

const h1 = document.createElement("h1");
h1.classList.add("header__title");
h1.textContent = "My keyboard"; 

const main = document.createElement("main");
main.classList.add("main");

const form = document.createElement("form");
form.classList.add("main__form");

const textarea = document.createElement("textarea");
textarea.classList.add("main__textarea");
textarea.textContent = "If you want to change lenguage press buttons shift + alt"; //комбинация для смены языка

const section = document.createElement("section");
section.classList.add("keyboard");

//  массивы с содержимым кнопок для каждого ряда

const keys1 = [  
    ["~", "`"],
    ["!", "1"],
    ["@", "2"],
    ["#", "3"],
    ["$", "4"],
    ["%", "5"],
    [":", "6"],
    ["?", "7"],
    ["*", "8"],
    ["(", "9"],
    [")", "0"],
    ["_", "-"],
    ["+", "="],
    ["Backspace"],
  ];
  
  const keys2 = [   
    ["Tab"],
    ["Q"],
    ["W"],
    ["E"],
    ["R"],
    ["T"],
    ["Y"],
    ["U"],
    ["I"],
    ["O"],
    ["P"],
    ["[", "{"],
    ["]", "}"],
    ["\\", "|"],
    ["DEL"],
  ];
  
  const keys3 = [ 
    ["Caps Lock"],
    ["A"],
    ["S"],
    ["D"],
    ["F"],
    ["G"],
    ["H"],
    ["J"],
    ["K"],
    ["L"],
    [";", ":"],
    ["'", "\""],
    ["Enter"],
  ];
  
  const keys4 = [ 
    ["Shift"],
    ["Z"],
    ["X"],
    ["C"],
    ["V"],
    ["B"],
    ["N"],
    ["M"],
    [",", "<"],
    [".", ">"],
    ["/", "?"],
    ["▲"],
    ["Shift"],
  ];

  const keys5 = [ 
    ["Ctrl"],
    ["Alt"],
    [" "],
    ["Alt"],
    ["Ctrl"],
    ["◄"],
    ["▼"],
    ["►"]
  ];
  

