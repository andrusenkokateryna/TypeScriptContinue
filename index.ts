//=================== #1====

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

//====================Enum===#2====

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

//=====assertion=====приведение к типу====#4==

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

//=========ПЕРЕМЕННЫЕ====#1.1===================
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

//=========FUNCTION======#5====================

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

//====Тип функции==#6

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

//========Стрелочные функции===#7=

let suma = (x: number, y: number) => x + y;
 
let result03 = suma(15, 35); // 50
console.log(result03);

/*//Тип параметров можно опускать:

let sumb = (x, y) => x + y;
  
let result04 = sumb(15, 25); // 40
console.log(result04);
*/
//Если стрелочная функция не требует параметров, то используются пустые круглые скобки. 
//Если передается только один параметр, то скобки можно опустить:

/*let square = x => x * x;
let hello = () => "hello world"
  
console.log(square(5)); // 25
console.log(hello());   // hello world
*/
//Если тело функции представляет множество выражений, а не просто одно выражение, 
//как в примере выше, тогда можно опять же заключить все выражения в фигурные скобки:

let sumc = (x: number, y: number) => {
    x *= 2;// 15*2
    return x + y;//30+35
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


//===========ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ==========
//..........................Классы....#8.............

/*class User {
 
    id1: number;
    name1: string;
    getInfo(): string {
        return "id:" + this.id1 + " name:" + this.name1;
    }
}

let tomm: User = new User();
tomm.id1 = 1;
tomm.name1 = "Tom";
console.log(tomm.getInfo());
 
let aliCe: User = new User();
aliCe.id1 = 2;
aliCe.name1 = "Alice";
console.log(aliCe.getInfo());*/
/////////////////////////////////////////////////////////////
//специальные функции - конструкторы, которые определяются с помощью ключевого слова 
//constructor. Конструкторы выполняют начальную инициализацию объекта. 
class Users {
 
    id: number;
    name: string;
    constructor(userId: number, userName: string) {
 
        this.id = userId;
        this.name = userName;
    }
    getInfo(): string {
        return "id:" + this.id + " name:" + this.name;
    }
}
 
let tom: Users = new Users(1, "Tom");
console.log(tom.getInfo());
tom.id = 4;
 
let alice: Users = new Users(2, "Alice");
console.log(alice.getInfo());

//Статические свойства и функции====#9==============

//Кроме обычных свойств и функций класс может иметь статические. Для использования 
//статических функций и свойств не надо создавать объект класса.

//Статические функции и свойства определяются с помощью ключевого слова static:

class Operation {
 
    static PI: number = 3.14;
 
    static getSquare(radius: number): number {
 
        return (Operation.PI) * radius * radius;
    }
}
let result06 = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + result06);
let result2 = Operation.PI * 30 * 30;
console.log(result2);   // 2826


//==============Модификаторы доступа===#10==========
// В TypeScript три модификатора: public, protected и private.
/*class User {
     
    name: string;
    year: number;
}
Будет эквивалентно:
class User {
     
    public name: string;
    public year: number;
}
*/

//private

class User2 {
     
    private _name: string;
    private _year: number;
 
    constructor(name: string, age: number) {
 
        this._name = name;
        this._year = this.setYear(age);
    }
    public displayYear(): void {
        console.log("Год рождения: " + this._year);
    }
 
    public displayName(): void {
        console.log("name: " + this._name);
    }
    private setYear(age: number): number {
 
        return new Date().getFullYear() - age;
    }
}
 
let toms = new User2("Tom", 24);
toms.displayName();
toms.displayYear();
// console.log(toms._name); // нельзя обратиться, так как _name - private
// toms.setYear(45); // нельзя обратиться, так как функция - private

//protected
//Модификатор protected во многом аналогичен private - свойства и методы 
//с данным модификатором не видны из вне, но к ним можно 
//обратиться из классов-наследников:

class Userr {
    private name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public displayInfo(): void {
 
        console.log("name: " + this.name + "; age: " + this.age);
    }
}

class Employee extends Userr {
 
    private company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    }
}

//Определение свойств через конструктор==#11
class User3 {
 
    constructor(private name: string, private age: number) {
    }
    public displayInfo(): void {
 
        console.log("name: " + this.name + "; age: " + this.age);
    }
}

function alerto():void{
	alert('hello')//не выведется
}

//alerto()// сработает

//==Методы доступа и readonly-свойства=#12==
//Использование аксессоров или методов доступа позволяет управлять тем, как значение 
//устанавливается и как оно возвращается. В частности, мы можем написать  класс 
//с использованием акссессоров следующим образом:
/*class Usero {
 
    private _name01: string

    public get name(): string {
        return this._name01;
    }
 
    public set name(n: string) {
        this._name01 = n;
    }
}
 
let tomos = new Usero();
tomos.name = "Rom";   // срабатывает set-метод
console.log(tomos.name);  // срабатывает get-метод
*/
//Свойства только для чтения
//Ключевое слово readonly позволяет определить свойства, 
//которые доступны только для чтения:

class Userq {
 
    readonly id: number;
    name: string;
    constructor(userId: number, userName: string) {
  
        this.id = userId;
        this.name = userName;
    }
}
 
let tome: Userq = new Userq(2, "Tod");
console.log(tome.id, tome.name);
//tome.id=34;    // Ошибка - так как id - только для чтения

//Подобное определение свойств для чтения можно сократить следующим образом:

/*class User {
 
    name: string;
    constructor(readonly id: number, userName: string) {
        this.name = userName;
    }
}*/

//====Наследование. Абстрактные классы=====#13

//Одним из ключевых моментов объектно-ориентированной парадигмы является наследование.
// В TypeScript наследование реализуется с помощью ключевого слова extends (как в Java):
//Если подкласс определяет свой конструктор, то в нем должен быть вызван конструктор 
//базового класса с помощью ключевого слова super:

class User21 {
 
    name: string;
    constructor(userName: string) {
 
        this.name = userName;
    }
    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}
 
class Employee21 extends User21 {
 
    company: string;
     constructor(userName: string, empCompany: string) {
  
        super(userName);
        this.company = empCompany;
    }
    work(): void {
        console.log(this.name + " работает в компании " + this.company);
    }
}
let bill: Employee21 = new Employee21("Bill","Microsoft");
bill.getInfo();
bill.work();
console.log(bill)



class Useru {
    name: string;
}
  
class Employeeu extends Useru {
  
    company: string;
    constructor(empsCompany: string='Apple') {
        super();    // вызов конструктора базового класса
        this.company = empsCompany;
    }
    add():void {
    	console.log(this.company +' ' +"and this good")
    }
}

let max:Employeeu=new Employeeu();
max.add();

//Переопределение методов==#14
//Также производные классы могут переопределять методы базовых классов:

/*class User4 {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}

class Employe extends User4 {
  
    company: string;
    constructor(userName: string, emCompany: string) {
  
        super(userName);
        this.company = emCompany;
    }
    getInfo(): void {
        console.log("Имя: " + this.name);
        console.log("Работает в компании: " + this.company);
    }
}
let billi: Employe = new Employe("Billy", "Apple");
bill.getInfo();*/

//можем с помощью ключевого слова super вызвать реализацию  метода getInfo() 
//из базового класса:

class User4 {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}

class User {
  
    name: string;
    constructor(userName: string) {
  
        this.name = userName;
    }
    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}
  
class Employe extends User4 {
  
    company: string;
    constructor(userName: string, empCompany: string) {
  
        super(userName);
        this.company = empCompany;
    }
    getInfo(): void {
        super.getInfo()
        console.log("Работает в компании: " + this.company);
    }
}


//===Абстрактные классы===#15==

//Абстрактные классы представляют классы, определенные с ключевым словом abstract.
//не можем создать напрямую объект абстрактного класса, используя его конструктор.

abstract class Figur {
}
// let someFigure = new Figur()    // Ошибка!

//абстрактные классы описывают сущности, которые в реальности не имеют
// конкретного воплощения.
//общее название с общим функционалом(деревья: липа, дуб, ясень)
//В данном случае абстрактный класс определяет метод getArea(), который вычисляет 
//площадь фигуры. Класс прямоугольника определяет свою реализацию для этого метода.

//Однако в данном случае метод getArea в базовом классе не выполняет никакой 
//полезной работы, так как у абстрактной фигуры не может быть площади. 
//И в этом случае подобный метод лучще определить как абстрактный:
abstract class Figure {
     getArea(): void{
        console.log("Not Implemented ")
    }
}
class Rectangle extends Figure{
     
    constructor(public width: number, public height: number){ 
        super();
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea();   // area = 600
let someFigure1: Figure = new Rectangle(30, 30)
someFigure1.getArea();   // area = 900

//Если класс содержит абстрактные методы, то такой класс должен быть абстрактным. 
//Кроме того, при наследовании производные классы обязаны реализовать 
//все абстрактные методы.
  
