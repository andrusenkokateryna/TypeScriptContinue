//=================== #1

let array = ['hello',' ','world!'];
for(let val of array){
	document.write(val);
}

let a;
a=1;
console.log(a);

let oneString="1"

//====================Enum=======

enum Color{Red=1,Green, Blue};
	let colorName=Color[2];
	console.log(colorName);

	function warnUser(): void {
    alert("This is my warning message");
}


//=====assertion=====припедение к типу====

let someValue: any = "this is a string";
 
let strLength: number = (<string>someValue).length


console.log(strLength);

let someValue: any = "this is a string";
 
let strLength: number = (someValue as string).length;
console.log(strLength)

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

