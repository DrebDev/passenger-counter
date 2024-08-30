// let name = 42
// let greeting="Hi, my name is"
// let myGreeting = greeting + " " + name

// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints
// console.log(totalPoints)

// console.log(4 + 5) // 9
// console.log("2" + "4") //24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100

// let welcomeEl = document.getElementById("welcome-el")

// let name = "David"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// welcomeEl.innerText = myGreeting

// welcomeEl.innerText += "😉"

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     // Change this to use the plus equal technique you've learned
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// }
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveText = count + " - "
    saveEl.textContent += saveText
    countEl.textContent = 0
    count = 0
}