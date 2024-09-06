/****
 * Q1.--> Create an arrow function called square that takes a number as an argument and returns its square use the 
 * arrow function to calculate the square of a given number and display the result.
 */

const square = (num) => num * num;

const number = 10;
const squareNumber = square(number);
console.log("Square:",squareNumber)


/****
 * Q2.--->  The following is an arrray of 10 student ages:
 * =>const ages = [19,22,19,24,20,25,26,24,25,24]
 * Sort the array and find the min and max age.
 * find the median age (one middle item or two middle items divided by two)
 * find the average age (all items divided by number of items)
 * find the range of the ages (max minus min)
 * compare the value of (min - average) and (max - average), use abs()method
 */

const ages = [19,22,19,24,20,25,26,24,25,24];

//Step 1: Sort the array
ages.sort((a,b)=> a-b);

//step 2: find the min and max age
const minAge =  ages[0];
const maxAge = ages[ages.length-1];

// step 3: find the median age
let medianAge;
if(ages.length % 2 === 0){
    const mid1 = ages[Math.floor(ages.length/2)-1];
    const mid2 = ages[Math.floor(ages.length/2)];
    medianAge = (mid1 + mid2)/2;
} else{
    medianAge = ages[Math.floor(ages.length/2)];
}

//step 4: find the average age
const sumAges = ages.reduce((sum, age)=> sum + age,0);
const averageAge = sumAges/ages.length;

//step 5: find the range of ages
const ageRange  =  maxAge - minAge;

//step 6: compare (min - average) and (max - average)
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

console.log('Sorted ages:', ages);
console.log('Min age:', minAge);
console.log('Max age:',maxAge);
console.log('Median age:',medianAge);
console.log('average age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min - average difference', minDifference);
console.log('Max - average difference',maxDifference);



/***
 * Q3.--> Create a map to store contact information (name,age,email,location)
 * and implement a function to retrieve contact details by name
 */

//Creating a Map 
const contactMap = new Map();

//Adding contacts to the Map
contactMap.set("Anup",{
    age : 24,
    email: "anupnm05maurya@gmail.com",
    location: "Varanasi",
});
contactMap.set("Rahul",{
    age : 25,
    email: "rahulyadav2@gmail.com",
    location : "Gazipur",
});
contactMap.set("Rai Sahab",{
    age : 22,
    email: "raisahab@gmail.com",
    location: "Delhi",
});

//Function to retrieve contact details based on name
function getContact(name){
    return contactMap.get(name);
}
console.log(getContact("Anup"));


/***
 * Q4.--> Create two object person1 and person2 with properties name and age create a function "introduce" that 
 * prints "Hello i am [name],and i am [age] year old."  use the call method to make person2 introduce itself using the introduce function.
 */

const person1 = {name:"Anup", age:25};
const person2 = {name:"krishna", age:22};

function introduce(){
    console.log('Hello, I am ${this.name},and i am ${this.age} years old.');
}

/****
 * Q5.---> You are developing a program to manage a list of unique items. write a javascript program that uses
 * a set to store a collection of unique numbers. use the map object to associate each number with its square.
 * finally, print both the unique numbers and their corresponding squares.
 */

let uniqueNumbers = new Set([3,7,5,7,2,3,8]);
number

let numberSquareMap = new Map();
uniqueNumbers.forEach(number =>{
    numberSquareMap.set(number,number * number)
});

console.log("Unique Numbers:");
console.log(Array.from(uniqueNumbers).join(", "));

console.log("\nNumber-Square Map:");
numberSquareMap.forEach((square,number)=>{
    console.log('${number}${Square}');
});


/****
 * Create a simple javaScript function named displayInfo that takes two parameters(name and role) and logs a message
 * Use call to invoke the displayInfo function with specific arguments.
 * use apply to invoke the displayInfo function with arguments passed as an array
 * Create another function named greet that logs a greeting with this context
 * use bind  to create a new function boundGreet with a specific context and log the greeting.
 */

//Task 1: Create the displayInfo function
function displayInfo(name, role){
    console.log('Name: ${name}, Role: ${role}');
}

//Task 2: Use call to invoke displayInfo with specific arguments
displayInfo.call(null,"Anup","Developer");

//Task 3: Use apply to invoke displayInfo with argument as an array
displayInfo.apply(null,["Mithun", SDE]);

//Task 4: Create the greet functon 
function greet(){
    console.log('hello,${this.name}!');
}

//Task 5: Use bind to create a new function with a specific context
const user = {name: "PK"};
const boundGreet = greet.bind(user);
boundGreet();


/****
 * Q7.--> Tasks:
 * Create an object named calculator with methods add, subtract and multiply.
 * Implement the calculate method in the calculator object, which takes an operation (add, subtract or multiply)and two numbers
 * use call to perform an addition operation using the calculate method.
 * use apply to perform a multiplication operation using the calculate method with argument as an array.
 * Create another objects named discountCalculator with a discount percentage property and a method applyDiscount.
 * use bind to create a new function calculateDiscount that is bound to the discountCalculator object and can be reused
 */

//Task 1: Create the calculator
const calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function (a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    calculate: function(operation,a,b){
        if(operation === 'add'){
            return this.add(a,b);
        }else if(operation==='subtract'){
            return this.subtract(a,b);
        }else if(operation === 'multiply'){
            return this.multiply(a,b);
        }
    },
};

//Task 3: Use call to perform an addition operation
const additionResult = calculator.call(calculator,'add',5,3);
console.log('Addition Result : ${AdditionResult}');

// task 4: use apply to perform a multiplication operation with argument as an array
const multiplicationResult =  calculator.calculate.apply(calculator,['multiple',4,2]);
console.log('Multiplication Result: ${multiplicationResult}');

// Task 5: Create the discountCalculator object
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(amount){
        return amount - (amount * this.discountPercentage)/100;
    },
};
// Task 6: Use bind to create a new function bound to discountCalculator
const calculateDiscount= discountCalculator.applyDiscount.bind(discountCalculator);
const discountAmount = calculateDiscount(100);
console.log('Discounted amount: ${discountedAmount}');