// script.js

const resetBtn = document.getElementById('reset');

const colorBox = document.getElementById('colorBox');
const redBtn = document.getElementById('redBtn');
const greenBtn = document.getElementById('greenBtn');
const blueBtn = document.getElementById('blueBtn');

redBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "green";
});

blueBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "blue";
});

resetBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "lightblue";
});