//opdracht 1

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


//opdracht 2

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