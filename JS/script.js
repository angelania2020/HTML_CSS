'use strict';
console.log("Есть подключение");

let number = 10;
const borderSize = 1;

console.log(number);
number = 15;
console.log(number);

// borderSize = 2; //нельзя

console.log(name);
var name = "Param";

//строгий режим
// a = 15; //нельзя, так как не определена...
//console.log(a);


//Типы данных

let aa = 4.6;
console.log(aa);
console.log(typeof (aa));
console.log(4 / 0);
console.log(typeof (4 / 0));
console.log("Вася" * 9); //NaN - Not a Number

//объект - коллекция данных ...
const obj = {
	myName: 'Angelina',
	age: 27
};

console.log(obj.myName);
console.log(obj['myName']);

// массив - частный случай объекта
// {} - объект, [] - массив

let arr = ['музыка', 'кино', 5, {}, []];
console.log(arr);


// интерполяция
const type = 'games';
console.log('https://myshope.com/' + type);
console.log(`https://myshope.com/${type}`); // косые кавычки

// Функции
function showMessage() { //глагол с описанием действия, тело функции
	console.log('Hello, world!');
} //тут ; необязательна
showMessage(); //вызов функции



function showMessage2(text) {
	console.log(text);
}
showMessage2("Привет, мир!!"); //вызов


let num = 20;
function showText() {
	console.log(num);
	num = 10;
	// let num = 10; script.js:67 Uncaught ReferenceError: Cannot access 'num' before initialization??
}
showText();
console.log(num);


function calc(a, b) {
	return (a + b);
	console.log('Мертвый код, никогда не отработает');
}

console.log(calc(5, 6));


// Переменная как результат работы функции
function ret() {
	let num = 100;
	return num;
}
const someNum = ret();
console.log(someNum);

//функциональное выражение (по картинке) - функция помещается в переменную
const logger = function () {
	console.log('hello!');
}; //здесь будет ;
logger();

// стрелочная функция
const calc2 = (a, b) => a + b;
// аналогично const calc2 = (a, b) => {return a + b};
let result2 = calc2(7, 70);
console.log(result2);


//callback функции
function first() {
	setTimeout(function () {
		console.log(1);
	}, 500); //5 миллисекунд
}

function second() {
	console.log(2);
}

first();
second();


function leanJS(lang, callback) { //callback
	console.log(`Мы учим: ${lang}`);
	callback(); //ждем вызова leanJS ???
}

// Вызывается
leanJS("JS lang", function () {
	console.log("I have finished!!!");
});

function done() {
	console.log("I have finished!");
}

// Вызывается
leanJS("JS lang", done);