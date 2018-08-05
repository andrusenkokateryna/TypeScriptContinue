"use strict";
//=================== #1====
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
//===================ПPEOБРАЗОВАНИЕ ТИПОВ===================
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
}(User));
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
//# sourceMappingURL=index.js.map