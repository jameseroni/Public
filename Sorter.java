public class Sorter {

	// Sort the list
	//
	public static void insertionSort(double[] list) {
		int numVals = 10;
		// For each unsorted integer
		for (int j = 1; j < numVals; j++) {

			// Keep swapping with its left neighbor
			// until it is larger or equal to left neighbor
			int k = j;
			while (k > 0 && list[k - 1] < list[k]) {
				double temp = list[k - 1];
				list[k - 1] = list[k];
				list[k] = temp;
				k--;
			}
		}
	}

}