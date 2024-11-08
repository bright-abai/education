*This material is a direct copy of [java basics course](https://hyperskill.org/courses/17-java-developer?utm_source=homepage) on hyperskill.org from JetBrains*
*H.x. notation signifies this*
![](java.webp) 

Ever wondered why Java's logo is a steaming cup of coffee? The creators of Java, while brainstorming a name for their new language, chose 'Java', a slang term for 'coffee'. Just as coffee fuels our day, Java powers the tech world with its robust and versatile features.

In this topic, we will explore why Java has been a popular choice among developers for over two decades and how it has brewed success in various domains. We will also introduce you to your very first Java program. So, grab your cup of coffee and join us on this exciting journey into the world of Java!
# What is Java 

**Java** is a high-level, class-based, ==object-oriented==[^1] programming language. James Gosling at Sun Microsystems (now part of Oracle Corporation) designed it, and it was released in 1995. The language was developed with the "**Write Once, Run Anywhere**" (WORA) philosophy. This principle underscores Java's key feature - **platform independence**, allowing the same Java program to run on multiple platforms without modifications.

Java is designed to be both **simple** and **powerful**. It borrows its ==syntax==[^2] from C and C++, but eliminates certain low-level programming complexities, such as explicit memory management and multiple inheritance found in C++. Unlike these two languages, Java does not require you to manually clean the application memory, as it has a garbage collector that performs this task automatically. Known for its robustness, security, and simplicity, Java has become a popular choice among developers worldwide. It supports different programming techniques, including generic programming, multithreaded and concurrent programming, and functional programming.

# Where is Java applied

Let's go through a typical day and see how Java impacts our lives without us even realizing it.

Imagine waking up to your Android alarm. As you reach out to snooze it, you're interacting with an application built using Java. You decide to work on a project using a development tool like IntelliJ IDEA or Eclipse. As you write and ==compile==[^3]your code, Java is there, forming the backbone of these development tools. During lunch, you enjoy a Netflix show or Spotify music, both services powered by Java. Later, you finish the project and receive payment. Behind the scenes, Java is working diligently, processing your request. In the evening, you unwind with a game of Minecraft, yet another Java-based application.

Java is like a silent friend, aiding us and making our lives easier in numerous ways, from the moment we wake up till we call it a day.

## A sample of Java

Let's create the classic "Hello, World!" program, a friendly greeting from your computer.

Here's the program:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Don't worry if it looks a bit cryptic now. You'll get the hang of it soon.

This program simply prints the phrase "Hello, World!" to the console. But there's a lot going on here:

- **public class HelloWorld** -In Java, all the code you write will be inside classes. We're telling Java we're creating a new public class (a kind of blueprint) and we're naming it HelloWorld. Every Java application has to have at least one class.
- **public static void main(String[] args)** - This is the heart of our program, where the execution begins.
- **System.out.println("Hello, World!");** - These are our program's first words! This ==command== [^4] instructs Java to print "Hello, World!" to the console via the `System.out.println()` method, providing instant feedback. 

Note that in Java code, we use different types of brackets, and if you open any bracket, you are required to close it.

And there you have it, your first Java program! It's a modest step, but it marks the beginning of an exciting journey into Java programming.

[^1]: In Java, object-oriented programming (OOP) is a programming paradigm that revolves around the concept of objects, which can represent real-world entities or abstract concepts. Each object has its own state, which is stored in fields, and behavior, which is defined by methods. Objects are instances of classes, which serve as blueprints that define the properties and methods of their corresponding objects. OOP emphasizes encapsulation, inheritance, and polymorphism, making software design more reusable and maintainable. It is a good practice to use interface-oriented design, which means relying on interfaces instead of concrete implementations. Interfaces define a contract that classes must adhere to, allowing for greater flexibility and modularity in programming. Java is primarily an object-oriented programming language, but it also supports other programming paradigms, such as functional programming. OOP provides a way to create well-structured and readable programs by allowing developers to define the behavior of objects and classes using methods.

[^2]: In Java, syntax refers to a set of rules that define how a program needs to be written in order to be valid. It includes the order of components, such as statements written from top to bottom in a sequential manner, and the use of specific symbols, such as semicolons to terminate a statement. Java has its own specific syntax, which includes the use of keywords, identifiers, literals, operators, and separators. These tokens must adhere to the specific rules of the Java syntax and are separated by whitespace.

[^3]: In Java, a compile is the process of translating source code into bytecode that can be executed by the Java Virtual Machine (JVM). | During compilation, the Java compiler checks the code for errors, such as typos, incorrect method invocations, and mismatched variable declarations. If any errors are found, the code will not compile and an error message will be generated. To avoid compile-time errors, programmers can use tools like Integrated Development Environments (IDEs) with static code analyzers, which can identify and highlight potential errors before the code is compiled.

[^4]: In Java, a command is a behavioral design pattern that encapsulates a request or action as an object, allowing for greater flexibility and decoupling between the invoker and the implementer of the command. | The command pattern is commonly used in GUI button and menu items, networking, and transactional behavior. It can also be used to implement undo functionality and create macro commands. The command pattern typically involves an interface with a method that performs the command, and one or more classes implementing this interface that encapsulate the data needed to execute the command.

