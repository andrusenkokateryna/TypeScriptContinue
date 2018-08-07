"use strict";
/*//=================== #1===
import * as dev from "./devise";
let iphone: devPhone = new dev.Phone("iPhone X");
dev.Call(iphone);*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//====================Enum===#2====
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
//=====assertion=====приведение к типу====#4==
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
//====Тип функции==#6
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
//========Стрелочные функции===#7=
var suma = function (x, y) { return x + y; };
var result03 = suma(15, 35); // 50
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
var sumc = function (x, y) {
    x *= 2; // 15*2
    return x + y; //30+35
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
var Users = /** @class */ (function () {
    function Users(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    Users.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return Users;
}());
var tom = new Users(1, "Tom");
console.log(tom.getInfo());
tom.id = 4;
var alice = new Users(2, "Alice");
console.log(alice.getInfo());
//Статические свойства и функции====#9==============
//Кроме обычных свойств и функций класс может иметь статические. Для использования 
//статических функций и свойств не надо создавать объект класса.
//Статические функции и свойства определяются с помощью ключевого слова static:
var Operation = /** @class */ (function () {
    function Operation() {
    }
    Operation.getSquare = function (radius) {
        return (Operation.PI) * radius * radius;
    };
    Operation.PI = 3.14;
    return Operation;
}());
var result06 = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + result06);
var result2 = Operation.PI * 30 * 30;
console.log(result2); // 2826
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
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this._name = name;
        this._year = this.setYear(age);
    }
    User2.prototype.displayYear = function () {
        console.log("Год рождения: " + this._year);
    };
    User2.prototype.displayName = function () {
        console.log("name: " + this._name);
    };
    User2.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return User2;
}());
var toms = new User2("Tom", 24);
toms.displayName();
toms.displayYear();
// console.log(toms._name); // нельзя обратиться, так как _name - private
// toms.setYear(45); // нельзя обратиться, так как функция - private
//protected
//Модификатор protected во многом аналогичен private - свойства и методы 
//с данным модификатором не видны из вне, но к ним можно 
//обратиться из классов-наследников:
var Userr = /** @class */ (function () {
    function Userr(name, age) {
        this.name = name;
        this.age = age;
    }
    Userr.prototype.displayInfo = function () {
        console.log("name: " + this.name + "; age: " + this.age);
    };
    return Userr;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Employee.prototype.showData = function () {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    };
    return Employee;
}(Userr));
//Определение свойств через конструктор==#11
var User3 = /** @class */ (function () {
    function User3(name, age) {
        this.name = name;
        this.age = age;
    }
    User3.prototype.displayInfo = function () {
        console.log("name: " + this.name + "; age: " + this.age);
    };
    return User3;
}());
function alerto() {
    alert('hello'); //не выведется
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
var Userq = /** @class */ (function () {
    function Userq(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    return Userq;
}());
var tome = new Userq(2, "Tod");
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
var User21 = /** @class */ (function () {
    function User21(userName) {
        this.name = userName;
    }
    User21.prototype.getInfo = function () {
        console.log("Имя: " + this.name);
    };
    return User21;
}());
var Employee21 = /** @class */ (function (_super) {
    __extends(Employee21, _super);
    function Employee21(userName, empCompany) {
        var _this = _super.call(this, userName) || this;
        _this.company = empCompany;
        return _this;
    }
    Employee21.prototype.work = function () {
        console.log(this.name + " работает в компании " + this.company);
    };
    return Employee21;
}(User21));
var bill = new Employee21("Bill", "Microsoft");
bill.getInfo();
bill.work();
console.log(bill);
var Useru = /** @class */ (function () {
    function Useru() {
    }
    return Useru;
}());
var Employeeu = /** @class */ (function (_super) {
    __extends(Employeeu, _super);
    function Employeeu(empsCompany) {
        if (empsCompany === void 0) { empsCompany = 'Apple'; }
        var _this = _super.call(this) || this;
        _this.company = empsCompany;
        return _this;
    }
    Employeeu.prototype.add = function () {
        console.log(this.company + ' ' + "and this good");
    };
    return Employeeu;
}(Useru));
var max = new Employeeu();
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
var User4 = /** @class */ (function () {
    function User4(userName) {
        this.name = userName;
    }
    User4.prototype.getInfo = function () {
        console.log("Имя: " + this.name);
    };
    return User4;
}());
var User = /** @class */ (function () {
    function User(userName) {
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        console.log("Имя: " + this.name);
    };
    return User;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(userName, empCompany) {
        var _this = _super.call(this, userName) || this;
        _this.company = empCompany;
        return _this;
    }
    Employe.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        console.log("Работает в компании: " + this.company);
    };
    return Employe;
}(User4));
//===Абстрактные классы===#15==
//Абстрактные классы представляют классы, определенные с ключевым словом abstract.
//не можем создать напрямую объект абстрактного класса, используя его конструктор.
var Figur = /** @class */ (function () {
    function Figur() {
    }
    return Figur;
}());
// let someFigure = new Figur()    // Ошибка!
//абстрактные классы описывают сущности, которые в реальности не имеют
// конкретного воплощения.
//общее название с общим функционалом(деревья: липа, дуб, ясень)
//В данном случае абстрактный класс определяет метод getArea(), который вычисляет 
//площадь фигуры. Класс прямоугольника определяет свою реализацию для этого метода.
//Однако в данном случае метод getArea в базовом классе не выполняет никакой 
//полезной работы, так как у абстрактной фигуры не может быть площади. 
//И в этом случае подобный метод лучще определить как абстрактный:
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.prototype.getArea = function () {
        console.log("Not Implemented ");
    };
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        var square = this.width * this.height;
        console.log("area =", square);
    };
    return Rectangle;
}(Figure));
var someFigure = new Rectangle(20, 30);
someFigure.getArea(); // area = 600
var someFigure1 = new Rectangle(30, 30);
someFigure1.getArea(); // area = 900
var employee = {
    id: 1,
    name: "Dom"
};
console.log("id: " + employee.id);
console.log("name: " + employee.name);
var employeee = {
    id: 2,
    name: "Alice"
};
function getEmployeeInfo(user) {
    console.log("id: " + user.id);
    console.log("name: " + user.name);
}
getEmployeeInfo(employeee);
function buildUser(userId, userName) {
    return { id: userId, name: userName };
}
var newUser = buildUser(3, "Bill");
console.log("id: " + newUser.id);
console.log("name: " + newUser.name);
var employee3 = {
    id: 1,
    name: "Alicon",
    age: 23
};
var manager = {
    id: 2,
    name: "Tom"
};
console.log('id:' + employee3.id);
console.log('age:' + employee3.age);
var p = { x: 10, y: 20 };
console.log(p);
var employee4 = {
    id: 1,
    name: "Alice",
    getFullName: function (surname) {
        return this.name + " " + surname;
    }
};
var fullName = employee4.getFullName("Tompson");
console.log(fullName); // Alice Tompson
var User5 = /** @class */ (function () {
    function User5(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User5.prototype.getFullName5 = function (surname) {
        return this.name + " " + surname;
    };
    return User5;
}());
var dom = new User5(1, "Dom", 23);
console.log(dom.getFullName5("Simpson"));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    };
    Car.prototype.fill = function () {
        console.log("Заправляем машину топливом");
    };
    return Car;
}());
var auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();
var simpleBuilder = function (name, surname) {
    return "Mr. " + name + " " + surname;
};
var fullName1 = simpleBuilder("Bob", "Simpson");
console.log(fullName1); // Mr. Bob Simpson
var phones;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
var myPhone = phones[0];
console.log(myPhone);
var colors = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
console.log(colors["red"]);
function personBuilder() {
    var person = function (name, surname) {
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
var tjom = personBuilder();
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
var User6 = /** @class */ (function () {
    function User6(userName) {
        this.name = userName;
    }
    return User6;
}());
var Employee6 = /** @class */ (function (_super) {
    __extends(Employee6, _super);
    function Employee6(employeeCompany, userName) {
        var _this = _super.call(this, userName) || this;
        _this.company = employeeCompany;
        return _this;
    }
    return Employee6;
}(User6));
function getUserName(user) {
    return user.name;
}
function userFactory(name) {
    return new Employee6("не установлено", name);
}
var alicce = new Employee6("Microsoft", "Alice");
var userName = getUserName(alice);
console.log(userName); // Alice
var tomm = userFactory("Tolker");
userName = getUserName(tomm);
console.log(userName); // Tolker
var User7 = /** @class */ (function () {
    function User7(userName) {
        this.name = userName;
    }
    return User7;
}());
var Employee7 = /** @class */ (function (_super) {
    __extends(Employee7, _super);
    function Employee7(employeeCompany, userName) {
        var _this = _super.call(this, userName) || this;
        _this.company = employeeCompany;
        return _this;
    }
    return Employee7;
}(User7));
function getUserName7(user) {
    return user.name;
}
//Функция getUserName в качестве параметра принимает объект интерфейса IUser:
var alice7 = new Employee7("Google", "Alicon");
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
console.log(getUserName7({ name: "Bob", company: "Microsoft" })); // Bob
//......................Оператор instanceOf............................
//С помощью оператора instanceOf можно проверить, принадлежит ли объект определенному классу:
var alice8 = new Employee7("Google", "Alice");
if (alice7 instanceof User7) {
    console.log("Alice is a User");
}
else {
    console.log("Alice is not a User");
}
//=======================О Б О Б Щ Е Н И Я==============================================
//TypeScript является строго типизированным языком, однако иногда надо построить функционал так, 
//чтобы он мог использовать данные любых типов. В некоторых случаях мы могли бы использовать тип any:
function getId(id) {
    return id;
}
var result3 = getId(5);
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
function getId1(id) {
    return id;
}
var result4 = getId1(10); //T будет испльзоваться тип number, 
//поэтому в функцию мы можем передать число.
console.log(result4);
var result5 = getId1("abc"); //T используется тип string, 
//поэтому во втором случае можно передать строку.
console.log(result5);
// мы можем передать в функцию объекты различных типов, но при этом сохраняется строгая типизация, 
//каждый вариант обобщенной функции может принимать объекты только определенного типа.
//==========================================================================
//==========================================================================
// ===Подобным образом еще можно использовать обобщенные МАССИВЫ:
function getString(arg) {
    var result6 = "";
    for (var i = 0; i < arg.length; i++) {
        if (i > 0)
            result6 += ",";
        result6 += arg[i].toString();
    }
    console.log(result6);
    return result6;
}
var result6 = getString([1, 2, 34, 5]);
console.log(result6);
//В данном случае вне зависимости от типа данных, переданных в массиве, все его элементы 
//соединятся в одну общую строку.
//===================================================================
//===================================================================
//Обобщенные классы и интерфейсы
var User8 = /** @class */ (function () {
    function User8(id) {
        this._id = id;
    }
    User8.prototype.getId = function () {
        return this._id;
    };
    return User8;
}());
var tom7 = new User8(3);
console.log(tom7.getId()); // возвращает number
var alice0 = new User8("vsf");
console.log(alice0.getId()); // возвращает string
var User9 = /** @class */ (function () {
    function User9(id) {
        this._id = id;
    }
    User9.prototype.getId = function () {
        return this._id;
    };
    return User9;
}());
var User10 = /** @class */ (function () {
    function User10(id, name) {
        this._id = id;
        this._name = name;
    }
    User10.prototype.getInfo = function () {
        console.log("id: " + this._id + "; name: " + this._name);
    };
    return User10;
}());
var Employee10 = /** @class */ (function (_super) {
    __extends(Employee10, _super);
    function Employee10(id, name, company) {
        var _this = _super.call(this, id, name) || this;
        _this._company = company;
        return _this;
    }
    Employee10.prototype.getInfo = function () {
        console.log("id: " + this._id + "; name: " + this._name + "; company:" + this._company);
    };
    return Employee10;
}(User10));
//Теперь пусть у нас будет класс, выводящий информацию о пользователях:
var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    UserInfo.prototype.getUserInfo = function (user) {
        user.getInfo();
    };
    return UserInfo;
}());
//В методе getUserInfo мы хотим использовать функцию getInfo(), предполагая, что в качестве
// параметра будет передаваться объект IUser. Но чтобы нельзя было передать объекты любого типа, 
//а только объекты IUser, устанавливается ограничения с помощью ключевого слова extends.
//И затем мы можем использовать класс, передавая подходящие объекты:
var tom8 = new User10(3, "Som");
var alice1 = new Employee10(4, "Alice", "Microsoft");
var userStore = new UserInfo();
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
function userFactory1(type) {
    return new type();
}
var User11 = /** @class */ (function () {
    function User11() {
        console.log("создан объект User");
    }
    return User11;
}());
var user = userFactory1(User11);
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.feed = function () {
        console.log("кормим животное");
    };
    return Animal;
}());
var Transport1 = /** @class */ (function () {
    function Transport1() {
        this.speed = 0;
    }
    Transport1.prototype.move = function () {
        if (this.speed == 0) {
            console.log("Стоим на месте");
        }
        else if (this.speed > 0) {
            console.log("Перемещаемся со скоростью " + this.speed + " км/ч");
        }
    };
    return Transport1;
}());
var Horse = /** @class */ (function () {
    function Horse() {
        this.speed = 0;
    }
    return Horse;
}());
//специальнуя функция, которая перекопирует функционал из родительских классов в миксин:
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
applyMixins(Horse, [Animal, Transport1]); //Первым параметром идет класс-миксин, 
//а второй параметр - массив применяемых классов.
var pony = new Horse();
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
var Personnel;
(function (Personnel) {
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    Personnel.Employee = Employee;
    function work(emp) {
        console.log(emp.name, "is working");
    }
    Personnel.work = work;
    Personnel.defaultUser = { name: "Kate" };
})(Personnel || (Personnel = {}));
var tom11 = new Personnel.Employee("Tom");
Personnel.work(tom11); // Tom is working
console.log(Personnel.defaultUser.name); // Kate
/*Чтобы типы и объекты, определенные в пространстве имен, были видны извне,
они определяются с ключевым словом export.
В этом случае во вне мы сможем использовать класс Employee:*/
(function (Personnel) {
    var Employee1 = /** @class */ (function () {
        function Employee1(name) {
            this.name = name;
        }
        return Employee1;
    }());
    Personnel.Employee1 = Employee1;
})(Personnel || (Personnel = {}));
var alice12 = new Personnel.Employee("Alice");
console.log(alice12.name); // Alice
//...............Пространство имен в отдельном файле.......................
/*Нередко пространства имен определяются в отдельных файлах.
Например, определим файл personnel.ts со следующим кодом:*/
(function (Personnel) {
    var Employee2 = /** @class */ (function () {
        function Employee2(name) {
            this.name = name;
        }
        return Employee2;
    }());
    Personnel.Employee2 = Employee2;
    var Manager = /** @class */ (function () {
        function Manager(name) {
            this.name = name;
        }
        return Manager;
    }());
    Personnel.Manager = Manager;
})(Personnel || (Personnel = {}));
//И в той же папке определим главный файл приложения app.ts:
///// <reference path="personnel.ts" />
var tom12 = new Personnel.Employee2("Fom");
console.log(tom12.name);
var sam = new Personnel.Manager("Sam");
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
var Data;
(function (Data) {
    var Personnel;
    (function (Personnel) {
        var Employee = /** @class */ (function () {
            function Employee(name) {
                this.name = name;
            }
            return Employee;
        }());
        Personnel.Employee = Employee;
    })(Personnel = Data.Personnel || (Data.Personnel = {}));
    var Clients;
    (function (Clients) {
        var VipClient = /** @class */ (function () {
            function VipClient(name) {
                this.name = name;
            }
            return VipClient;
        }());
        Clients.VipClient = VipClient;
    })(Clients = Data.Clients || (Data.Clients = {}));
})(Data || (Data = {}));
var tom13 = new Data.Personnel.Employee("Tony");
console.log(tom13.name);
var sam1 = new Data.Clients.VipClient("Sat");
console.log(sam1.name);
//вложенные пространства имен определяются со словом export.
// Соответственно при обращении к типам надо использовать все пространства имен.
//...............Псевдонимы...................................
/*Возможно, нам приходится создавать множество объектов Data.Personnel.Employee,
но каждый раз набирать полное имя класса с учетом пространств имен, вероятно, не всем понравиться,
особенно когда модули имеют глубокую вложенность по принципу матрешки.
Чтобы сократить объем кода, мы можем использовать псевдонимы,
задаваемые с помощью ключевого слова import. Например:*/
(function (Data) {
    var Personnel;
    (function (Personnel) {
        var Employee2 = /** @class */ (function () {
            function Employee2(name) {
                this.name = name;
            }
            return Employee2;
        }());
        Personnel.Employee2 = Employee2;
    })(Personnel = Data.Personnel || (Data.Personnel = {}));
})(Data || (Data = {}));
var employee2 = Data.Personnel.Employee2;
var tom14 = new employee2("Tom14");
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
 */
//Но мы могли бы и по другому экспортировать все сущности:
//# sourceMappingURL=index.js.map