console.log("Testing equalities with string");
console.log("banana" == "banana");
console.log("banana" == "mango");

console.log("Testing with lowercase");
console.log("Mango".toLowerCase() == "mango");

console.log("Testing with numerical values");
console.log(5 > 2);
console.log(5 < 2);

console.log("Testing with 'and' and 'or'")
console.log(true && false)
console.log(true || false)

let fruits: string[] = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple"));

console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));
