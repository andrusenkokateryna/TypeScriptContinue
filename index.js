"use strict";
//=================== #1
var array = ['hello', ' ', 'world!'];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.write(val);
}
var a;
a = 1;
console.log(a);
var oneString = "1";
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//===========TUPLES===============
// определение кортежа - кортеж состоит из двух элементов - строки и числа
var userInfo;
// инициализация кортежа
userInfo = ["Tom", 28];
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
//userInfo = [28, "Tom"]; // Ошибка
// использование кортежа
console.log(userInfo[1]); // 28
userInfo[1] = 37;
//====================Enum=======
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
function warnUser() {
    alert("This is my warning message");
}
var someVar = "hello";
console.log(someVar); // сейчас someVar - это string
someVar = 20;
console.log(someVar); // сейчас someVar - это number
//===========КОМПЛЕКСНЫЕ ОБЪЕКТЫ====================
var person = { name: "Tom", age: 23 };
console.log(person.name);
// альтернативный вариант получения свойства
console.log(person["name"]);
//===============Union==========
//ОБЪДИНЕНИЕ ТИПОВ
var id;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id); // 234
//==========typeof=====
var sum;
sum = 1200;
if (typeof sum === "number") {
    var result_1 = sum / 12;
    console.log(result_1);
}
else {
    console.log("invalid operation");
}
var sums = 36.6;
if (typeof sum === "number") {
    console.log(sums / 6);
}
//=====assertion=====приведение к типу====
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength); //16
//=================
var someUnionValue = "hello work";
strLength = someUnionValue.length;
console.log(strLength); // 10
var someValuee = "this is a string";
var strLengthh = someValue.length;
console.log(strLengthh); //16
var someUnionValuee = "hello work";
strLength = someUnionValue.length;
console.log(strLength); // 10
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
    console.log(e);
}
//=========ПЕРЕМЕННЫЕ=======================
//var
/*Доступна в любой части функции, в которой она определена.


function print(){
    if(1) {
        var x = 94;
    }
    console.log(x); // норм
}

//let/const
Доступна только в рамках блока, в котором она определена


function print(){
    if(1) {
        let x = 94;
    }
    console.log(x); // ! Ошибка
}

//var
Можно использовать в функции перед определением.


function print(){
    console.log(x); // undefined, но норм
    var x = 76;
}
//let/const
Можно использовать только после определения.


function print(){
    console.log(x); // ! Ошибка
    let x = 76;
}
//var
В одной и той же функции можно несколько раз определить переменную с одним и тем же именем.


function print(){
    var x = 72;
    console.log(x); // 72
    var x = 24;     // норм
    console.log(x); // 24
}
//let/const
В одной и той же функции можно только один раз определить переменную с одним и тем же именем.


function print(){
    let x = 72;
    console.log(x); // 72
    let x = 24;     // ! Ошибка
    console.log(x);
}
 */
// Error: 'e' doesn't exist here
//console.log(e);
// =====================let or const======================================
/*Применяя принцип наименьшего уровня привелегий, все объявления переменных, которые вы в
дальнейшем не планируете менять, должны использовать const. Объясняется это тем, что если
переменная
не должна изменять свое значение, другие разработчики, которые работают над тем же кодом,
не должны
иметь возможность записи в объект. Это должно быть позволено только в случае реальной
необходимости
переназначения переменной. Использование const делает код более предсказуемым и понятным
при объяснении
потока данных.*/
//=========FUNCTION==========================
// определение функции
function add(a, b) {
    return a + b;
}
// вызов функции
var result1 = add(1, 2);
console.log(result1);
//////////////////////////////////////
var s = function (a, b) {
    return a + b;
};
var result = s(3, 2);
console.log(result);
////////////////////////////////////////
var koef = 1.5;
function addd(a) {
    var result3 = a * koef;
    console.log(result3);
}
addd(20); // 30
addd(10); //15
//Необязательные параметры
function getNames(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
var name2 = getName("Вася");
console.log(name2); // Вася
//Параметры по умолчанию
function getName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Иванов"; }
    return firstName + " " + lastName;
}
var name11 = getName("Иван", "Кузнецов");
console.log(name11); // Иван Кузнецов
var name22 = getName("Вася");
console.log(name22); // Вася Иванов
//===============В качестве значения можно передавать результат другого выражения:
function defaultSurname() {
    return "Smith";
}
function getNamee(firstName, lastName) {
    if (lastName === void 0) { lastName = defaultSurname(); }
    return firstName + " " + lastName;
}
var name111 = getNamee("Tom");
console.log(name111); // Tom Smith
//Неопределенный набор параметров
function addNumbers(firstNumber) {
    var numberArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberArray[_i - 1] = arguments[_i];
    }
    var result = firstNumber;
    for (var i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}
var num1 = addNumbers(3, 7, 8);
console.log(num1); // 18
var num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2); // 31
function adds(x, y) {
    return x + y;
}
var result01 = adds(5, 4);
console.log(result01); // 9
var result02 = adds("5", "4");
console.log(result02); // 54
//Тип функции и стрелочные функции
//====Тип функции
function summ(x, y) {
    return x + y;
}
;
function subtract(a, b) {
    return a - b;
}
;
var op;
op = summ;
console.log(op(2, 4)); // 6
op = subtract;
console.log(op(6, 4)); // 2
//То есть переменная op представляет любую функцию, 
//которая принимает два числа и которая возвращает число
//========Функции обратного вызова
function mathOp(x, y, operation) {
    var result = operation(x, y);
    return result;
}
var operationFunc;
operationFunc = function (a, b) {
    return a + b;
};
console.log(mathOp(10, 20, operationFunc)); // 30 
operationFunc = function (a, b) {
    return a * b;
};
console.log(mathOp(10, 20, operationFunc)); // 200 
//Здесь в функции mathOp третий парметр как раз представляет функцию,
// которая принимает два параметра типа number и возвращает число. 
//Фактически тем самым мы можем передавать функции обратного вызова, например,
// при генерации событий, когда в ответ на некоторое действие срабатывает другая функция.
//========Стрелочные функции====
var suma = function (x, y) { return x + y; };
var result03 = suma(15, 35); // 50
console.log(result03);
//Тип параметров можно опускать:
var sumb = function (x, y) { return x + y; };
var result04 = sumb(15, 25); // 40
console.log(result04);
//Если стрелочная функция не требует параметров, то используются пустые круглые скобки. 
//Если передается только один параметр, то скобки можно опустить:
var square = function (x) { return x * x; };
var hello = function () { return "hello world"; };
console.log(square(5)); // 25
console.log(hello()); // hello world
//Если тело функции представляет множество выражений, а не просто одно выражение, 
//как в примере выше, тогда можно опять же заключить все выражения в фигурные скобки:
var sumc = function (x, y) {
    x *= 2; // 15*2
    return x + y;
};
var result05 = sumc(15, 35); // 65
console.log(result05);
//Стрелочные функции можно передавать в функцию вместо параметра, 
//который представляет собой функцию:
function mathOpr(x, y, operation) {
    var result06 = operation(x, y);
    return result06;
}
console.log(mathOp(10, 20, function (x, y) { return x + y; })); // 30 
console.log(mathOp(10, 20, function (x, y) { return x * y; })); // 200 
//# sourceMappingURL=index.js.map