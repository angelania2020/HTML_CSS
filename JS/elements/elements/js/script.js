'use strict';

// Получение элементов

const box = document.getElementById('box');
// console.log(box);

const buttons = document.getElementsByTagName('button');
// console.log(buttons);

const button = document.getElementsByTagName('button')[1];
// console.log(button);
// console.log(buttons[0]);

const circles = document.getElementsByClassName('circle');
// console.log(circles);

// новые методы - CSS селекторы

const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => { //forEach - метод
// 	console.log(item);
// });

const oneHeart = document.querySelector('.heart'); // возвращает первый попавшийся
// console.log(oneHeart);

// изменение элементов

console.dir(box); //посмотреть, что мы можем сделать с элементом

// например, стили
box.style.backgroundColor = 'orange';
box.style.width = '500px';

buttons[0].style.borderRadius = '100%';
// circles.style.backgroundColor = 'red'; // ошибка Uncaught TypeError: Cannot set property 'backgroundColor' of undefined
// Для коллекции нельзя устанвоить стили, надо циклом по всем обходить

circles[0].style.cssText = 'background-color: red;';

hearts.forEach(item => {
	item.style.backgroundColor = 'black';
});

const div = document.createElement('div'); //div - tag
div.classList.add('black');
// document.body.append(div);

// div.innerHTML = "Hello, world!!!";
// div.innerHTML = "<h1>Hello, world!!!</h1>"; // теги, стили, скрипты тут можем использовать
// div.textContent = "Привет!"; // только текст, безопаснее

const wrapper = document.querySelector('.wrapper');

wrapper.append(div); // в конец wrapper
// wrapper.prepend(div); // в начало wrapper

hearts[1].before(div);

circles[0].remove();

//события
const btn = document.querySelector('button');

//только для учебных целей
// btn.onclick = function () {
// 	alert("Вы нажали на эту кнопку!");
// };

// btn.addEventListener('click', () => {
// 	alert("Вы нажали на эту кнопку!");
// });

// btn.addEventListener('mouseenter', () => {
// 	console.log("Вы навели мышку!");
// });

// btn.addEventListener('mouseenter', (e) => { //event
// 	console.log(e);
// 	console.log(e.target);
// });

btn.addEventListener('click', (e) => {
	e.target.remove();
});


//путешествовать по DOM-дереву
console.log(document.head);

