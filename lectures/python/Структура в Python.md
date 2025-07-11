## Очерёдность

```python
name = input("Введите ваше имя")
print("Добро пожаловать, %s!" % name)
wish = input("Чего вы желаете?")
```

🌟 **1.** `name = input("Введите ваше имя")`  
🖥️ Компьютер спрашивает твоё имя и сохраняет его в переменную `name`.  
✍️ Пример: если ты введёшь *Айдай*, то `name` станет *"Айдай"*.

---

🌟 **2.** `print("Добро пожаловать, %s!" % name)`  
💬 Компьютер поприветствует тебя: вместо `%s` он подставит твоё имя из переменной.  
👋 Пример: Добро пожаловать, Айдай!

---

🌟 **3.** `wish = input("Чего вы желаете?")`  
🎁 Компьютер спросит, чего ты хочешь, и сохранит ответ в переменную `wish`.  
✍️ Пример: если ты введёшь мороженое, то `wish` станет "мороженое".

<div style="page-break-after: always;"></div>

## Выбор

```python
if wish == "Мороженое":
    print("Пожалуйста, наслаждайтесь прохладой и сладостью")
elif wish == "Шаурма":
    print("Вот ваша горячая, сочная шаурма! Приятного аппетита!")
else:
    print("Хм, интересно! Постараюсь найти это для вас.")
```

🌟 `if wish == "Мороженое":`  
🍦 Если ты выбрал "Мороженое", компьютер напишет:  
`Пожалуйста, наслаждайтесь прохладой и сладостью`

---

🌟 `elif wish == "Шаурма":`  
🌯 Если ты выбрал "Шаурма", компьютер напишет:  
`Вот ваша горячая, сочная шаурма! Приятного аппетита!`

---

🌟 `else:`  
❓ Если ты написал что-то другое, например "Пицца" или "Книга", компьютер скажет:  
`Хм, интересно! Постараюсь найти это для вас.`

---

<div style="page-break-after: always;"></div>

## Повтор

```python
children = 5
apples = 10

for i in range(children):
    if apples > 0:
        apples -= 1
        print("Ребёнок %d получил яблоко. Осталось яблок: %d" % (i + 1, apples))
    else:
        print("Яблоки закончились!")
        break
```

🌟 `children = 5`, `apples = 10`  
🍏 Давай представим, что у нас пятеро детей, которым нужно раздать все яблоки, которых у нас десяток

🌟 `for i in range(children)`  
🔄 Цикл будет повторяться 5 раз, по одному разу для каждого ребёнка.

---

🌟 `if apples > 0:`  
❓ Программа проверяет, есть ли ещё яблоки. Если да, мы продолжаем раздавать.

🌟 `apples -= 1`  
🍎 Мы отдаем одно яблоко, и количество яблок уменьшается на 1.

🌟 `print("Ребёнок %d получил яблоко. Осталось яблок: %d" % (i + 1, apples))`  
👦 Программа сообщает, какому ребёнку досталось яблоко и сколько яблок осталось.

---

🌟 `else:`  
❌ Если яблоки закончились, программа переходит сюда.

🌟 `print("Яблоки закончились!")`  
🚫 Программа сообщает, что яблок больше нет.

🌟 `break`  
⏹️ Цикл останавливается, и раздача яблок завершена.

---