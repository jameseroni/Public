
public class Recursion {
	public static int mystery(int n)	{
		if (n == 0)
			return 0;
		else if (n == 1)
			return 1;
		else 
			return n * mystery(n-1);
	}
	
	public static void main (String args[])	{
		
		System.out.println(mystery(5));
}

}
