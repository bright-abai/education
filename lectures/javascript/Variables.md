A variable is a container with data, which we can manipulate.

To create a variable, write `let name = value`, where name is the name of the variable, and value is what is contained inside.

```
let apples = 10
apples = apples * 2
console.log("Apples are multiplied by two")
```

On site beecrowd.com the input data is given in the `lines` variable. To get the first number, we should use
```
let lines = "..."
let first_number = parseInt(lines[0])
let second_number = parseInt(lines[1])
```

Sometimes we need to limit precision, amount of decimal places.
```
let pi = 3.14159
console.log(pi.toFixed(2))
```

```javascript
let input = require('fs').readFileSync('/dev/stdin', 'utf8')
let lines = input.split('\n')

let seconds = parseInt(lines[0])
let minutes = Math.floor(seconds / 60)
let hours = Math.floor(minutes / 60)

console.log(Math.floor(hours) + ":" + Math.floor(minutes) + ":" + Math.floor(seconds))
```



```
