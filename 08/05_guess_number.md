
```
import random

  

r = random.randint(0, 100)

  

h = int(input("Угадайте число"))

while (h != r):

    if h < r:

        print("Моё число больше")

    else:

        print("Моё число меньше")

    h = int(input("Угадайте число"))

print("Ты угадал моё число, ты получаешь")

print(r, "плюсов")
```

Clever tasks
1. Switch roles with computer, computer should guess
2. Instead of guessing numbers, guess letter