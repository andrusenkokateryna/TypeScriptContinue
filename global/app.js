/// <reference path="globals.d.ts" />
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.displayGlobalVar = function () {
        console.log(globalVar);
    };
    return Utility;
}());
window.onload = function () {
    Utility.displayGlobalVar();
};
var Utility1 = /** @class */ (function () {
    function Utility1() {
    }
    Utility1.displayGlobalVar = function () {
        for (var i = 0; i < points.length; i++)
            console.log("Точка с координатами X=" + points[i].X + " Y=" + points[i].Y);
    };
    return Utility1;
}());
window.onload = function () {
    Utility1.displayGlobalVar();
};
