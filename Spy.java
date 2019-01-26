
public class Spy {
	static int rev_num = 0;
	static int base_pos = 1;

	static int reverse(int num) {
		if (num > 0) {
			reverse(num / 10);  					//Recursive method to reverse string
			rev_num += (num % 10) * base_pos;		//this removes last digit from integer
			base_pos *= 10;							//then multiplies by bas_pos, recursively called
		}											//to reverse the string.  
		return rev_num;
	}

}
