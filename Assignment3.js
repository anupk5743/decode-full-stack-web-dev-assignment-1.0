//       HOF and functional programming

/****
 * Q1.--> You are building an e-commerce website. Write a function that calculate the total price of a customer's order.
 * You're given an array of items, each with a price property. Use the forEach method to iterate through the array
 * and sum up the prices to get the total order amount
 */

const orderList = [
    {name: "Laptop",price: 120000},
    {name: "Mobile", price: 70000},
    {name:"Mobile Charger", price: 1500},
    {name: "Laptop charger", price: 10500},
];
let sum= 0;
orderList.forEach((data)=>(sum+=data.price));
console.log('the total price is Rs.$',{sum})

/*****
 * Q2.--> in this challenge, your task is to create a function that generated a random number and prints it to the 
 * console every 2 second the program should keep printing new random numbers indefinitely, with a 2-second delay between each number.
 */

function randomNumberGenerator() {
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber)
}

function printWithInterval() {
    randomNumberGenerator();
    setInterval(randomNumberGenerator,2000);
}
printWithInterval();


/****
 * Q3.--> You are given an array of expense objects representing monthly expenses. Each object has pproperties 
 * amount and category. Use the map method to create a new array that include the calculated tax for each expanses.
 * assume a tax rate of 10%.
 */

let expanse = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"},
];
let expansesWithTax = expanses.map((expanse)=>{
    let tax = expanse.amount*0.1;
    return{...expanse,tax:tax};
});
console.log("Expenses with tax:",expansesWithTax)


/****
 *Q4.--> Using the same array of expenses  objects, use the filter method to create a new array that include only the expanses related to the category
 * "Groceries"
 */

let expanses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50,category: "entertainment"},
];
let GroceriesExpanses = expanses.filter(
    (expanse) => expanse.category=== "Groceries"
);
console.log("Groceries Expanses:", GroceriesExpanses);


/***
 *Q5.--> Using the same array of expanse objects use the reduce method to calculate the total amount of all expanses
 */

let expansess = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50,category: "entertainment"},
];
let totalExpanses = expansess.reduce((acc, expanse) => acc + expanse.amount,0);

console.log("Total Expanses:",totalExpanses)



/****
 * Q6.--> You have a list of expanses each with an amount and a category Now create a function named 
 * categorizeExpanses that, based on the expanses amount returns either high expanse if it is more than 100 
 * or low expanse otherwise afterward, use this function along with the map method to generate a new array called
 * categorizedExpanses, where each element represent the category for the corresponding expanses in the original 
 * list. finally, print out the categorizedExpanses array
 */

let Expanses =[
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50,category: "entertainment"},
];

function categorizeExpanse(expanse) {
    if(expanse.amount > 100) {
        return "High expanse";
    } else {
        return "Low expanse"
    }
}

let categorizedExpanses = expanses.map((expanse) =>
categorizeExpanse(expanse))
console.log("Categorized Expanses:", categorizedExpanses);


/****
 * Q7.--> Consider an array of number named originalNumbers with the values [2,5,8,10,3]. your task is to use 
 * the forEach method to iterate through each element in the array. during the iteration double the value of each number.
 *  after completing the iteration display the modified array.
 */

let originalNumbers = [2,5,8,10,3];
originalNumbers.forEach((Number, index, array) => {
array[index]= number * 2;
});

console.log("Double Numbers:", originalNumbers);


/****
 * Q8.---> using the same array of numbers use the forEach method to collect and store only the even numbers in a 
 * new array.
 */

let evenNumbers = [];

originalNumbers.forEach(number=>{
    if(number%2===0){
        evenNumbers.push(number);
    }
});

console.log("Even Numbers:", evenNumbers);


