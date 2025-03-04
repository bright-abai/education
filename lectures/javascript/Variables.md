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

