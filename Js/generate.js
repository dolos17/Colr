// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// const btn = document.getElementById('btn');
// var box1 = document.querySelector('#box-1');
// var box2 = document.querySelector('#box-2');
// var box3 = document.querySelector('#box-3');
// var box4 = document.querySelector('#box-4');
// const color = document.querySelector('.color-text');

// btn.addEventListener("click", function () {
//     let hexColor = '#';

//         for (let i = 0; i < 6; i++) {
//             hexColor += hex[getRandomNumber()];
//         }

//     color.textContent = hexColor;
//     box1.style.backgroundColor = hexColor;
//     box2.style.backgroundColor = hexColor;
//     box3.style.backgroundColor = hexColor;
//     box4.style.backgroundColor = hexColor;
    
// });

// function getRandomNumber() {
//     return Math.floor(Math.random() * hex.length);
// }

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
var box1 = document.querySelector('#box-1');
var box2 = document.querySelector('#box-2');
var box3 = document.querySelector('#box-3');
var box4 = document.querySelector('#box-4');
const color1 = document.querySelector('.color-text1');
const color2 = document.querySelector('.color-text2');
const color3 = document.querySelector('.color-text3');
const color4 = document.querySelector('.color-text4');

btn.addEventListener("click", function () {
    let hexColor1 = '#';
    let hexColor2 = '#';
    let hexColor3 = '#';
    let hexColor4 = '#';


        for (let i = 0; i < 6; i++) {
            hexColor1 += hex[getRandomNumber()];
            hexColor2 += hex[getRandomNumber()];
            hexColor3 += hex[getRandomNumber()];
            hexColor4 += hex[getRandomNumber()];
        }

    color1.textContent = hexColor1;
    box1.style.backgroundColor = hexColor1;

    color2.textContent = hexColor2;
    box2.style.backgroundColor = hexColor2;

    color3.textContent = hexColor3;
    box3.style.backgroundColor = hexColor3;

    color4.textContent = hexColor4;
    box4.style.backgroundColor = hexColor4;
    
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

window.addEventListener('load', (event) => {
  
   

    let hexColor1 = '#';
    let hexColor2 = '#';
    let hexColor3 = '#';
    let hexColor4 = '#';


        for (let i = 0; i < 6; i++) {
            hexColor1 += hex[getRandomNumber()];
            hexColor2 += hex[getRandomNumber()];
            hexColor3 += hex[getRandomNumber()];
            hexColor4 += hex[getRandomNumber()];
        }

    color1.textContent = hexColor1;
    box1.style.backgroundColor = hexColor1;

    color2.textContent = hexColor2;
    box2.style.backgroundColor = hexColor2;

    color3.textContent = hexColor3;
    box3.style.backgroundColor = hexColor3;

    color4.textContent = hexColor4;
    box4.style.backgroundColor = hexColor4;

   
});