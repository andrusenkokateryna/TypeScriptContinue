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
//===================ПPEOБРАЗОВАНИЕ ТИПОВ===================

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
