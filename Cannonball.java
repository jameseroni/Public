//Base case is 1, for layer 1.  
//Will return from layer 1, adding each factor as it climbs back up

public class Cannonball {
	public static int layer (int n) {
		
		if (n == 1)							//This takes integer of n
			return 1;						//then returns 1 if 1
		else								//if not 1, then returns n*n + n-1  ( previous layer )
			return n * n + layer(n-1);
		
	}
	
}
