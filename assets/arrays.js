//Opdracht 1: random element uit array

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
let randomNumber = lapRounds[Math.floor(lapRounds.length * Math.random())];
console.log(randomNumber);

//opdracht 2: 
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];

console.table(allMyRecords);

for (let i = 0; i < allMyRecords.length; i++) {
    for (let d = 0; d < allMyRecords[i].length; d++) {
        console.log(allMyRecords[i][d])    
    }
}

//opdracht 3: Gebruik de .filter functie uit javascript om precies hetzelfde resultaat te behalen als de for-loop. Geef aan waarom de .filter functie fijner/beter werkt.

const filteredLapRoundsWithForLoop = function () {
    let newArray = [];
    for (let i = 0; i < lapRounds.length; i++) {
 
        if (lapRounds[i] < 4) {
            newArray.push(lapRounds[i]);
        }
    }
    return newArray;
}

console.log(filteredLapRoundsWithForLoop(lapRounds));

//Met de .filter functie.
const filterLapRound = lapRounds.filter(function(lapRounds) {
    return lapRounds < 4;
});
console.log(filterLapRound);