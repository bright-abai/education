// npm install prompt-sync
const prompt = require('prompt-sync')({sigint: true});

let n = Math.floor(Math.random() * 100) + 1

// Math.random() -> 0..1
// Math.random() * 100 -> 0 .. 100 1
while (true) {
    let guess = parseInt(prompt("Угадай число от 1 до 100"))
    if (guess > n) {
        console.log("Попробуй поменьше")
    }
    else if (guess < n) {
        console.log("Попробуй побольше")
    }
    else {
        console.log("Они равны")
        break
    }
}
