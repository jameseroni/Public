import java.util.Scanner;
public class Recur {
	
//	public static int fib(int n){
//		if (n == 1)
//			return 1;
//		if (n == 2)
//			return 1;
//		else
//			return fib(n-1) + fib(n-2);
//	}
//	public static void f (int n)	{
//		System.out.println(n);
//		if (n > 1)
//			f(n-1);
//	}	
//	public static void g(int n)	{
//		if (n > 1)	
//			g(n-1);
//
//		System.out.println(n);
//	}
	public static void h(int n) {
		System.out.println(n);
		if (n > 1)
			h(n-1);
		System.out.println(n);
	
		

	}

	public static void main (String args[])	{
		
		Scanner scan = new Scanner (System.in);
		
		System.out.print("What is N? ");
		int n = Integer.valueOf(scan.nextLine());
////		System.out.println("Result is " + fib(n));
//		
//		System.out.println("Output from function f");
//		f(5);
////		
//		System.out.println("Output from function g");
//		g(n);
//		
		System.out.println("Output from function h");
		h(n);
//		System.out.println("Output from function h");
//		h(n);
	
	}

}