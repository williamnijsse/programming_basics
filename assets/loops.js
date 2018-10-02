// les over loops

// opdracht 1
let x = 1

while(x <= 20) {
    if(x % 4==0){
        console.log(x, "Deelbaar door 4");
    }
    
    else{
        console.log(x, "Niet deelbaar door 4");
    }

    x = x+1
}

//opdracht 2

let firstNumber = 0
let secondNumber = 1
let firstAndSecond = firstNumber + secondNumber

while(firstAndSecond <1000) {
    console.log(firstAndSecond);
    secondNumber = firstNumber;
    firstNumber = firstAndSecond;
    firstAndSecond = firstNumber + secondNumber;
}

//opdracht 3

let Getallen = [2, 4, 8, 9, 12, 13];
let totalOfAll = 0;

for(z=0; z<Getallen.length; z++) {
    console.log(Getallen[z]);
    totalOfAll = totalOfAll + Getallen[z];
}
console.log(totalOfAll);