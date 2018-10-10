//Opdracht 1, het gemiddelde berekenen in een gemiddelde regel
const list = document.getElementsByTagName("tr");  //pak alle tr.
let gradeArray = []; //maak een lege array aan, waar alle cijfers straks inkomen.
let gradesArraySum = 0; // maak een variabele met waarde 0, zodat je straks de cijfers bij de variabele de cijfers op kan tellen

for (let index = 0; index < gradeArray.length; index++) {
    let listItem = list[index]; // variabele listItem die van alle 'tr's' een array maakt 
    let getGrade = listItem.lastElementChild.innerText; // variabele die van alle listItem, dus hierboven, van de array dus, het laatste element pakt, en daarvan de inntertext, dus het cijfer (grade).
    let parsedValue = parseFloat(getGrade); // maakt van het getal, wat als een string gezien wordt, een float.
    let generateArray = gradeArray.push(parsedValue); //de variabele generateArray je hier maakt, pakt de lege array gradeArray die we aan het begin gemaakt hebben, en zet alle cijfers (parsedValue) erin, dmv .push  .
    let averageGrade = gradesArraySum += gradeArray[index]; // de variabele averageGrade die we hier aanmaken bestaat uit (gradesArraySum, die 0 is, dat hebben we in het begin gezegd) + (gradeArray[index], dat is de lege array die we hierboven gevuld hebben.)
};

let overallGrade = gradesArraySum/list.length; 

const table = document.getElementById("table");
let row = table.insertRow(list.length);

let addFirstCell = row.insertCell(0);
let addSecondCell = row.insertCell(1);

addFirstCell.innerText = "Gemiddede cijfer";
addSecondCell.innerText = overallGrade;