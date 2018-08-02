//=================== #1

let array = ['hello',' ','world!'];
for(let val of array){
	document.write(val);
}

let a;
a=1;
console.log(a);

let oneString="1"

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//===========TUPLES===============
// определение кортежа - кортеж состоит из двух элементов - строки и числа
let userInfo: [string, number];
// инициализация кортежа
userInfo = ["Tom", 28];
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
//userInfo = [28, "Tom"]; // Ошибка
 
// использование кортежа
console.log(userInfo[1]); // 28
userInfo[1] = 37;

//====================Enum=======

enum Color{Red=1,Green, Blue};
	let colorName=Color[2];
	console.log(colorName);

	function warnUser(): void {
    alert("This is my warning message");
}

let someVar: any = "hello";
console.log(someVar);   // сейчас someVar - это string
someVar = 20; 
console.log(someVar);   // сейчас someVar - это number

//===========КОМПЛЕКСНЫЕ ОБЪЕКТЫ====================
let person = {name:"Tom", age:23};
console.log(person.name);
// альтернативный вариант получения свойства
console.log(person["name"]);

//===============Union==========
//ОБЪДИНЕНИЕ ТИПОВ

let id : number | string;
id = "1345dgg5";
console.log(id); // 1345dgg5
id = 234;
console.log(id);  // 234

//==========typeof=====
let sum: any;
sum = 1200;
 
if (typeof sum === "number") {
     
    let result: number = sum / 12;
    console.log(result);
}
else{
    console.log("invalid operation");
}

//=====Псевдонимы типов
type stringOrNumberType = number | string;
let sums: stringOrNumberType = 36.6;
if (typeof sum === "number") {
    console.log(sums / 6);
}

//=====assertion=====приведение к типу====

let someValue: any = "this is a string";
 
let strLength: number = (<string>someValue).length

console.log(strLength);//16

//=================

let someUnionValue: string | number = "hello work";
strLength = (<string>someUnionValue).length;
console.log(strLength); // 10

let someValuee: any = "this is a string";
 
let strLengthh: number = (someValue as string).length;
console.log(strLengthh);//16
let someUnionValuee: string | number = "hello work";
strLength = (someUnionValue as string).length;
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
function add(a: number, b: number): number {
    return a + b;
}
// вызов функции
let result1 = add(1, 2);
console.log(result1);
//////////////////////////////////////
let s = function (a: number, b: number) : number {
    return a + b;
}
let result = s(3, 2);
console.log(result);
////////////////////////////////////////
let koef: number = 1.5;
 
function addd(a: number){
    let result3 = a *koef;
    console.log(result3);
}
 
addd(20); // 30
addd(10); //15

//Необязательные параметры
function getNames(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
  
let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася

//Параметры по умолчанию
function getName(firstName: string, lastName: string="Иванов") {
     
    return firstName + " " + lastName;
}
 
let name11 = getName("Иван", "Кузнецов");
console.log(name11); // Иван Кузнецов
let name22 = getName("Вася");
console.log(name22); // Вася Иванов


//===============В качестве значения можно передавать результат другого выражения:
function defaultSurname(): string{
    return "Smith";
}
 
function getNamee(firstName: string, lastName: string=defaultSurname()) {
     
    return firstName + " " + lastName;
}
 
let name111 = getNamee("Tom");
console.log(name111); // Tom Smith

//Неопределенный набор параметров

function addNumbers(firstNumber: number, ...numberArray: number[]): number {
      
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result+= numberArray[i];
    }
    return result;
}
  
let num1 = addNumbers(3, 7, 8);
console.log(num1); // 18
  
let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2); // 31

//Перегрузка функций===================================
//Первая версия функции add принимает две строки и возвращает строку, вторая 
//версия принимает два числа и возвращает число. Общей для них будет функция, 
//которая принимает параметры типа any и возвращает результат также типа any.

function adds(x: string, y: string): string;
function adds(x: number, y: number): number;
function adds(x: any, y: any): any {
    return x + y;
}
 
let result01 = adds(5, 4);
console.log(result01);   // 9
let result02 = adds("5", "4");
console.log(result02);   // 54

//Тип функции и стрелочные функции

//====Тип функции

function summ (x: number, y: number): number {
    return x + y;
};
function subtract (a: number, b: number): number {
    return a - b;
};
 
let op: (x:number, y:number) => number;
 
op = summ;
console.log(op(2, 4));  // 6
 
op = subtract;
console.log(op(6, 4));  // 2

//То есть переменная op представляет любую функцию, 
//которая принимает два числа и которая возвращает число

//========Функции обратного вызова

function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result = operation(x, y);
    return result;
}
let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
    return a + b;
}
console.log(mathOp(10, 20, operationFunc)); // 30 
 
operationFunc = function (a: number, b: number): number {
    return a * b;
}
console.log(mathOp(10, 20, operationFunc)); // 200 
//Здесь в функции mathOp третий парметр как раз представляет функцию,
// которая принимает два параметра типа number и возвращает число. 
//Фактически тем самым мы можем передавать функции обратного вызова, например,
// при генерации событий, когда в ответ на некоторое действие срабатывает другая функция.

//========Стрелочные функции====

let suma = (x: number, y: number) => x + y;
 
let result03 = suma(15, 35); // 50
console.log(result03);

//Тип параметров можно опускать:

let sumb = (x, y) => x + y;
  
let result04 = sumb(15, 25); // 40
console.log(result04);

//Если стрелочная функция не требует параметров, то используются пустые круглые скобки. 
//Если передается только один параметр, то скобки можно опустить:

let square = x => x * x;
let hello = () => "hello world"
  
console.log(square(5)); // 25
console.log(hello());   // hello world

//Если тело функции представляет множество выражений, а не просто одно выражение, 
//как в примере выше, тогда можно опять же заключить все выражения в фигурные скобки:

let sumc = (x: number, y: number) => {
    x *= 2;// 15*2
    return x + y;
};
 
let result05 = sumc(15, 35); // 65
console.log(result05);

//Стрелочные функции можно передавать в функцию вместо параметра, 
//который представляет собой функцию:

function mathOpr(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result06 = operation(x, y);
    return result06;
}
console.log(mathOp(10, 20, (x,y)=>x+y)); // 30 
console.log(mathOp(10, 20, (x, y) => x * y)); // 200 