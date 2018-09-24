//les variables en types

const number = '4';

if(number % 2 == 0){
    console.log('even');
}
else{
    console.log('oneven');
}

const zin = 'Programming is not so cool';
console.log(zin);
console.log(zin.replace('not', ''));

const a = 1400
const b = 'Ik woon in Naboo';

if(a == b){
    console.log('ze zijn gelijk');
}
else{
    console.log('Ze zijn niet gelijk aan elkaar');
}
//je kunt ze niet goed vergelijken, omdat a een number is en b een string.

//les conditionals begint vanaf hier

let cijfer = 5;

if(cijfer < 6){
    console.log('Jullie hebben allemaal een onvoldoende');
}
else if(cijfer >=6 && cijfer<=7){
    console.log('voldoende');
}
else if(cijfer >=7 && cijfer<=9){
    console.log('goed');
}
else{
    console.log('uitmuntend!');
}

let tekst;
switch (cijfer){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: 
    case 6:
        tekst = 'onvoldoende';
        break;
    case 7: 
        tekst = 'voldoende';
        break;
    case 8:
    case 9:
        tekst = 'voldoende';
        break;
    case 10:
        tekst = 'uitmuntend';
        break;
    default:
        tekst = 'error';
        break;
}

console.log(tekst);

//opdracht 3 snap ik niet, ik weet niet precies wat ik nou moet doen.


// les over loops
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

let firstNumber = 0
let secondNumber = 1
let firstAndSecond = firstNumber + secondNumber

while(firstAndSecond <1000) {
    console.log(firstAndSecond);
    secondNumber = firstNumber;
    firstNumber = firstAndSecond;
    firstAndSecond = firstNumber + secondNumber;
}
