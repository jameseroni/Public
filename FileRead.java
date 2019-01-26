
/*Pseudocode:
 * Define variables for user input
 * 		Loop through user input checking file name input
 * 		Accomplish filename input with equals method
 * 		If file is equal to correct name
 * 			Then attempt to sort the file (using insertionSort method from Sorter class)
 * 			If file does not mean specifications 
 * 			Throw exceptions for various specifications
 * 		Prompt user for restart of program or allow user to quit
 *
 *Program 5, James Bellamy
 *Due Nov 13, 2018
 * This is a user interface class for reading the input of a file,
 * then outputting that input into an array.  once the contents
 * of the file is outputted to the array, the array will be sorted
 * using a separate class.  The array will be displayed once before 
 * the sort, and once after.  This UI also includes a section for 
 * taking user input to receive name of file from user.  This program
 * depends on the file being in the right location and the file being read
 * falling within the parameters of the type double as per the program specs.
 * Name of file to be sorted is "Floats.txt"
 */
import java.util.Scanner;
import java.io.*;

class FileRead {
	public static void main(String[] args) throws IOException {
		String f = "";
		String loop = "y";
		Scanner scanText = new Scanner(System.in);
		// Sentinel loop for restarting if user desires
		while (loop != "q") {

			System.out.println("Please enter a file name (contents will be sorted in descending order): ");
			f = scanText.nextLine();
			System.out.println("Would you like to sort (s) or quit (q)?");
			loop = scanText.nextLine();
			if (loop.equals("q")) {
				System.out.println("GoodBye");
				System.exit(0);
			}

			try {
				String q = "";
				// Opens file based on user input, for reading into array.
				File file = new File(f); // create a File object
				// this Scanner is used to read from the file
				Scanner scan = new Scanner(file);

				int count = -1;
				double[] content = new double[10];
				while (scan.hasNext()) {

					content[++count] = Double.parseDouble(scan.nextLine());
				}
				System.out.println("Before: ");
				for (double val : content)
					System.out.print(val + ", ");
				System.out.println("(Unsorted)");
				System.out.println("After");
				Sorter.insertionSort(content);
				for (double val : content)
					System.out.print(val + ", ");
				System.out.print("(Sorted)");
				System.out.println();
				scan.close();
				// Exceptions
			} catch (FileNotFoundException ex) {
				System.out.println("File not found");
			} catch (NumberFormatException ex) {
				System.out.println("Your file has the wrong data type!");
			} catch (ArrayIndexOutOfBoundsException ex) {
				System.out.println("Your file has the wrong index for the array!");
			} catch (NullPointerException ex) {
				System.out.println("Your array has pointed to a null object!");
			} catch (Exception ex) {
				System.out.println("Something went wrong, try again.");
			}
			// Quit program on user request
			System.out.println("Run program again? (any key for yes, q for quit)");
			String quit = "";
			quit = scanText.nextLine();
			if (quit.equals("q"))
				System.exit(0);
		}
	}
}
