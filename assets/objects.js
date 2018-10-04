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

const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: "40",
        salary: 1200,
        salaryPerHour:  function() {
            perHour = salary / hoursPerWeek;
            console.log(perHour);
        }
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: "40",
        salary: 1200
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: "40",
        salary: 1200
    }
]

//deze geeft een undifined medling, de foreach werkt wel
for (let i = 0; i < teachers.length; i++) {
    if(i === 0) {
        console.log("I have a " + teachers.profession + " called " + teachers.name + " and he likes to work on a " + teachers.brand + " computer.");
    }
    else if(i === 1) {
        console.log("I have a " + teachers.profession + " called " + teachers.name + " and he likes to work on a " + teachers.brand + " computer.");
    }
    else {
        console.log("I have a " + teachers.profession + " called " + teachers.name + " and he likes to work on a " + teachers.brand + " computer.");
    }
}

teachers.forEach(function(teachers){
    console.log("I have a " + teachers.profession + " called " + teachers.name + " and he likes to work on a " + teachers.brand + " computer.")
});

//Opdracht 3: 2.	[Pittig]. Gegeven is de array met objecten uit de vorige vraag. Voeg twee properties “hoursPerWeek” en “salary” toe. Verzin zelf bijpassende waardes. Voeg nu een methode “salaryPerHour” toe, met daarin een functie die print hoeveel de docenten per uur verdienen.

console.table(teachers);