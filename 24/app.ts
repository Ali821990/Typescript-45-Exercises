let Bike = "Bike";
let upperCasebike = "BIKE";

let Five = 5;
let Ten = 10;

let fruits = ["Mango", "Orange", "Strawberry"];


console.log ("\nIs bike is euqual to bike?")
console.log (Bike == Bike);

console.log ("\nIs bike is not equal to bike?")
console.log (Bike != Bike);

console.log ("\nIs BIKE is equal to bike after converting to lowercase?");
console.log (upperCasebike. toLowerCase() == "bike" );

console.log ("\nIs BIKE is not equal to bike after converting to lowercase");
console.log (upperCasebike. toLowerCase() != "bike" );

console.log ("\nIs Five is equal to 5?");
console.log (Five == 5);

console.log ("\nTen is not equal to 10?");
console.log (Ten != 10);

console.log ("\nIs ten is greater than 5?");
console.log (Ten > 5);

console.log ("\nIs ten is less than 5?");
console.log (Ten < 5);

console.log ("\nIs ten is greater than or equal to 5?");
console.log (Ten >= 5);

console.log ("\nIs ten is less than or equal to 5?");
console.log (Ten <= 5);

console.log ("\nIs ten is not equal to 5 and ten is greater than 5?");
console.log (Ten != 5 && Ten > 5);

console.log ("\nIs ten is greater than 5 or ten is equal to 5?");
console.log (Ten > 5 || Ten == 5);

console.log ("\nIs Mango in my fruits array?");
console.log(fruits.includes("Mango"));

console.log ("\nIs Mango is not in my fruits array?");
console.log(fruits.includes("Mango"));