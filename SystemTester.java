import java.lang.reflect.Array;
import java.util.Scanner;
//This program is the SystemTester and its main
//purpose is to have a main method, which tests
//the Computer class and ComputerStore class
//to ensure cohesion between classes.
public class SystemTester {
	public static void main(String args[]) {
		Scanner scan = new Scanner(System.in);
		String search;
		String searchResult;
		ComputerStore cpu1 = new ComputerStore();
		//addition of 10 computer systems to ComputerStore array
		cpu1.add("Pentium II", 32, "2080", "Asus 370", "Corsair", 5, 123, 5);
		cpu1.add("Pentium I", 16, "Nvidia 1080", "Asus 270", "CoolerMaster1", 5, 123, 5);
		cpu1.add("Pentium III", 4, "GTX 1060", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("AMD", 4, "GTX 980", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("AMD Ryzen", 4, "GTX 680", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("Core I5", 4, "GTX 1080ti", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("Core I7", 4, "GTX 1060 SLI", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("Core I9", 4, "GTX 780", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("AMD Ryzen 2", 4, "Voodoo2", "Gigabyte", "Corssair 2", 5, 123, 5);
		cpu1.add("I7 5820k", 4, "Voodoo1", "Gigabyte", "Corssair 2", 5, 123, 5);
		//add second ComputerStore array
		
		ComputerStore cpu2 = new ComputerStore();
		System.out.println(cpu1);
		cpu2.add("Haswell", 64, "Nvidia 1080", "Aztek", "Corsair", 3.5, 455, 5.5);
		//Initialization of loop to come, take String from user to compare to search
		System.out.println("Please enter a CPU to search for (Press q to quit)");
		search = scan.nextLine();
		//Sentinel loop that searches for user input CPU
		while (!"q".equals(search)) {
			searchResult = cpu1.findSys(search);
			if (searchResult != null) {
				System.out.println(searchResult);
			} else {
				System.out.println("not found");
			}
			
			System.out.println("Please enter a CPU to search for (Press q to quit)");
			search = scan.nextLine();
		}
		//A printing of the cpu1 array
		System.out.println(cpu1);
	}
}
