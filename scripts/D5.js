/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

// RISPOSTA 1

const pets = ["dog", "cat", "hamster", "redfish"]

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

// RISPOSTA 2

pets.sort()

console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// RISPOSTA 3

pets.reverse()

console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// RISPOSTA 4

const first = pets.shift()
pets.push(first)

console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

// RISPOSTA 5

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "B"
}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// RISPOSTA 6

const newCar = {
  brand: "Toyota",
  model: "Yaris",
  color: "white",
  trims: ["active", "style"],
  licensePlate: "B",
}

cars.push(newCar)

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

// RISPOSTA 8

for (let i = 0; i < cars.length; i++) {
  const color = cars[i].color.trim()
  const firstLetter = color[0].toLowerCase()

  console.log(
    `Index: ${i}, Brand: ${cars[i].brand}, Color: "${color}", First letter: "${firstLetter}"`
  )

  if (firstLetter === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

// RISPOSTA 9

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

while (i < numericArray.length) {
  console.log(numericArray[i])

  if (numericArray[i] === 32) {
    break
  }

  i++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

// RISPOSTA 10

const charactersArray = ["g", "n", "u", "z", "d"]

const positionsArray = []

for (let i = 0; i < charactersArray.length; i++) {
  let position

  switch (charactersArray[i]) {
    case "a":
      position = 1
      break
    case "b":
      position = 2
      break
    case "c":
      position = 3
      break
    case "d":
      position = 4
      break
    case "e":
      position = 5
      break
    case "f":
      position = 6
      break
    case "g":
      position = 7
      break
    case "h":
      position = 8
      break
    case "i":
      position = 9
      break
    case "j":
      position = 10
      break
    case "k":
      position = 11
      break
    case "l":
      position = 12
      break
    case "m":
      position = 13
      break
    case "n":
      position = 14
      break
    case "o":
      position = 15
      break
    case "p":
      position = 16
      break
    case "q":
      position = 17
      break
    case "r":
      position = 18
      break
    case "s":
      position = 19
      break
    case "t":
      position = 20
      break
    case "u":
      position = 21
      break
    case "v":
      position = 22
      break
    case "w":
      position = 23
      break
    case "x":
      position = 24
      break
    case "y":
      position = 25
      break
    case "z":
      position = 26
      break
    default:
      position = -1
  }

  positionsArray.push(position)
}

console.log(positionsArray)
