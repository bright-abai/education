import java.util.Random;
import java.util.Scanner; 

public class Main{
  
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);   

        Random rand = new Random();
        int secret = rand.nextInt(100) + 1;
        int guess = -1;

        while (true) {
            System.out.println("Guess a number from 1 to 100");
            guess = sc.nextInt();

            if (guess > secret) {
                System.out.println("Try lesser number");
            }
            else if (guess < secret) {
                System.out.println("Try bigger number");
            }
            else {
                System.out.println("Whooraay! You won!");
            }
        }
    }
}