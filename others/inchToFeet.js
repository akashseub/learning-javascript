function inchToFeet(inch){
    const feet = inch/12;
    return feet; 
}

const myHeight = 69;
console.log("My height", inchToFeet(myHeight));