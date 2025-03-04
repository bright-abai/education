Любая переменная в java создаётся с указанием типа данных и её названием, а также конкретным значением
```
int number = 42;
String name = "Delicious in Dungeon"
Scanner sc = new Scanner(System.in)
```

Переменые можно менять, сочетать друг с другом если они одного типа данных. Если они разные, то нужно привести к одному.
```
String input = sc.next();
int number = Integer.parseInt(input);
int age = sc.nextInt();
```

Для того чтобы прочитать данные от человека, используется переменная типа `Scanner`, и семейство методов `next`.

Чтобы уменьшить количество знаков после запятой, используйте следующее:
```
float pi = 3.14159f
String formatted = String.format()
print(String.format("))
```