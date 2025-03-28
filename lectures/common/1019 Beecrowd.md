```javascript
...
...

let seconds = parseInt(lines[0])

let hours = parseInt(seconds / 3600)
seconds = seconds - hours * 3600
let minutes = parseInt(seconds / 60)
seconds = seconds - minutes * 60

console.log(`${hours}:${minutes}:${seconds}`)
"hours"

3661
hours = parseInt(3661 / 3600) -> parseInt(1.1231231231) -> 1
seconds = second - seconds * hours
73232
1231
```














```java
Scanner sc = new Scanner(System.in);
int seconds = sc.nextInt();

int hours = seconds / 3600;
seconds = seconds - hours * 3600;
int minutes = seconds / 60;
seconds = seconds - minutes * 60;

System.out.printf("%d:%d:%d", hours, minutes, seconds);
```

```python
seconds = int(input())

hours = seconds // 3600
seconds = seconds - hours * 3600
minutes = seconds // 60
seconds = seconds - minutes * 60


```