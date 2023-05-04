// создать элементы и их содержимое

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const header = document.createElement('header');
header.classList.add('header');

const h1 = document.createElement('h1');
h1.classList.add('header__title');
h1.textContent = 'My keyboard'; 

const main = document.createElement('main');
main.classList.add('main');

const form = document.createElement('form');
form.classList.add('main__form');

const textarea = document.createElement('textarea');
textarea.classList.add('main__textarea');
textarea.textContent = 'If you want to change lenguage press buttons shift + alt'; //комбинация для смены языка

const section = document.createElement('section');
section.classList.add('keyboard');


// добавление ключевых элементов на веб-страницу

header.appendChild(h1);
form.appendChild(textarea);
main.appendChild(form);
main.appendChild(section);
wrapper.appendChild(header);
wrapper.appendChild(main);
document.body.appendChild(wrapper);

//  массивы с содержимым кнопок для каждого ряда

const keys1 = [  
    ['~', '`'],
    ['!', '1'],
    ['@', '2'],
    ['#', '3'],
    ['$', '4'],
    ['%', '5'],
    [':', '6'],
    ['?', '7'],
    ['*', '8'],
    ['(', '9'],
    [')', '0'],
    ['_', '-'],
    ['+', '='],
    // ['Backspace'],
  ];
  
  const keys2 = [   
    ['Q'],
    ['W'],
    ['E'],
    ['R'],
    ['T'],
    ['Y'],
    ['U'],
    ['I'],
    ['O'],
    ['P'],
    ['[', '{'],
    [']', '}'],
    ['\\', '|'],
  ];
  
  const keys3 = [ 
    ['A'],
    ['S'],
    ['D'],
    ['F'],
    ['G'],
    ['H'],
    ['J'],
    ['K'],
    ['L'],
    [';', ':'],
    [','],
  ];
  
  const keys4 = [ 
    ['Z'],
    ['X'],
    ['C'],
    ['V'],
    ['B'],
    ['N'],
    ['M'],
    [',', '<'],
    ['.', '>'],
    ['▲'],
    ['/', '?'],
    // ['Shift'],
  ];

  const keys5 = [ 
    ['Alt'],
    ['◄'],
    ['▼'],
    ['►']
  ];
  
  //первый ряд кнопок
  const row1 = document.createElement('div');
  row1.classList.add('keyboard__row');
  section.appendChild(row1);


  // кнопки первого ряда
  for (let i = 0; i < keys1.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__btn');
    row1.appendChild(key);
    for (let j = 0; j < keys1[i].length; j++) {
        if (keys1[i].length === 2) {
            const additionalSymbol = document.createElement('span');
            additionalSymbol.classList.add('additional-symbol');
            additionalSymbol.textContent = keys1[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys1[i][j+1];
            key.appendChild(mainSymbol);
            // key.setAttribute('id', 1);
        }
        else {
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys1[i][0];
            key.appendChild(mainSymbol);
        }
    }
 }

 //кнопка backspace
  const backspace = document.createElement('div');
  backspace.classList.add('backspace-btn');
  backspace.classList.add('keyboard__btn');
  row1.appendChild(backspace);
  backspace.textContent = 'Backspace';
  


  //второй ряд кнопок
  const row2 = document.createElement('div');
  row2.classList.add('keyboard__row');
  section.appendChild(row2);

  //кнопка Tab
  const tab = document.createElement('div');
  tab.classList.add('cltr-btn');
  tab.classList.add('keyboard__btn');
  row2.appendChild(tab);
  tab.textContent = 'Tab';

  // кнопки второго ряда
  for (let i = 0; i < keys2.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__btn');
    row2.appendChild(key);
    for (let j = 0; j < keys2[i].length; j++) {
        if (keys2[i].length === 2) {
            const additionalSymbol = document.createElement('span');
            additionalSymbol.classList.add('additional-symbol');
            additionalSymbol.textContent = keys2[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys2[i][j+1];

            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys2[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }

    //кнопка DEL
    const del = document.createElement('div');
    del.classList.add('del-btn');
    del.classList.add('keyboard__btn');
    row2.appendChild(del);
    del.textContent = 'DEL';

 



  //третий ряд кнопок
  const row3 = document.createElement('div');
  row3.classList.add('keyboard__row');
  section.appendChild(row3);

  //кнопка Caps lock
  const caps = document.createElement('div');
  caps.classList.add('caps-btn');
  caps.classList.add('keyboard__btn');
  row3.appendChild(caps);
  caps.textContent = 'Caps lock';

  // кнопки третьего ряда
  for (let i = 0; i < keys3.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__btn');
    row3.appendChild(key);
    for (let j = 0; j < keys3[i].length; j++) {
        if (keys3[i].length === 2) {
            const additionalSymbol = document.createElement('span');
            additionalSymbol.classList.add('additional-symbol');
            additionalSymbol.textContent = keys3[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys3[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys3[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }

 //кнопка Enter
 const enter = document.createElement('div');
 enter.classList.add('enter-btn');
 enter.classList.add('keyboard__btn');
 row3.appendChild(enter);
 enter.textContent = 'Enter';




   
  //четвертый ряд кнопок
  const row4 = document.createElement('div');
  row4.classList.add('keyboard__row');
  section.appendChild(row4);

   //кнопка Shift
   const shift = document.createElement('div');
   shift.classList.add('caps-btn');
   shift.classList.add('keyboard__btn');
   row4.appendChild(shift);
   shift.textContent = 'Shift';
   
 // кнопки четвертого ряда
 for (let i = 0; i < keys4.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__btn');
    row4.appendChild(key);
    for (let j = 0; j < keys4[i].length; j++) {
        if (keys4[i].length === 2) {
            const additionalSymbol = document.createElement('span');
            additionalSymbol.classList.add('additional-symbol');
            additionalSymbol.textContent = keys4[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys4[i][j+1];

            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys4[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }

 //кнопка Shift 2
 const shift2 = document.createElement('div');
 shift2.classList.add('enter-btn');
 shift2.classList.add('keyboard__btn');
 row4.appendChild(shift2);
 shift2.textContent = 'Shift';



  //пятый ряд кнопок
  const row5 = document.createElement('div');
  row5.classList.add('keyboard__row');
  section.appendChild(row5);

  //кнопка Ctrl
  const ctrl = document.createElement('div');
  ctrl.classList.add('cltr-btn');
  ctrl.classList.add('keyboard__btn');
  row5.appendChild(ctrl);
  ctrl.textContent = 'Ctrl';

  //кнопка Alt
  const alt = document.createElement('div');
  alt.classList.add('keyboard__btn');
  row5.appendChild(alt);
  alt.textContent = 'Alt';

  //кнопка Space
  const space = document.createElement('div');
  space.classList.add('space-btn');
  space.classList.add('keyboard__btn');
  row5.appendChild(space);
  space.textContent = ' ';

  // кнопки пятого ряда
  for (let i = 0; i < keys5.length; i++) {
    const key = document.createElement('div');
    key.classList.add('keyboard__btn');
    row5.appendChild(key);
    for (let j = 0; j < keys5[i].length; j++) {
        if (keys5[i].length === 2) {
            const additionalSymbol = document.createElement('span');
            additionalSymbol.classList.add('additional-symbol');
            additionalSymbol.textContent = keys5[i][0];
            key.appendChild(additionalSymbol);
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys5[i][j+1];
            key.appendChild(mainSymbol);
        }
        else {
            const mainSymbol = document.createElement('span');
            mainSymbol.classList.add('main-symbol');
            mainSymbol.textContent = keys5[i][0];
            key.appendChild(mainSymbol); 
        }
    }
 }

 //вторая кнопка Ctrl
 const ctrl2 = document.createElement('div');
 ctrl2.classList.add('cltr-btn');
 ctrl2.classList.add('keyboard__btn');
 row5.appendChild(ctrl2);
 ctrl2.textContent = 'Ctrl'; 


// //первая клавиша
//  const key1 = document.getElementsByClassName('keyboard__btn')[1];
// document.addEventListener('keypress', function(event) {
//   if (event.code === 'Digit1') {
//     key1.classList.add('active');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.code === 'Digit1') {
//     key1.classList.remove('active');
//   }
// });

// //вторая клавиша
// const key2 = document.getElementsByClassName('keyboard__btn')[2];
// document.addEventListener('keypress', function(event) {
//   if (event.code === 'Digit2') {
//     key2.classList.add('active');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.code === 'Digit2') {
//     key2.classList.remove('active');
//   }
// });
  

// //третья клавиша
// const key3 = document.getElementsByClassName('keyboard__btn')[3];
// document.addEventListener('keypress', function(event) {
//   if (event.code === 'Digit3') {
//     key3.classList.add('active');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.code === 'Digit3') {
//     key3.classList.remove('active');
//   }
// });

// //четвертая клавиша
// const key4 = document.getElementsByClassName('keyboard__btn')[4];
// document.addEventListener('keypress', function(event) {
//   if (event.code === 'Digit4') {
//     key4.classList.add('active');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.code === 'Digit4') {
//     key4.classList.remove('active');
//   }
// });

// //четвертая клавиша
// const key5 = document.getElementsByClassName('keyboard__btn')[5];
// document.addEventListener('keypress', function(event) {
//   if (event.code === 'Digit5') {
//     key5.classList.add('active');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.code === 'Digit5') {
//     key5.classList.remove('active');
//   }
// });

// //четвертая клавиша
// const key6 = document.getElementsByClassName('keyboard__btn')[6];
// document.addEventListener('keypress', function(event) {
//   if (event.code === 'Digit6') {
//     key6.classList.add('active');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.code === 'Digit6') {
//     key6.classList.remove('active');
//   }
// });
  
  



const keys = document.getElementsByClassName('keyboard__btn');

// Добавляем события для каждой клавиши
for (let i = 1; i < keys.length; i++) {
  const key = keys[i];
  const digit = i;
  document.addEventListener('keypress', function(event) {
    if (event.code === 'Digit' + digit) {
      key.classList.add('active');
    }
  });
  document.addEventListener('keyup', function(event) {
    if (event.code === 'Digit' + digit) {
      key.classList.remove('active');
    }
  });
}





// `
const key0 = document.getElementsByClassName('keyboard__btn')[0];
document.addEventListener('keypress', function(event) {
  if (event.code === 'Backquote') {
    key0.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'Backquote') {
    key0.classList.remove('active');
  }
});

// 0
const key10 = document.getElementsByClassName('keyboard__btn')[10];
document.addEventListener('keypress', function(event) {
  if (event.code === 'Digit0') {
    key10.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'Digit0') {
    key10.classList.remove('active');
  }
});

// -
const key11 = document.getElementsByClassName('keyboard__btn')[11];
document.addEventListener('keypress', function(event) {
  if (event.code === 'Minus') {
    key11.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'Minus') {
    key11.classList.remove('active');
  }
});

// +
const key12 = document.getElementsByClassName('keyboard__btn')[12];
document.addEventListener('keypress', function(event) {
  if (event.code === 'Equal') {
    key12.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'Equal') {
    key12.classList.remove('active');
  }
});

// Backspace
// const key13 = document.getElementsByClassName('backspace-btn')[0];
document.addEventListener('keypress', function(event) {
  if (event.code === 'Backspace') {
    backspace.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'Backspace') {
    backspace.classList.remove('active');
  }
});

document.addEventListener('keypress', function(event) {
  if (event.code === 'Tab') {
    tab.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'Tab') {
    tab.classList.remove('active');
  }
});












// Добавляем события для каждой буквенной клавиши

//   const key = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
//   for (let i = 0; i < key.length; i++) {

//   document.addEventListener('keypress', function(event) {
//     if (event.key.toUpperCase() === key[i]) {
//       key.classList.add('active');
//     }
//   });
//   document.addEventListener('keyup', function(event) {
//     if (event.key.toUpperCase() === key[i]) {
//       key.classList.remove('active');
//     }
//   });
// }

// const keyss = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
// for (let i = 0; i < keyss.length; i++) {

//   document.addEventListener('keydown', function(event) {
//     if (event.key.toUpperCase() === keyss[i]) {
//       keyElement.classList.add('active');
//     }
//   });
//   document.addEventListener('keyup', function(event) {
//     if (event.key.toUpperCase() === keyss[i]) {
//       keyElement.classList.remove('active');
//     }
//   });
// }