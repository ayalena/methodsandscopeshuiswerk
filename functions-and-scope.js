
// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
//met een for loop
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
//door over de lengte van de array te itereren
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
//door een lege globale variable aan te maken om ze in op te slaan
// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 6

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let cumlaudeGrades = [];

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumlaudeGrades.push(grades[i]);
    }
}

let cumlaudeStudents = cumlaudeGrades.length;
console.log(cumlaudeStudents);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(array) {
    let cumlaudeGrades = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 8) {
            cumlaudeGrades.push(array[i]);
            if (cumlaudeGrades.length === 0) {
                return 0;
            }

        }
    }
    let cumlaudeStudents = cumlaudeGrades.length;
    return cumlaudeStudents;
}

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
//tell alle cijfers bij elkaar op, en deel ze dan door het aantal cijfers
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
//het getal van alle array entries bij elkaar opgeteld
//dat delen door de lengte van de array
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
//met een for loop
// Log het antwoord in de terminal.
// ---- Verwachte uitkomst: 6.642857142857143

//methode om alles bij elkaar op te tellen
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const total = grades.reduce(reducer);
//console.log(total);
//methode om het gemiddelde te berekenen
const average = total / grades.length;
console.log(average);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

// let array2 = [];

function averageGrade (array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = array.reduce(reducer);
    const average = total / array.length;
    return average;
}

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

function averageGrade2 (array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = array.reduce(reducer);
    const average = total / array.length;
    const rounded = average.toFixed(2);
    return rounded;
}

console.log(averageGrade2(grades));
console.log(averageGrade2([6, 4, 5]));
console.log(averageGrade2([8, 9, 4, 6, 10]));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
//met een for loop itereren
// * Op welke conditie moet ik checken?
//of de waarde van de index hoger is dan de waarde van de ander
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
//een globale variabele aanmaken
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
let highGrade = [];

for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades.length; j++) {
        if (grades[j] > grades[i]) {
            highGrade.push(grades[j]);

        }
    }
}

console.log(highGrade[0]);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.



function highestGrade (array) {
    let highGrade = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[i]) {
                highGrade.push(array[j]);
                // return highGrade[0];
            }
        }
    }
    return highGrade[0];
}

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));