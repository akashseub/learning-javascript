function cubeNumber(number) {

    if (typeof number !== 'number') {
      return "Please input a valid number";
    }

    const cube = number * number * number;
    return cube;
  }
  

  const inputNumber = 'hi';
  const result = cubeNumber(inputNumber);
  console.log(result);
  