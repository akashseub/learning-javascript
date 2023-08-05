function oddFinder(arrayNumber){
    let oddNumber = [];
    for(let i=0; i<arrayNumber.length; i++){
        if(arrayNumber[i] % 2 !== 0){
            oddNumber.push(arrayNumber[i]);
        }
    }
    return oddNumber; 
}

function evenFinder(arrayNumber){
    let evenNumber = [];
    for(let i=0; i<arrayNumber.length; i++){
        if(arrayNumber[i] % 2 === 0){
            evenNumber.push(arrayNumber[i]);
        }
    }
    return evenNumber; 
}

function oddSum(arrayNumber){
    let oddSum = 0;
    for(let i=0; i<arrayNumber.length; i++){
        if(arrayNumber[i] % 2 !== 0){
            oddSum+=arrayNumber[i];
        }
    }
    return oddSum; 
}

function evenSum(arrayNumber){
    let evenSum = 0;
    for(let i=0; i<arrayNumber.length; i++){
        if(arrayNumber[i] % 2 === 0){
            evenSum+=arrayNumber[i];
        }
    }
    return evenSum; 
}


let numbers = [12,45,23,6,34,87,34,13];

console.log(oddFinder(numbers));
console.log(oddSum(numbers));

console.log(evenFinder(numbers));
console.log(evenSum(numbers));