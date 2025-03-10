// npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});

let n = Math.floor(Math.random() * 100) + 1

// Math.random() -> 0..0.999999
// Math.random() * 100 -> 0 .. 99.999999
while (true) {
    let guess = parseInt(prompt("Guess a number from 1 to 100"))
    if (guess > n) {
        console.log("Try lesser number")
    }
    else if (guess < n) {
        console.log("Try bigger number")
    }
    else {
        console.log("Whooraay! You won!")
        break
    }
}
