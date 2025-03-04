import random


number = random.randint(0, 100)
while True:
    
    guess = int(input("Угадай число от 0 до 100"))
    if guess == number:
        print("Ты угадал!")
        break
    if guess < number:
        print("Your number is less")
    if guess > number:
        print("Your number is bigger")


