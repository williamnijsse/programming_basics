//opdracht 1: 1.	Schrijf de volgende array om in JSON. De array beschrijft rondetijden van een hardloper. Wat zijn de namen (keys) van de properties?
// const lapRounds = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 

const lapRounds = [
    {
    "ronde1": 55.99,
    "ronde2": 63.00,
    "ronde3": 63.01,
    "ronde4": 54.01,
    "ronde5": 62.79,
    "ronde6": 52.79,
    "ronde7": 53.10,
    "ronde8": 54.12
    }
]

console.log(lapRounds);

console.log(lapRounds.length);

for (let i = 0; i < lapRounds.length; i++) {
    console.log(lapRounds[i]);
}

//Opdracht 2: Gebruik een for-loop of foreach-loop en print voor elk object de regel: “I have a [profession] named [name] and he likes to work on a [brand] computer”. De vierkante haken zijn placeholders voor de bijbehorende properties uit de objecten hierboven.

const printSalaryPerHour = function() {
    console.log(`${this.name} earns ${this.printSalaryPerHour} per hour`);
}

const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 40,
        salaryPerHour: 40,
        printSalaryPerHour: printSalaryPerHour
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
    }
]

//deze geeft een undifined medling, de foreach werkt wel
for (let i = 0; i < teachers.length; i++) {
    const element = teachers[i];
        console.log(`I have a ${teachers.profession} named ${teachers.name} and he likes to work on a / an ${teachers.brand} computer`);

}

teachers.forEach(function(element, index, array){
    console.log("I have a " + element.profession + " called " + element.name + " and he likes to work on a " + element.brand + " computer.")
});

//Opdracht 3: 2.	[Pittig]. Gegeven is de array met objecten uit de vorige vraag. Voeg twee properties “hoursPerWeek” en “salary” toe. Verzin zelf bijpassende waardes. Voeg nu een methode “salaryPerHour” toe, met daarin een functie die print hoeveel de docenten per uur verdienen.

console.table(teachers);

//ik kom niet uit opdracht 3