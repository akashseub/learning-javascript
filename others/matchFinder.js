function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please input valid strings";
    }

    let index1 = 0;
    let index2 = 0;

    while (index1 < string1.length) {
        if (string1[index1] === string2[index2]) {
            let tempIndex1 = index1;
            let tempIndex2 = index2;

            while (tempIndex1 < string1.length && tempIndex2 < string2.length && string1[tempIndex1] === string2[tempIndex2]) {
                tempIndex1++;
                tempIndex2++;
            }

            if (tempIndex2 === string2.length) {
                return true;
            }
        }

        index1++;
    }

    return false;
}

const inputString1 = "John Doe";
const inputString2 = "ohn";
const result = matchFinder(inputString1, inputString2);
console.log(result);