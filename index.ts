/*//=================== #1===



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
  
//========И Н Т Е Р Ф Е Й СЫ====================
////implements - реализация интерфейса, extends - наследование
//Интерфейсы объектов
//============================================
//Интерфейс определяет свойства и методы, которые объект должен реализовать.
//Интерфейсы определяются с помощью ключевого слова interface.

interface IUser {
    id: number;
    name: string;
}

let employee: IUser = {
     
    id: 1, 
    name: "Dom"
}
console.log("id: " + employee.id);
console.log("name: " + employee.name);

//По сути employee - обычный объект за тем исключением, что он имеет тип IUser.
//employee реализует интерфейс IUser. 
//employee должен реализовать все свойства и методы интерфейса IUser
//=================================================================
//=================================================================
//Параметры методов и функций также могут представлять интерфейсы:

interface IUser1 {
    id: number;
    name: string;
}
let employeee: IUser1 = {
     
    id: 2, 
    name: "Alice"
}
 
function getEmployeeInfo(user: IUser1): void {
 
    console.log("id: " + user.id);
    console.log("name: " + user.name)
}
 
getEmployeeInfo(employeee);

//В этом случае аргумент, который передается в функцию, должен представлять 
//объект или класс, который реализует соответствующий интерфейс.
//=============================================================
//И также можно возвращать объекты интерфейса:

interface IUser2 {
    id: number;
    name: string;
}
function buildUser(userId: number, userName: string): IUser2 {
 
    return { id: userId, name: userName };
}
 
let newUser = buildUser(3, "Bill");
console.log("id: " + newUser.id);
console.log("name: " + newUser.name);


//==Необязательные свойства и свойства только для чтения==

//============================================================
//============================================================
//При определении интерфейса мы можем задать некоторые свойства как необязательные
// с помощью знака вопроса.

interface IUser3 {
    id: number;
    name: string;
    age?: number;//Свойство age помечено как необязательное, поэтому 
    			  //его можно не определять в объектах.
}
let employee3: IUser3 = {
     
    id: 1, 
    name: "Alicon",
    age: 23
}
let manager: IUser3 = {
     
    id: 2, 
    name: "Tom"
}

console.log('id:' + employee3.id );
console.log('age:' + employee3.age);

//интерфейс может содержать свойства только для чтения, значение которых нельзя изменять.
// с помощью ключевого слова readonly:

interface Point {
    readonly x: number;
    readonly y: number;
}
let p: Point = { x: 10, y: 20 };
console.log(p);
// p.x = 5; // Ошибка - свойство доступно только для чтения
//=============================================================
//.....................Определение методов..........................
//Кроме свойств интерфейсы могут определять функции:

interface IUser4 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
let employee4: IUser4 = {
     
    id: 1, 
    name: "Alice",
    getFullName : function (surname: string): string {
        return this.name + " " + surname;
    }
}
 
let fullName = employee4.getFullName("Tompson");
console.log(fullName); // Alice Tompson
//Oбъект, который реализует интерфейс, также обязан реализовать определенную в интерфейсе 
//функцию с тем же набором параметров и тем типом выходного результата. 
//В данном случае функция getFullName() в качестве параметра принимает строку 
//и возвращает строку, осуществляя конкатенацию имени и фамилии.

//.....................Интерфейсы классов................................
//Интерфейсы могут быть реализованы не только объектами, но и классами. 
//Для этого используется ключевое слово implements:

interface IUser5 {
    id: number;
    name: string;
    getFullName5(surname: string): string;
}

class User5 implements IUser5{
 
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
 
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }

    getFullName5(surname: string): string {
 
        return this.name + " " + surname;
    }
}
 
let dom = new User5(1, "Dom", 23);
console.log(dom.getFullName5("Simpson"));

//Класс User5 реализует интерфейс IUser5. В этом случае класс User5 обязан определить 
//все те же свойства и функции, которые есть в IUser5.
//===================================================
//При этом объект dom является как объектом User5, так и объектом IUser5:
/*let dom :IUser = new User(1, "Tom", 23);
//или
let dom :User = new User(1, "Tom", 23);*/
//==============================================================
//==============================================================
//......................Наследование интерфейсов.........................

interface IMovable {
 
    speed: number;
    move(): void;
}
interface ICar extends IMovable {
 
    fill(): void;
}
class Car implements ICar {
 
    speed: number;

    move(): void {
 
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
 
    fill(): void {
 
        console.log("Заправляем машину топливом");
    }
}
 
let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();

//После наследования интерфейс ICar будет также иметь все те свойства и функции, 
//которые определены в IMovable. И тогда, класс Car, реализующий интерфейс ICar, 
//должен будет реализовать также и свойства и методы интерфейса IMovable.

//............................Интерфейсы функций.............................
//Интерфейсы функций содержат определение типа функции. Затем они должны быть реализованы 
//объектом, который представляет функцию данного типа:

interface FullNameBuilder {
    (name: string, surname: string): string;
}
 
let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}
 
let fullName1 = simpleBuilder("Bob", "Simpson");
console.log(fullName1); // Mr. Bob Simpson

//Здесь определен интерфейс FullNameBuilder, который лишь содержит сигнатуру функции. 
//Далее определяется переменная simpleBuilder, которая имеет тип FullNameBuilder 
//и поэтому должна представлять функцию с данной сигнатурой.
//....................Интерфейсы массивов.....................
//Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как,
// например, к массивам

interface StringArray {
    [index: number]: string;
}
 
let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
 
let myPhone: string = phones[0];
console.log(myPhone);
//Здесь определен интерфейс StringArray, который содержит сигнатуру массива. 
//Эта сигнатура указывает, что объект, который реализует StringArray, 
//может индексироваться с помощью чисел (объекта типа number). И, кроме того,
// данный объект должен хранить объекты типа string, то есть строки.

//Выше индекс представлял тип number. 
//Но мы можем использовать для индексации и тип string:
interface Dictionary {
    [index: string]: string;
}
 
var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
 
console.log(colors["red"]);

//.............Гибридные интерфейсы..............
//Интерфейсы могут сочетать различные стили, могут применяться сразу как
// к определению объекта, так и к определению функции:


interface PersonInfo {
    (name: string, surname: string):void;
    fullName: string;
    password: string;
    authenticate(): void;
}

function personBuilder(): PersonInfo {
 
    let person = <PersonInfo>function (name: string, surname: string): void{
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
 
let tjom = personBuilder();
tjom("Tom", "Simpson");
tjom.password = "qwerty"; 
tjom.authenticate();

//Тип функции, определяемый в таком гибридном интерфейсе, как правило, 
//выступает в роли конструктора объекта. В данном случае такой конструктор имеет тип 
//(name: string, surname: string):void;.

//А функция, которая представляет данный интерфейс 
//(в данном случае - функция personBuilder), реализует эту функцию конструктора, 
//и также может использовать другие свойства и методы, которые были определены 
//в интерфейсе.
//==========================================================//
//==========================================================//
//==========================================================//
//===================П P E O Б Р А З О В А Н И Е===Т И П О В===================

//Поскольку объекты Employee в то же время являются и объектами User, 
//то при определении объектов мы можем написать так:
//let alice : User = new Employee("Microsoft", "Alice");
//везде, где в функцию в качестве параметра передается объект User 
//или возвращается из функции объект User, мы вместо объекта User можем 
//передавать объект Employee:

class User6 {
 
    name: string;
    constructor(userName: string) {
 
        this.name = userName;
    }
}

class Employee6 extends User6 {
 
    company: string;
    constructor(employeeCompany: string, userName: string) {
 
        super(userName);
        this.company = employeeCompany;
    }
}

function getUserName(user: User6): string {
    return user.name;
}
 
function userFactory(name: string): User6 {
    return new Employee6("не установлено", name);
}
 
let alicce: Employee6 = new Employee6("Microsoft", "Alice");
let userName = getUserName(alice);
console.log(userName);  // Alice
 
let tomm = userFactory("Tolker");
userName = getUserName(tomm);
console.log(userName);  // Tolker

//Здесь продемонстрированы восходящиие преобразования, то есть преобразования 
//от более конкретного типа к более общему - от призводного типа Employee к 
//базовому типу User.
//Они производятся неявно, и нам не надо писать какой-то дополнительный код.

//Но есть и другой тип преобразований - нисходящие или от более общего типа к более 
//конкретному. Например:
/*let alicce1: User = new Employee6("Microsoft", "Alice");
console.log(alicce1.company); // ошибка - в классе User нет свойства company*/

//Здесь переменная alice имеет тип User, однако в реальности эта переменная указывает 
//на объект типа Employee, так как для ее инициализации мы использовали конструктор 
//типа Employee, который устанавливает свойство company. Однако попытка вывести значение 
//свойства company у объекта alice завершится ошибкой, так как alice - это все таки 
//переменная типа User, в котором нет свойства company.

//Чтобы решить эту ситуацию, нам надо явно преобразовать объект alice к типу Employee:
/*let alicce: User = new Employee6("Microsoft", "Alica");
 
let aliEmployee: Employee6 = <Employee6>alicce; // преобразование к типу Employee
console.log(alicceEmployee.company);
 
// или так
console.log((<Employee6>alicce).company);*/

//Выражение <Тип> переменная позволяет преобразовать переменную к типу, 
//который идет в угловых скобках.
//=========================================
//========================================

//Другой способ осуществить явное преобразование типов представляет применение 
//оператора as:

/*let alicce: User = new Employee6("Microsoft", "Alice");
 
let aliceEmployee: Employee = alicce as Employee6; // преобразование к типу Employee
console.log(aliceEmployee.company);
 
// или так
console.log((alicce as Employee6).company);*/

//Все сказанное в отношении преобразования классов будет справедливо и для преобразования 
//интерфейсов. В то же время есть некоторые особенности. Пусть у нас будет интерфейс 
//IUser, никак не связанный с классами User и Employee и ими не реализуемый:

interface IUser7 {
    name: string;
}
class User7 {
    name: string;
    constructor(userName: string) {
        this.name = userName;
    }
}
class Employee7 extends User7 {
    company: string;
    constructor(employeeCompany: string, userName: string) {
        super(userName);
        this.company = employeeCompany;
    }
}
 
function getUserName7(user: IUser7): string {
    return user.name;
}

//Функция getUserName в качестве параметра принимает объект интерфейса IUser:

let alice7: User7 = new Employee7("Google", "Alicon");
console.log(getUserName7(alice7));
 
console.log(getUserName7({ name: "Tomma" }));
//console.log(getUserName7({ name: "Bob", company:"Microsoft" })); // ошибка

//Ни класс User, ни класс Employee не применяют интерфейс IUser, 
//однако мы можем их использовать, так как они имеют все те же свойства и методы, 
//что интерфейс IUser (в данном случае только свойство name).
//Объект { name: "Tom" } также является объектом интерфейса, так как он имеет свойство name. 
//В то же время при передаче объекта { name: "Bob", company:"Microsoft" } мы получим ошибку, 
//так как он уже расширяет возможности IUser, добавляя свойство company и напрямую интерфейсу 
//IUser не соответствует. Но даже в этом случае мы его можем вполне использовать, 
//применив преобразование типов:

console.log(getUserName7({ name: "Bob", company:"Microsoft" } as IUser7)); // Bob

//......................Оператор instanceOf............................
//С помощью оператора instanceOf можно проверить, принадлежит ли объект определенному классу:
let alice8: Employee7 = new Employee7("Google", "Alice");
if (alice7 instanceof User7) {
    console.log("Alice is a User");
}
else {
    console.log("Alice is not a User");
}

//=======================О Б О Б Щ Е Н И Я==============================================

//TypeScript является строго типизированным языком, однако иногда надо построить функционал так, 
//чтобы он мог использовать данные любых типов. В некоторых случаях мы могли бы использовать тип any:
function getId(id: any): any {
     
    return id;
}
let result3 = getId(5);
console.log(result3);

//Однако в этом случае мы не можем использовать результат функции как объект того типа, 
//который передан в функцию. Для нас это тип any. Если бы вместо числа 5 в функцию передавался 
//бы объект какого-нибудь класса, и нам потом надо было бы использовать этот объект, например, 
//вызывать у него функции, то это было бы проблематично. И чтобы конкретизировать возвращаемый тип, 
//мы можем использовать обобщения:

/*function getId<T>(id: T): T {
     
    return id;
}
*/

//С помощью выражения <T> мы указываем, что функция getId типизирована определенным типом T. 
//При выполнении функции вместо Т будет подставляться конкретный тип. Причем на этапе компиляции 
//конкретный тип не известен. И возвращать функция будет объект этого типа. Например:

function getId1<T>(id: T): T {
     
    return id;
}
let result4 = getId1<number>(10);//T будет испльзоваться тип number, 
                                //поэтому в функцию мы можем передать число.
console.log(result4);
let result5 = getId1<string>("abc");//T используется тип string, 
                                    //поэтому во втором случае можно передать строку.
console.log(result5);

// мы можем передать в функцию объекты различных типов, но при этом сохраняется строгая типизация, 
//каждый вариант обобщенной функции может принимать объекты только определенного типа.
//==========================================================================
//==========================================================================
// ===Подобным образом еще можно использовать обобщенные МАССИВЫ:

function getString<T>(arg: Array<T>): string {
    let result6 = "";
    for (let i = 0; i < arg.length; i++) {
        if (i > 0)
            result6 += ",";
        result6 += arg[i].toString();
    }
    console.log(result6);
    return result6;
}
 
let result6 = getString<number>( [1, 2, 34, 5]);
console.log(result6);

//В данном случае вне зависимости от типа данных, переданных в массиве, все его элементы 
//соединятся в одну общую строку.
//===================================================================
//===================================================================

//Обобщенные классы и интерфейсы
class User8<T> {
 
    private _id: T;
    constructor(id:T) {
 
        this._id=id;
    }
    getId(): T {
 
        return this._id;
    }
}
 
let tom7 = new User8<number>(3);
console.log(tom7.getId()); // возвращает number
 
let alice0 = new User8<string>("vsf");
console.log(alice0.getId()); // возвращает string

// если мы типизировали объект определенным типом, то сменить данный тип уже не получится. 
//То есть в следующем случае второе создание объекта не будет работать, так как объект 
//tom уже типизирован типом number:

/*let tom7 = new User8<number>(3);
console.log(tom.getId());
tom7 = new User8<string>("vsf"); // ошибка*/

interface IUser8<T> {
 
    getId(): T;
}
 
class User9<T> implements IUser8<T> {
 
    private _id: T;
    constructor(id:T) {
 
        this._id=id;
    }
    getId(): T {
 
        return this._id;
    }
}

//======Ограничения обобщений=====
//Иногда необходимо использовать обобщения, однако принимать любой тип в функцию или класс вместо 
//параметра T нежелательно. Например, пусть имеется следующий интерфейс и классы его реализующие:

interface IUser9 {
 
    getInfo():any;
}
class User10 implements IUser9 {
 
    _id: number;
    _name: string;
    constructor(id:number, name:string) {
 
        this._id = id;
        this._name = name;
    }
    getInfo() {
 
        console.log("id: " + this._id + "; name: " + this._name);
    }
}

class Employee10 extends User10 {
 
    _company: string;
    constructor(id: number, name: string, company: string) {
 
        super(id, name);
        this._company = company;
    }
 
    getInfo() {
 
        console.log("id: " + this._id + "; name: " + this._name+"; company:"+this._company);
    }
}

//Теперь пусть у нас будет класс, выводящий информацию о пользователях:
class UserInfo<T extends IUser9>{
 
    getUserInfo(user: T): void{
 
        user.getInfo();
    }
}

//В методе getUserInfo мы хотим использовать функцию getInfo(), предполагая, что в качестве
// параметра будет передаваться объект IUser. Но чтобы нельзя было передать объекты любого типа, 
//а только объекты IUser, устанавливается ограничения с помощью ключевого слова extends.

//И затем мы можем использовать класс, передавая подходящие объекты:

let tom8 = new User10(3, "Som");
let alice1 = new Employee10(4, "Alice", "Microsoft");
let userStore = new UserInfo();
userStore.getUserInfo(tom8);
userStore.getUserInfo(alice1);

//в данном случае также можно было бы ограничить параметр не интерфейсом IUser, 
//а классом User: class UserInfo<T extends User>
//=======================================================
//=======================================================
//.....................Ключевое слово new...................
//Чтобы создать новый объект в коде обобщений, нам надо указать, 
//что обобщенный тип T имеет конструктор. Это означает, что вместо параметра type:T 
//нам надо указать type: {new(): T;}. Например, следующий обобщенный интерфейс работать не будет:

/*function UserFactory<T>(): T {
    return new T(); // ошибка компиляции
}*/

function userFactory1<T>(type: { new (): T; }): T {
     
    return new type();
}
 
 
class User11 {
 
    constructor() {
        console.log("создан объект User");
    }
}
 
let user : User11 = userFactory1(User11);

//UserInfo<T extends IUser & IMan>

//===================М И К С И Н Ы===========================
//TypeScript  не позволяет использовать напрямую множественное наследование.
// Мы можем реализовать множество интерфейсов в классе, но унаследовать его можем только 
//от одного класса. Однако функциональность миксинов (mixins) частично позволяют унаследовать 
//свойства и методы сразу двух и более классов.

//Рассмотрим на примере. Пусть, у нас есть класс Animal, который представляет животное, 
//и класс Transport, который представляет транспортное средство. Оба эти класса имеют свой 
//уникальный функционал, который позволяет выполнять заложенные в них задачи. И также пусть у нас 
//будет класс, который представляет лошадь - с одной стороны, лошадь является животным и наследует 
//все черты, присущие животному, а с другой стороны, лошадь также можно использовать в качестве
// транспортного средства. То есть для создания подобного класса было бы неплохо унаследовать его
// сразу и от класса Animal, и от класса Transport. Решим эту задачу на языке TypeScript:

class Animal {
 
    feed():void {
        console.log("кормим животное");
    }
}

class Transport1 {
 
    speed: number=0;
    move(): void {
        if (this.speed == 0) {
            console.log("Стоим на месте");
        }
        else if (this.speed > 0) {
            console.log("Перемещаемся со скоростью " + this.speed + " км/ч");
        }
    }
}

class Horse implements Animal, Transport1 {
    speed: number=0;
    feed: () => void;
    move: () => void;
}
//специальнуя функция, которая перекопирует функционал из родительских классов в миксин:

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
 
applyMixins(Horse, [Animal, Transport1]);//Первым параметром идет класс-миксин, 
											//а второй параметр - массив применяемых классов.
 										
let pony: Horse = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();
 
 //таким образом мы все таки можем применить множественное наследование, но все же данный способ 
 //имеет ряд ограничений:

 /*--Миксин может унаследовать только те свойства и методы, которые непосредственно определены 
 в применяемом классе. Поэтому данный способ не будет работать, если применяемый класс, в свою очередь, 
 также наследует какие-то свойства и методы от другого класса.
===============================================================================
--Если родительские классы определяют метод с одним и тем же именем, то миксин наследует только 
тот метод, который копируется в него последним в функции applyMixins.*/
//=====================М O Д У Л И и П Р О С Т Р А Н С Т В А  И М Е Н===============================
//..........................Пространства имен.......................................
//=====================================================================================
/*Для организации больших программ предназначены пространства имен.
 Пространства имен содержат группу классов, интерфейсов, функций, других пространств имен,
 которые могут использоваться в некотором общем контексте.*/

 namespace Personnel {//В данном случае пространство имен называется Personnel
 
    export interface IUser{// содержит интерфейс  IUser
        displayInfo():any;
    }
     
    export class Employee {
        constructor(public name: string){// содержит класс Employee
        }
    }
     
    export function work(emp: Employee) : void{
        console.log(emp.name, "is working");
    }
     
    export let defaultUser= { name: "Kate" }
}
 
let tom11 = new Personnel.Employee("Tom")
Personnel.work(tom11);                    // Tom is working
 
console.log(Personnel.defaultUser.name);    // Kate

 /*Чтобы типы и объекты, определенные в пространстве имен, были видны извне, 
 они определяются с ключевым словом export. 
 В этом случае во вне мы сможем использовать класс Employee:*/

 namespace Personnel {
    export class Employee1 {
     
        constructor(public name: string){
        }
    }
}
 
let alice12 = new Personnel.Employee("Alice");
console.log(alice12.name);    // Alice

//...............Пространство имен в отдельном файле.......................
/*Нередко пространства имен определяются в отдельных файлах. 
Например, определим файл personnel.ts со следующим кодом:*/

namespace Personnel {
    export class Employee2 {
     
        constructor(public name: string){
        }
    }
    export class Manager {
     
        constructor(public name: string){
        }
    }
}
//И в той же папке определим главный файл приложения app.ts:
///// <reference path="personnel.ts" />
 
let tom12 = new Personnel.Employee2("Fom")
console.log(tom12.name);
 
let sam = new Personnel.Manager("Sam");
console.log(sam.name);

/*С помощью директивы /// <reference path="personnel.ts" /> подключается файл personnel.ts.

Далее нам надо объединить оба файла в один файл, который затем можно подключать на веб-страницу.
 Для этого при компиляции указывается опция:

1
--outFile target.js sourse1.ts source2.ts source3.ts ...
Опции outFile в качестве первого параметра передается название файла, который будет генерироваться. 
А последующие параметры - файлы с кодом TypeScript, которые будут компилироваться.

То есть в данном случае нам надо выполнить в консоли команду

tsc --outFile app.js app.ts personnel.ts*/

//..............Вложенные пространства имен......................
namespace Data{
    export namespace Personnel {
        export class Employee {
         
            constructor(public name: string){
            }
        }
    }
    export namespace Clients {
        export class VipClient {
         
            constructor(public name: string){
            }
        }
    }
}
 
let tom13 = new Data.Personnel.Employee("Tony")
console.log(tom13.name);
let sam1 = new Data.Clients.VipClient("Sat");
console.log(sam1.name);

//вложенные пространства имен определяются со словом export.
// Соответственно при обращении к типам надо использовать все пространства имен.

//...............Псевдонимы...................................

/*Возможно, нам приходится создавать множество объектов Data.Personnel.Employee, 
но каждый раз набирать полное имя класса с учетом пространств имен, вероятно, не всем понравиться, 
особенно когда модули имеют глубокую вложенность по принципу матрешки. 
Чтобы сократить объем кода, мы можем использовать псевдонимы, 
задаваемые с помощью ключевого слова import. Например:*/
namespace Data{
    export namespace Personnel {
        export class Employee2 {
         
            constructor(public name: string){
            }
        }
    }
}
 
import employee2 = Data.Personnel.Employee2;
let tom14 = new employee2("Tom14")
console.log(tom14.name);
//После объявления псевдонима employee будет рассматриваться как 
//краткое имя для Data.Personnel.Employee.
//==============================================================================
//==============================================================================
//.......................Модули................................................
//=============================================================================
//=============================================================================
//Модули являются концепцией, привнесенной стандартом ES2015, однако в современных браузерах 
//нативная поддержка модулей еще не реализована.
/*Модули в некотором смысле похожи на пространства имен: 
они могут заключать различные классы, интерфейсы, функции, объекты. 
Модули выделяются в отдельные файлы, что позволяет сделать код приложения 
более ясным и чистым, и в то же время позволяет использовать 
модули в других приложения. При этом модули подключаются в приложение не 
посредством тега <script>, а с помощью загрузчика модулей.*/
//===========================================================================
//===========================================================================
/*Все модули имеют определенный формат и относятся к определенной системе. 
Всего мы можем использовать 5 различных систем модулей:

-AMD (Asynchronys Module Defenition)

-CommonJS

-UMD (Universal Module Defenition)

-System

-ES 2015
==================================================================================================
==================================================================================================
При компиляции из командной строки или терминала для установки модуля необходимо передать 
соответствующее значение параметру --module:

tsc --module commonjs main.ts // для CommonJS
tsc --module amd main.ts // для AMD
tsc --module umd main.ts // для UMD
tsc --module system main.ts // для SytemJS
=====================================================================================
=====================================================================================
А для загрузки модулей можно выбрать один из следующих загрузчиков:

RequireJS: RequireJS использует синтаксис, известный как асинхронное определение модуля 
или asynchronous module definition(AMD)

Browserify: использует синтаксис CommonJS

SystemJS: универсальный загрузчик, может применяться для модулей любого типа
 ==========================================================================
 ==========================================================================
 ......................Определение модуля и экспорт.......................
 Пусть у нас будет в проекте файл devices.ts:
 export interface Device{
    name: string;
}
     
export class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
export function Call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}
Чтобы классы, интерфейсы, функции были видны извне, они определяются с ключевым словом export.
======================================================
Но мы могли бы и по другому экспортировать все сущности:
interface Device{
    name: string;
}
     
class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
function Call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}
export {Device, Phone, Call as Devices};
При экспорте можно определить псевдоним для типа с помощью ключевого слова as.
 Это имя затем может применяться при импорта класса.
 .............................Импорт................................
 Чтобы задействовать модуль в приложении, его надо импортировать с помощью оператора import.
  Например, импортируем класс Phone и функцию Call из выше определенного модуля devices.ts:
  ===========================================================================================
  import {Phone, Call} from "./devices";После слова import определяется набор импортируемых типов - класов,
  ...................................... интерфейсов, функций, объектов.после слова from указывается путь
  ....................................... к модулю. (devices)
let iphone: Phone = new Phone("iPhone X");
Call(iphone);
 с помощью оператора as можно указать псевдоним для типа:
 ========================
 import {Phone, Call as makeCall} from "./devices";
let iphone: Phone = new Phone("iPhone X");
makeCall(iphone);
===========================
//Можно импортировать сразу весь модуль:
/*import * as dev from "./devise";
let iphone: devPhone = new dev.Phone("iPhone X");
dev.Call(iphone);
В данном случае модуль импортируется через псевдоним "dev". 
И, используя этот псевдоним, мы можем обращаться к расположенным в этом модуле типам.
......................Экспорт по умолчанию......................
Параметры экспорта по умолчанию позволяют определить тип, который будет импортироваться из 
модуля по умолчанию. К примеру, добавим новый модуль smartwatch.ts:
export default class SmartWatch{
     
    model:string;
}
Ключевое слово default позволяет установить класс SmartWatch в качестве типа по умолчанию.
 И затем мы можем импортировать его следующим образом:
 import SmartWatch from "./smartwatch";
let iwatch: SmartWatch = new SmartWatch();
*/
//=========================================================================
//=========================================================================
//=========================================================================
//=========================================================================
//..................Загрузка модулей.......................................
/* для загрузки модулей необходимо применять специальные инструменты, которые называются загрузчиками. 
В этом теме рассмотрим загрузку модулей с помощью загрузчика SystemJS.
загрузка сервера производится через AJAX, поэтому такое приложение TypeScript должно быть размещено 
на веб-сервере. То есть у нас не получится просто кинуть страницу в веб-браузер, как, например, 
это было в первых темах. Поэтому прежде всего надо определиться с веб-сервером.
 Веб-сервер может быть любым. В данном случае воспользуемся самым демократичным вариантом - Node.js.
 Для этого нам будет достаточно установить на свой компьютер Node.js.
 Вначале определим папку на жестком диске, где будет располагаться проект. 
 Допустим, это будет папка C:\typescript. И первым делом определим в ней файл сервера.
 Пусть он будет называться server.js и будет иметь следующий код:
 var http = require("http");
var fs = require("fs");
  
http.createServer(function(request, response){
     
    // получаем путь после слеша
    var filePath = request.url.substr(1);
    // установка пути по умолчанию
    if(filePath == "") filePath ="index.html";
    fs.readFile(filePath, function(error, data){
                  
        if(error){  // если файл не найден
            response.statusCode = 404;
            response.end("Not Found");
        }   
        else{
            response.end(data);
        }
        return;
    })
}).listen(3000, function(){
    console.log("Сервер запущен по адресу http://localhost:3000/");
});
Это самый примитивный сервер, который отдает пользователю статические файлы. 
Для создания сервера применяется функция http.createServer, а для считывания и 
отправки файлов - функция fs.readFile(). Сервер будет запускаться по адресу
 http://localhost:3000/. Для целей тестирования в прицнипе больше ничего 
 не нужно. Но опять же вместо node.js это может быть любая другая технология 
 сервера - php, asp.net, python и т.д.

Определим в проекте каталог app, где будут собственно распложены файлы TypeScript.
 Добавим в этого каталог файл devices.ts, который будет представлять простейший модуль:

 export interface Device{
	name: string;
}
	
export class Phone implements Device {
	name: string;
	constructor(n:string){
		this.name = n;
	}
}
	
export function Call(phone: Phone) : void{
	console.log("Make a call by", phone.name);
}

И также в папку app добавим главный файл приложения - app.ts со следующим кодом:

import {Phone, Call as makeCall} from "./devices";
let iphone: Phone = new Phone("iPhone X");
makeCall(iphone);

В этом файле загружается модуль devices и используются определенные в этом модуле типы.

Теперь в корневой папке проекта определим веб-страницу нашего приложения - файл index.html:

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Модули в TypeScript</title>
</head>
<body>
    <h1>Модули в TypeScript</h1>
 
    <div id="content"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.21.0/system.js"></script>
	<script>
		SystemJS.config({
            baseURL: "app",
            packages: {
                "/": { defaultExtension: "js" }
            }
        });
		System.import("app.js");
	</script>
</body>
</html>

Прежде всего из CDN в низу страницы загружается SystemJS. Далее производится 
конфигурация загрузчика с помощью функции SystemJS.config(), чтобы он использовал наши файлы. 
Прежде всего с помощью параметра baseURL: "app", что файлы будут располагаться в папке app
 (где у нас сейчас находятся файлы typescript).

Поскольку в итоге мы будем компилировать файлы на TypeScript в JavaScript 
(так как только javascript поддерживается браузером), то соответственно в данном случае 
мы будем работать только с файлами js. Для этого определяем параметр packages: 
{"/": { defaultExtension: "js" }}. "defaultExtension" указывает на расширение, 
которое будет добавляться к модулям.

После этого импортируется главный файл приложения - в нашем случае app.js 
(в который компилируется app.ts): System.import("app.js").

В итоге весь проект будет выглядеть следующим образом:
falder ts
	falder app
		/*app.js
		/*app.ts
		/*devise.js
		/*devise.ts
	<>index.html
	/*server.js

	Теперь перейдем в консоли к каталогу нашего проекта и скомилируем файлы ts в js 
	с помощью команды:

tsc app/app.ts
.................

После этого в одном каталоге с ts-файлами появятся скомпилированные js-файлы.
 Затем запустим сервер с помощью команды

node server.js
................

Стоит отметить, что в реальном приложении компиляции из TS в JS,
 а также ряд сопутствующих моментов, как сборка, минификация и т.д., как правило,
  делается автоматически при старте приложения или при изменениях в файле. 
  Для этого, как правило, используются различные иструменты типа gulp, webpack и другие. 
  В данном же случае мы рассмотриваем именно простейший пример, акцентируя внимание именно 
  на загрузке модулей.

После запуска сервера мы можем перейти в браузере по адресу 
http://localhost:3000, нам отобразится страница, а в консоли браузера мы
сможем увидеть результат работы нашего кода на typescript.
смотри папку "ts"
========================З А Г О Л О В О Ч Н Ы Е ==Ф А Й Л Ы=======================
.............................Работа с заголовочными файлами.....................
===================================================================================
Для установки связи с внешними файлами скриптов javascript в TS служат декларативные 
или заголовочные файлы. Это файлы с расширением .d.ts, они описывают синтаксис и структуру 
функций и свойств, которые могут использоваться в программе, не предоставляя при этом 
конкретной реализации. Их действие во многом похоже на работу файлов с расширением .h в
 языках C/C++. Они выполняют своего рода роль оберток над библиотеками JavaScript.

Рассмотрим, как мы можем использовать заголовочные файлы. Иногда в программах 
на javascript используются глобальные переменные, которые должны быть видны для всех 
функций приложения. Например, пусть на веб-странице (или во внешнем подключаемом файле 
javascript) в коде js определена переменная:

<!DOCTYPE html>
 
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>TypeScript HTML App</title>
</head>
<body>
    <h1>TypeScript HTML App</h1>
 
    <div id="content"></div>
    <script>
        var globalVar = "hello TS";
    </script>
    <script src="app.js"></script>
</body>
</html>

И пусть мы хотим получить к этой переменной доступ в коде TypeScript в файле app.ts:
class Utility {
    static displayGlobalVar() {
         
        console.log(globalVar);
    }
}
 
window.onload = () => {
     
    Utility.displayGlobalVar();
    
};

При запуске приложения компилятор TS не сможет скомпилировать программу, так как для кода 
TS глобальная переменная пока не существует. В этом случае нам надо подключать определение 
глобальной переменной с помощью декларативных файлов. Для этого добавим в проект новый файл, 
который назовем globals.d.ts и который будет иметь следующее содержимое:
..........................................
 declare var globalVar: string;
..........................................

С помощью ключевого слова declare в программу на TS подключается определение глобальной переменной.

И также изменим файл app.ts:

/// <reference path="globals.d.ts" />
 
class Utility {
    static displayGlobalVar() {
        console.log(globalVar);
    }
}
window.onload = () => {
    Utility.displayGlobalVar();
};

С помощью директивы reference в начале файла подключается заголовочный файл globals.d.ts. 
С помощью параметра path указывается путь к заголовочному файлу.

То есть у нас получится следующая структура проекта:

app.ts

globals.d.ts

index.html
===========================================
========================================
Подобным образом можно подключить внешние функции. Например, пусть на веб-странице в коде js 
объявлена такая функция:

var globalVar = "hello TS";
function display() {
 
    console.log("globalVar: " + globalVar);
}

В этом случае подключение в файле globals.d.ts выглядело бы так:
declare var globalVar: string;
declare function display(): void;

А в коде TS напрямую можно было бы использовать функцию display:

/// <reference path="globals.d.ts" />
class Utility {
    static displayGlobalVar() {
        //console.log(globalVar);
        display();
    }
}

Однако может возникнуть сложность с подключением более сложных объектов. 
Например, пусть есть такой объект javascript:
...............................................
var points = [{ X: 10, Y: 34 },
              { X: 24, Y: 65 },
               { X: 89, Y: 12 }];
..................................................
Для данного массива объектов в файле globals.d.ts мы можем определить соответствующий 
отдельному объекту интерфейс и подключить массив объектов некоторого интерфейса, который 
содержит два свойства X и Y:
............................
interface IPoint {
    X: number;
    Y: number;
}
declare var points: IPoint[];
..............................
И в TS мы сможем использовать этот массив:
/// <reference path="globals.d.ts" />
 
class Utility {
    static displayGlobalVar() {
         
        for (var i = 0; i < points.length; i++)
            console.log("Точка с координатами X=" + points[i].X + " Y=" + points[i].Y);
    }
}
 
window.onload = () => {
     
    Utility.displayGlobalVar();
    
};

смотри папку "global"

=================Заголовочные файлы для популярных библиотек=========
 в сообществе TypeScript возникла идея создать общий репозиторий для 
 подобных файлов, чтобы не надо было заново определять свои файлы, а можно бы 
 было взять уже готовые. Этот репозиторий расположен на гитхабе:
 https://github.com/DefinitelyTyped/DefinitelyTyped/
 ==========================================================
 Во-первых, создадим в проекте каталог Scripts, который будет предназначен для 
 хранения библиотек на javascript. Например, мы хотим использовать библиотеку 
 jquery. На данный момент это версия jquery 3.3.1.
 Создадим в проекте каталог @types, а в нем - подкаталог jquery. То есть в итоге проект 
 будет выглядеть следующим образом:
 -folder TypeScr
 	-folder @types
 	-folder jquery
 -/*app.ts
 -<> index.html

В каталог @types/jquery поместим заголовочный файл для jquery - index.d.ts,
 который можно найти по адресу 
 https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/
 jquery/index.d.ts.

В корневой папке проекта определим следующую веб-страницу index.html:
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>TypeScript HTML App</title>
</head>
<body>
    <h1>TypeScript HTML App</h1>
  
    <div id="content"></div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
================================================================
===================================================================

Здесь только подключается библиотека jquery из cdn, а также файл нашего 
приложения - app.js.

Далее в корневой папке проекта определим следующий файла app.ts:

.......................................................................
	/// <reference path="@types/jquery/index.d.ts" />
 
$(document).ready(() => {
    $("#content").html("<h1>Привет мир</h1>");
});
.......................................................................
В данном случае мы задействуем событие document.ready, которое определено в jquery 
и которое срабатывает при загрузке документа. И далее с помощью лямбда-выражения
которое определяет функцию обратного вызова, с помощью знакомого многим синтаксиса 
jquery на веб-страницу добавляется новый элемент.

Также мы могли бы использовать сокращенное определение функции:
...........................................................
$(() => {
    $("#content").html("<h1>Привет мир</h1>");
});
...........................................................

В итоге при запуске веб-страницы index.html сработает код из файла app.ts
==========================================================================
Для примера еще обработаем событие нажатия кнопки.
 Допустим, в html-коде страницы есть такая кнопка:
 ...............................................
 <button id="alertBtn">Жми</button>
 ...............................................
 В коде на TS мы могли бы так обработать нажатия на эту кнопку:
 ...................................................................
 $(() => {
    $("#alertBtn").click((e) => { $("#content").html("<h2>Привет мир</h2>"); });
});
 ...................................................................
 Обработчики событий, например, click в качестве параметра также
  принимают лямбда-выражение, которое определяет набор инструкции,
   выполняемых при нажатии.
*/


