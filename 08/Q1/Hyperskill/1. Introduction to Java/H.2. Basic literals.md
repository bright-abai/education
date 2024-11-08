Regardless of its complexity, a program always performs operations on numbers, strings, and other values. These values are called **literals**. There are many different sorts of literals in Java, but in this topic we will focus only on a few of them: the ones that surround us all the time in everyday life.
![](basic%20literals.webp)
Consider literals as groceries. To use them, usually you need to store them somewhere. Typically, they are stored in ==variables== [^1], which you can think of as containers designed to hold a specific type of data.

Variables can only store matching data. You wouldn't want to accidentally put honey in a cardboard cereal box or pour cereal into a salt shaker. To prevent such mistakes, learn to distinguish between the basic literals: integer numbers, strings, and characters.
## Integer numbers

You use these numbers to count things in the real world as natural numbers. Integer numbers also include zero and negative ones. Here are several examples of valid integer number literals separated by commas: `0, 1, 2, 10, 11, -100`.

Here is how integers can be used in code:

```java
int numApples = 1000;
```

Reading code is crucial for anyone in IT, so let's parse it together. Here you put the integer 1000 into a variable of an integer type, called numApples. This is similar to filling a container with its designated contents!

You can increase code readability by dividing the digit into blocks with underscores: `1_000_000` is more readable than `1000000`. So let's pack our apples to make selling them easier:

```java
int numPackedApples = 1_000_000;
```

Fear not if these code snippets aren't 100% clear to you yet! They aim to help you develop the skill of code reading. Just grasp the overall meaning and follow your study plan, and you'll be writing your own code in no time!

## Characters

A character is a single symbol, denoted with single quotes. You can use ==character literals[^2]== to represent single letters like `'A', 'x'`, digits from `'0'` to `'9'`, whitespaces `(' ')`, and other characters or symbols like `'$'`.

Be mindful of quotes and avoid confusing characters representing digits with the digits themselves:

```java
char charOne = '1'
int numOne = 1
```

Fun fact: characters sit between integers and strings: they resemble strings, yet you can do math with them.

## Strings

A string is a sequence of characters, encapsulated by double quotes. It represents text-based information, such as an advertising line, a webpage address, or a website login name. Here are some valid examples: `"text", "I want to know Java", "123456", "e-mail@gmail.com"`. As you can see, a string can include letters, digits, whitespaces, and other characters altogether.

A string consisting of a single character like `"A"` is also a valid string, but do not confuse it with the `'A'` character. Note the difference in quotes!

```java
char singleQuoted = 'A'
String doubleQuoted = "A"
```

## Printing literals using variables

In Java, assigning literals to variables and printing them using `System.out.println` is a fundamental operation. To assign a literal to a variable, you first declare[^3] the variable with its type and then initialize it with a literal value. For instance, you might declare an integer variable like `int number = 42;`, where `42` is the literal value assigned to `number`. Similarly, for a string variable, you could write `String greeting = "Hello";`, where `"Hello"` is the string literal assigned to `greeting`. Once the variables are initialized, you can use `System.out.println` to print their values to the consolе:

```java
public class Main {
    public static void main(String[] args) {
        int number = 42;
        String greeting = "Hello";
        
        System.out.println(number);
        System.out.println(greeting);
    }
}
```

For example, `System.out.println(number);` will output the value `42`, and `System.out.println(greeting);` will display `Hello`. This approach allows you to store and manipulate literal values in variables and then output them as needed for various purposes in your Java programs.

[^1]: In Java, a variable is a named storage location that is used to store a value of a specific type. It is declared with a specific data type, which determines the kind of value that can be stored in it. Every variable has a unique name, also known as an identifier, which is used to access its value. Variables can be declared and initialized in a single statement, and their value can be accessed and modified using the name. It's important to note that variables can be changed, meaning you can assign a new value to a variable without having to declare it again.

[^2]: In Java, a character literal is a single symbol, denoted with a single quote, that represents a single character such as a letter, digit, whitespace, or other symbol. It's important to distinguish character literals that represent digits from the digits themselves. Character literals are similar to strings, but you can perform mathematical operations with them. A string, on the other hand, is a sequence of characters, enclosed by double quotes, that represents text-based information. Character literals are a type of literal, along with number and string literals, that are used to represent values in Java

[^3]:  In Java, a declaration is a statement that introduces a variable, method, or class into the program. | It specifies the type of the entity being declared, its name, and other relevant information such as access modifier, return type (for method), and initial value (for variable). For example, the declaration of a method may include its name, return type, access modifier, and parameter list. Declarations are essential for Java to understand the structure and behavior of the program. Incorrect declarations can lead to compilation errors. In the context of variables, a declaration specifies the type, name, and initial value of a variable. The type of a variable determines what possible operations can be performed on the variable and which value can be stored in it. Every variable has a name (also known as an identifier) to distinguish it from others. Before using a variable, it must be declared. The general form of a variable declaration is: `type identifier = value;` It's important to note that a declaration is not the same as an assignment.

