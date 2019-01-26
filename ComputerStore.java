//Program 4 created by James Bellamy, due Oct 30, 2018
//This program creats a ComputerStore class to host array of 
//Computer objects.
public class ComputerStore {
	private Computer[] systems;
	private int sysNumbers;

	//creates ComputerStore constructor, to construct array of ComputerStore objects
	public ComputerStore() {
		systems = new Computer[200];
		sysNumbers = 0;
	}
	//add method to add an object to the array.
	public void add(String c, int r, String g, String m, String p, double co, int sn, double d) {
		systems[sysNumbers++] = new Computer(c, r, g, m, p, co, sn, d);

	}
	//toString method 
	public String toString() {
		String result = "";
		for (int i = 0; i < sysNumbers; i++)
			result += systems[i].toString() + "\n";
		return result;

	}
	//find system method, will return motherboard given cpu input.
	public String findSys(String c) {
		for (int i = 0; i < sysNumbers; i++) {
			if (systems[i] != null && systems[i].getCpu().equals(c))
				return systems[i].getMotherboard();

		}
		return null;
	}
}
