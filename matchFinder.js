function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "Please input valid strings";
    }

    let string1Index = 0;
    let string2Index = 0;

    while(string1Index < string1.length){
        if(string1[string1Index]  === string2[string2Index]){
            let tempString1Index = string1Index;
            let tempString2Index = string2Index;

            while(tempString1Index < string1.length && tempString2Index < string2.length && string1[tempString1Index] === string2[tempString2Index]){
                tempString1Index ++;
                tempString2Index ++;
            }

            if(tempString2Index === string2.length){
                return true;
            }
        }
        string1Index ++;
    }
    return false;
}

console.log(matchFinder("John Doe", "ohn"));