/*Program #6 created by James Bellamy
This program includes a static method for a reverse string,
a static method for cannonball  problem and this user input class
*/
import java.util.Scanner;
public class Input {
	public static void main(String args[]) {
		Scanner scan = new Scanner(System.in);
		int value = 0;
		int spy = 0;
		String restart;
		System.out.println("Please enter a non-negative value for number of layers(enter negative to quit)");
		value = scan.nextInt();
		System.out.println("Now please enter the number of troops you saw(enter negative to quit");
		spy = scan.nextInt();
		while (value >= 0 && spy >=0 ) {
			System.out.println("You entered layer " + value);
			System.out.println("The number of cannonballs in your pile is: " + Cannonball.layer(value));
			System.out.println("You also entered " + spy + " for the number of troops you saw.");
			System.out.println("Your secret code in reverse order is " + Spy.reverse(spy));
			System.out.println("Would you like to enter more values?");
			scan.nextLine();
			restart = scan.nextLine();
			if (restart.equalsIgnoreCase("yes")) {
				System.out.println("Please enter a non-negative value for number of layers(enter negative to quit)");
				value = scan.nextInt();
				System.out.println("Now please enter the number of troops you saw(enter negative to quit");
				spy = scan.nextInt();
			}
			else {
				System.exit(0);
				
			}
		}
	}
}
