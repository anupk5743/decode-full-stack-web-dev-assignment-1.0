/***
 * Q1.->  write a program that grades student based on their marks 
* if greater than 90 than A
* if  between 70 and 90  than a B grade
* if between 50 and 70 than C grade
* below 50 then an F grade
 */

const marks = 71;
let grade;

if (marks >= 90) {
    grade = "A";
} else if (marks >= 70 && marks <+ 90){
    grade = "B";
} else if (marks >= 50 && marks < 70){
    grade = "C";
}else{
    grade ="F";
}
console.log('Your grade is =',{grade});


/*****
 * Q2.--> generate numbers between any two given numbers
 * const num1 =  10;
 * const num2 = 25;
 * output 11, 12, 13,......,25
 */

const num1 = 10;
const num2 = 25;

for(let i = num1 + 1; i <= num2; i++){
    console.log(i);
}


/*****
 * Q3.--> use a nested ternary operator to check that a number is positive , negative or zero . You have to print 
 * "positive" if the number is positive and similarly for negative and zero also
 */


const number = 0 ;
number > 0 ? console.log("Positive"):number<0 ? console.log("Negative"):console.log("Zero")


/***
 * Que4.--> Describe the usage of the comma operator in javascript and provide an example 
 * Answer.--> comma operator allows us to evaluate multiple expression in a single statement like declaring multiple 
 * variable in a single statement separating them with the comma operator
 */
const a = 10, b = 20, c = 30;
console.log(a,b,c);



/****
 *Q5.--> you are creating a basic login system. make a login function with two things a username and a 
 password . check if the username is admin and the password is 12345. if they are both correct. show login successful .
 if not show invalid credentials
 */

 let username = "admin";
let password = "12345";

if(username=== "admin " && password === "12345"){
    console.log("login successful");
}else{
    console.log("invalid credentials")
}


/*****
 * Q6.-->You are working on an e commerce platform. write a javascript pragram that takes the payment method ("credit", "debit", "paypal") as input and use 
 *  a switch statement to determine and print the processing fee associated with each payment method for example "credit" may have a processing fee of 2% "Debit" 1.5% and paypal 3%. 
 */

let paymentMethod = "credit";

switch(paymentMethod){
    case "credit":
    console.log("Processing fee for credit payment: 2%");
    break;
    case "debit":
    console.log("Processing fee for debit payment: 1.5%");
    break;
    case "paypal":
    console.log("Processing fee for paypal payment: 3%");
    break ;
    default:
    console.log("invalid payment method");
}


/****
 * Q7.--> you are building a weather application. write a javascript program that takes the current temparature as
 * input and uses the conditional (ternary) operator to determine and print the weather condition if the temparature
 * is above 30'c the conditon is "hot" otherwise it is moderate.
 */

let currentTemperature = 28;
let weatherCondition = currentTemperature>30 ? "Hot" : "Moderate"
console.log("current weather condition :",weatherCondition)


/****
 * Q8.--> You are creating to calculate the sum of numbers write a javascript program that takes a positive integer
 * as input  and uses a do while loop to calculate and print the sum of all number from 1 to the given integer
 */

let targetNumber = 8;

let sum = 0;
let currentNumber = 1;

do{
    sum += currentNumber;
} while(currentNumber<=targetNumber);
console.log("sum of numbers from 1 to target number",sum);