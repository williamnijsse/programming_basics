//les over functions

//opdracht 1
console.log("les over functions");

function fibonacci() {
let Getallen = [2, 4, 8, 9, 12, 13];
let totalOfAll = 0;

for(z=0; z<Getallen.length; z++) {
    console.log(Getallen[z]);
    totalOfAll = totalOfAll + Getallen[z];
}
console.log(totalOfAll);
}

console.log(fibonacci());

//opdracht 2

function countdown(jaartal){
    var number = 10;
    while(number >= 1){
        console.log(number);
        number--;
        if(number == 0){
            console.log("happy",jaartal);
        }
    }
}

console.log(countdown("2019"));

//opdracht 3
function declare() {
    a = 2;
    b = 3;
    console.log(a*b);
    var a;
    var b;
}

console.log(declare());

function expression() {
    var x = 20;
    var string = "hallo";
    var som = x + z;
    console.log(string + stringTwo);
    
    var z = 3;
    var stringTwo = "william";
}

console.log(expression());