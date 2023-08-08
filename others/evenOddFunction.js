function evenOdd(number){
    if(number % 2  === 0){
        // console.log("Even Number");
        return true;
    }
    else{
        // console.log("Odd Number");
        return false;
    }
}

const myNumber = evenOdd(10); 

console.log(myNumber);