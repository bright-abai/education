## Sequence

```python
name = input("Enter your name")
print("Welcome, %s!" % name)
wish = input("What would you like?")
```

🌟 **1.** `name = input("Enter your name")`  
🖥️ The computer asks for your name and saves it in the variable `name`.  
✍️ Example: If you enter _Aydai_, then `name` will become _"Aydai"_.

---

🌟 **2.** `print("Welcome, %s!" % name)`  
💬 The computer greets you: it will replace `%s` with your name from the variable.  
👋 Example: Welcome, Aydai!

---

🌟 **3.** `wish = input("What would you like?")`  
🎁 The computer asks what you want and saves the answer in the variable `wish`.  
✍️ Example: If you type "ice cream", then `wish` will become "ice cream".

---

<div style="page-break-after: always;"></div>

## Choice

```python
if wish == "Ice cream":
    print("Please enjoy the coolness and sweetness")
elif wish == "Shawarma":
    print("Here is your hot, juicy shawarma! Enjoy your meal!")
else:
    print("Hmm, interesting! I will try to find that for you.")
```

🌟 `if wish == "Ice cream":`  
🍦 If you choose "Ice cream", the computer will say:  
`Please enjoy the coolness and sweetness`

---

🌟 `elif wish == "Shawarma":`  
🌯 If you choose "Shawarma", the computer will say:  
`Here is your hot, juicy shawarma! Enjoy your meal!`

---

🌟 `else:`  
❓ If you typed something else, like "Pizza" or "Book", the computer will say:  
`Hmm, interesting! I will try to find that for you.`

---

<div style="page-break-after: always;"></div>

## Repetition

```python
children = 5
apples = 10

for i in range(children):
    if apples > 0:
        apples -= 1
        print("Child %d got an apple. Apples left: %d" % (i + 1, apples))
    else:
        print("Apples are finished!")
        break
```

🌟 `children = 5`, `apples = 10`  
🍏 Let's imagine we have five children to whom we need to distribute all the apples, and we have ten apples.

🌟 `for i in range(children)`  
🔄 The loop will repeat 5 times, once for each child.

---

🌟 `if apples > 0:`  
❓ The program checks if there are any apples left. If yes, we continue distributing.

🌟 `apples -= 1`  
🍎 We give away one apple, and the number of apples decreases by 1.

🌟 `print("Child %d got an apple. Apples left: %d" % (i + 1, apples))`  
👦 The program informs which child got an apple and how many apples are left.

---

🌟 `else:`  
❌ If there are no apples left, the program moves to this part.

🌟 `print("Apples are finished!")`  
🚫 The program informs that there are no more apples.

🌟 `break`  
⏹️ The loop stops, and the apple distribution ends.

---