// //Opdracht 1, het gemiddelde berekenen in een gemiddelde regel

const list = document.getElementsByTagName('tr'); //pak alle tr.
let gradesArray = []; //maak een lege array aan, waar alle cijfers straks inkome.
let gradesArraySum = 0; // maak een variabele met waarde 0, zodat je straks de cijfers bij de variabele de cijfers op kan tellen.

for (let index = 0; index < list.length; index++) {
    let listItem = list[index]; // variabele listItem die van alle 'tr's' een array maakt 
    let getGrade = listItem.lastElementChild.innerText; // variabele die van alle listItem, dus hierboven, van de array dus, het laatste element pakt, en daarvan de inntertext, dus het cijfer (grade).
    let parsedValue = parseFloat(getGrade); // maakt van het getal, wat als een string gezien wordt, een float.
    let generateArray = gradesArray.push(parsedValue); //de variabele generateArray je hier maakt, pakt de lege array gradeArray die we aan het begin gemaakt hebben, en zet alle cijfers (parsedValue) erin, dmv .push  .
    let averageGrade = gradesArraySum += gradesArray[index]; // de variabele averageGrade die we hier aanmaken bestaat uit (gradesArraySum, die 0 is, dat hebben we in het begin gezegd) + (gradeArray[index], dat is de lege array die we hierboven gevuld hebben.)
};

let overallGrade = gradesArraySum / list.length;

const table = document.getElementById('table');
let row = table.insertRow(list.length);

var addFirstCell = row.insertCell(0);
var addSecondCell = row.insertCell(1);

addFirstCell.innerText = "Gemiddelde cijfer";
addSecondCell.innerText = overallGrade;



//opdracht 2, alle even rijen moeten een kleurtje

const getList = document.getElementsByTagName("li"); //je maakt een constante aan die het element met de id "li" als waarde heeft

//we maken een functie aan met als parameter de constante die we net hebben aangemaakt.
function giveColorToEven(getList) {

    for (let listIndex = 0; listIndex < getList.length; listIndex++) {  //als listIndex groter is dan de lengte van de li (const getList)
        const listElement = getList[listIndex]; // de constante listElement maakt van alle li's (van de const getList) een array
        classNames = getList[listIndex].className; // nu maken we een variabele aan die van alle listIndex de classnaam in een variabele zet
        var getClassNameNumber = classNames.substr(6, 1); //het class nummer kun je vervolgens eruit halen dmv substr en die aan een variabele toe te kennen

        if (getClassNameNumber % 2 == 0) { // Als dat nummer deelbaar is door 2, of gelijk is aan 2, dan moet die aquamarine als class toevoegen aan het element
            listElement.classList.add("aquamarine");
        }
    }
}
giveColorToEven(getList); // de functie aanroepen


 // OPDRACHT 3

 
 // Functie om een IMG-element aan te maken
 function createImageElement(imageSrcName) {  // Plaats waar IMG-element moet komen en in een variabele zetten
     let imagePlace = document.getElementById("imageDiv"); // IMG-element aanmaken
     var createImage = document.createElement("IMG"); // Pad van afbeelding in een variabele zetten
     imageSrcName = "C:\Users\willi\Documents\GitHub\oefenen\opdrachtenPB\assets\images\hz.jpg"; // Source toevoegen aan IMG-element
     createImage.src = imageSrcName; // Image pushen naar DOM
     imagePlace.appendChild(createImage);
 }

 // Functie uitvoeren
 createImageElement();

