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
    [4, 6, 2, 5, 2, 5],
    [4, 5, 4, 6, 3, 6],
    [4, 6, 9, 4, 12],
    [4, 8, 12, 4, 16],
    [5, 10, 15, 4, 3, 6],
    [6, 12, 18, 4, 6, 7],
    [7, 14, 4, 4, 7, 6],
    [8, 16, 4, 6, 3, 4],
    [9, 18, 4, 7, 2, 7],
    [10, 20, 4, 6, 3, 2]
  ];
  
  const best6CommonNumbers = findBest6CommonNumbers(arrays);
  console.log("Best 6 common numbers:", best6CommonNumbers);
  