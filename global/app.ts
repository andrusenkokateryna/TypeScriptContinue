/// <reference path="globals.d.ts" />

class Utility {
    static displayGlobalVar() {
         
        console.log(globalVar);
    }
}
 
window.onload = () => {
     
    Utility.displayGlobalVar();
    
};

class Utility1 {
    static displayGlobalVar() {
         
        for (var i = 0; i < points.length; i++)
            console.log("Точка с координатами X=" + points[i].X + " Y=" + points[i].Y);
    }
}
 
window.onload = () => {
     
    Utility1.displayGlobalVar();
    
};