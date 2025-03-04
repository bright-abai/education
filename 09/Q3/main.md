import random

number = random.randint(0, 100)
guess = -1

while guess != number:
    guess = int(input("Угадай число от 0 до 100\n"))

    if guess < number:
        print("Попробуй больше")
    elif guess > number:
        print("Попробуй меньше")
    else:
        print("Ты угадал!")


        