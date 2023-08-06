function findBest6CommonNumbers(arrays) {
    // Step 1: Merge all arrays into a single array
    const mergedArray = arrays.flat();
  
    // Step 2: Count the occurrences of each number
    const numOccurrences = {};
    for (const num of mergedArray) {
      numOccurrences[num] = (numOccurrences[num] || 0) + 1;
    }
  
    // Step 3: Sort the numbers based on their occurrences
    const sortedNumbers = Object.keys(numOccurrences).sort((a, b) => numOccurrences[b] - numOccurrences[a]);
  
    // Step 4: Retrieve the top 6 numbers with the highest occurrences
    const best6Numbers = sortedNumbers.slice(0, 6).map(Number);
  
    return best6Numbers;
  }
  
  // Example: 10 arrays with different numbers
  const arrays = [
    [19, 25, 27, 28, 29, 48],
    [2, 23, 29, 35, 39, 45],
    [8, 10, 21, 27, 34, 36],
    [1, 5, 18, 20, 38, 44],
    [10, 20, 26, 39, 44, 46],
    [18, 25, 27, 32, 35, 39],
    [13, 16, 28, 34, 38, 40],
    [2, 8, 30, 33, 39, 41],
    [14, 30, 34, 40, 45, 49],
    [5, 15, 16, 30, 37, 46] //up to 29 jun 2023
  ];
  
  const best6CommonNumbers = findBest6CommonNumbers(arrays);
  console.log("Best 6 common numbers:", best6CommonNumbers);
  