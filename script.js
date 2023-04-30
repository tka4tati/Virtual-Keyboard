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
  
  //первый ряд кнопок
  const row1 = document.createElement("div");
  row1.classList.add("keyboard__row");
  section.appendChild(row1);

  // кнопки первого ряда
  for (let i = 0; i < keys1.length; i++) {
    const key = document.createElement("div");
    key.classList.add("keyboard__btn");
    row1.appendChild(key);
    for (let j = 0; j < keys1[i].length; j++) {
        if (keys1[i].length === 2) {
            const additionalSymbol = document.createElement("span");
            additionalSymbol.classList.add("additional-symbol");
            additionalSymbol.textContent = keys1[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys1[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys1[i][0];
            key.appendChild(mainSymbol);
        }
    }
 }
  
  //второй ряд кнопок
  const row2 = document.createElement("div");
  row2.classList.add("keyboard__row");
  section.appendChild(row2);

  // кнопки второго ряда
  for (let i = 0; i < keys2.length; i++) {
    const key = document.createElement("div");
    key.classList.add("keyboard__btn");
    row2.appendChild(key);
    for (let j = 0; j < keys2[i].length; j++) {
        if (keys2[i].length === 2) {
            const additionalSymbol = document.createElement("span");
            additionalSymbol.classList.add("additional-symbol");
            additionalSymbol.textContent = keys2[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys2[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys2[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }
 
  //третий ряд кнопок
  const row3 = document.createElement("div");
  row3.classList.add("keyboard__row");
  section.appendChild(row3);

  // кнопки третьего ряда
  for (let i = 0; i < keys3.length; i++) {
    const key = document.createElement("div");
    key.classList.add("keyboard__btn");
    row3.appendChild(key);
    for (let j = 0; j < keys3[i].length; j++) {
        if (keys3[i].length === 2) {
            const additionalSymbol = document.createElement("span");
            additionalSymbol.classList.add("additional-symbol");
            additionalSymbol.textContent = keys3[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys3[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys3[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }
   
  //четвертый ряд кнопок
  const row4 = document.createElement("div");
  row4.classList.add("keyboard__row");
  section.appendChild(row4);
   
 // кнопки четвертого ряда
 for (let i = 0; i < keys4.length; i++) {
    const key = document.createElement("div");
    key.classList.add("keyboard__btn");
    row4.appendChild(key);
    for (let j = 0; j < keys4[i].length; j++) {
        if (keys4[i].length === 2) {
            const additionalSymbol = document.createElement("span");
            additionalSymbol.classList.add("additional-symbol");
            additionalSymbol.textContent = keys4[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys4[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys4[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }

  //пятый ряд кнопок
  const row5 = document.createElement("div");
  row5.classList.add("keyboard__row");
  section.appendChild(row5);

  // кнопки пятого ряда
  for (let i = 0; i < keys5.length; i++) {
    const key = document.createElement("div");
    key.classList.add("keyboard__btn");
    row5.appendChild(key);
    for (let j = 0; j < keys5[i].length; j++) {
        if (keys5[i].length === 2) {
            const additionalSymbol = document.createElement("span");
            additionalSymbol.classList.add("additional-symbol");
            additionalSymbol.textContent = keys5[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys5[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement("span");
            mainSymbol.classList.add("main-symbol");
            mainSymbol.textContent = keys5[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }
  
  
