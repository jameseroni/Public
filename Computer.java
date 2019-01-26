//Program 3 created by James Bellamy Due Oct 16, 2018
//This program will create Computer objects with different data members
//and will also upgrade those data members based on setters.  This program
//also has a depreciation function and upgrade function.  This (Computer) is the class
//and the SystemBuilder class is the class used for creating the objects.
public class Computer {
	// Data Members - These belong to the class and are private.
	// They all go to new objects.
	private String cpu;
	private int ram;
	private String gpu;
	private String motherboard;
	private String psu;
	private double cost;
	private int serialnumber;
	private double depreciation;
	private String s;
	// Initial constructor with no arguments
	
	Computer() {
		cpu = "";
		ram = 0;
		gpu = "";
		motherboard = "";
		psu = "";
		cost = 0.0;
		serialnumber = 0;
		depreciation = 0.0;
	}

	// Constructor with data members
	Computer(String c, int r, String g, String m, String p, double co, int sn, double d) {
		cpu = new String(c);
		ram = r;
		gpu = new String(g);
		motherboard = new String(m);
		psu = new String(p);
		cost = co;
		serialnumber = sn;
		depreciation = d;

	}

	// Getters, allow retrieval of data members from outside of class
	public String getCpu() {
		return cpu;
	}

	public int getRam() {
		return ram;
	}

	public String getGpu() {
		return gpu;
	}

	public String getMotherboard() {
		return motherboard;
	}

	public String getPsu() {
		return psu;
	}

	public double getCost() {
		return cost;
	}

	public int getSerialnumber() {
		return serialnumber;
	}

	public double getDepreciation() {
		return depreciation;
	}
	// Setters, allow setting of data members from outside of class

	public void setCpu(String c) {
		cpu = new String(c);
	}

	public void setRam(int r) {
		ram = r;
	}

	public void setGpu(String g) {
		gpu = new String(g);
	}

	public void setMotherboard(String m) {
		motherboard = new String(m);
	}

	public void setPsu(String p) {
		psu = new String(p);
	}

	public void setCost(double co) {
		cost = co;
	}

	public void setSerialnumber(int sn) {
		serialnumber = sn;
	}

	public void setDepreciation(double d) {
		depreciation = d;
	}

	// Boolean below will compare computers to see if equal
	// based on same motherboard SN#.
	public boolean equals(Computer c) {
		if (this.serialnumber == (c.serialnumber)) {
			return true;
		} else {
			return false;
		}
	}

	// To string method will print characteristics about object.
	

	public String toString() {
		return ("CPU:\t\t" + cpu + "\n" + "RAM:\t\t" + ram + "\n" + "GPU:\t\t" + gpu + "\n" + "Motherboard:\t"
				+ motherboard + "\n" + "PSU:\t\t" + psu + "\n" + "Cost:\t\t" + "$" + cost + "\n" + "SN#:\t\t"
				+ serialnumber + "\n" + "Depreciation:\t" + "$" + depreciation + " (annually)" + "\n");
	}
	// A method to depreciate the cost of the computer
	// The formula is observed below, but this is a
	// straight line depreciation equation, calculated based
	// on the values the user passes into the function. This method
	// will show an output of annual depreciation based on useful
	// life, entered in "years" by the user.
	public void depreciate(double purchasePrice, double salvageValue, double lifeSpanYears) {
		double depreciableCost;
		double annualDepreciation;
		depreciableCost = purchasePrice - salvageValue;
		annualDepreciation = depreciableCost / lifeSpanYears;
		depreciation = annualDepreciation;
	}

	// A method to upgrade the ram or the video card
	// The method will accpet argumetns for ram (in int) and a gpu (string).
	public void upgrade(int newRam, String newGpu) {
		ram = newRam;
		gpu = new String(newGpu);
	}

}
