let myComputer = {
    processor : "i3",
    ram : "16gb",
    ssd : "120gb"
}

// console.log(myComputer.ram);

let  properties = Object.keys(myComputer);
let propertyValues = Object.values(myComputer);

// console.log(properties);
// console.log(propertyValues);

let itemsName = "ssd";
myComputer[itemsName] = "512gb";
let itemsValue = myComputer[itemsName];

console.log(itemsName, itemsValue);
// console.log(myComputer);