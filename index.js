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
//=====assertion=====припедение к типу====
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
    console.log(e);
}
// Error: 'e' doesn't exist here
//console.log(e);
// =====================let or const======================================
/*Применяя принцип наименьшего уровня привелегий, все объявления переменных, которые вы в
дальнейшем не планируете менять, должны использовать const. Объясняется это тем, что если переменная
не должна изменять свое значение, другие разработчики, которые работают над тем же кодом, не должны
иметь возможность записи в объект. Это должно быть позволено только в случае реальной необходимости
переназначения переменной. Использование const делает код более предсказуемым и понятным при объяснении
потока данных.*/
