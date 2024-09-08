/***
 * Q1.-> Task 1: Add Product to Cart Function
Create a function addToCart that simulates adding a product to the shopping cart. The function should take
the product details (name, price, quantity) as parameters and throw errors under certain conditions
-> If the product name is not provided, throw an error indicating "Product name is required.
-> If the product price is not a positive number, throw an error indicating "Invalid product price.
-> If the quantity is not a positive integer, throw an error indicating "Invalid quantity."

Task 2: Checkout Function
Create a function checkout that simulates the checkout process. This function should throw an error if the cart
is empty, indicating "Cart is empty. Add items before checkout."
 */

//Task 1: Add product to cart function
function addToCart(name, price, quantity) {
    // Check if product name is provided
    if (!name) {
        throw new Error("Product name is required.");
    }

    // Check if product price is a positive number
    if (price <= 0 || typeof price !== 'number') {
        throw new Error("Invalid product price.");
    }

    // Check if quantity is a positive integer
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }

    // If all checks pass, add product to cart (implementation depends on your cart data structure)
    // For demonstration purposes, let's assume we have a cart array
    const cart = [];
    cart.push({ name, price, quantity });
    console.log(`Product added to cart: ${name} x ${quantity} @ ${price}`);
}

//Task 2: checkout function

function checkout(cart) {
    // Check if cart is empty
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }

    // If cart is not empty, simulate checkout process (implementation depends on your checkout logic)
    console.log("Checkout successful!");
}

/***
 * Q2.--> A You are working on a user authentication module for a web application. Implement error handling for the
login process.Create a function login that simulates the user login process. The function should take the
username and password as parameters and throw errors under certain conditions:
' If the username is not provided, throw an error indicating "Username is required.
' If the password is not provided, throw an error indicating "Password is required.
' If the username and password do not match any valid credentials, throw an error indicating "Invalid
username or password."
 */


function login(username, password) {
    // Check if username is provided
    if (!username) {
        throw new Error("Username is required.");
    }

    // Check if password is provided
    if (!password) {
        throw new Error("Password is required.");
    }

    // Simulate checking against valid credentials
    const validCredentials = [
    { username: "admin", password: "password123" },
    { username: "user", password: "password456" }
    ];

    const isValid = validCredentials.some((cred) => cred.username === username && cred.password === password);

    if (!isValid) {
        throw new Error("Invalid username or password.");
    }

    // If we reach this point, the login is successful
    console.log("Login successful!");
}

try {
    login("admin", "password123"); // Should succeed
    login("", "password123"); // Should throw "Username is required."
    login("admin", ""); // Should throw "Password is required."
    login("invalid", "password123"); // Should throw "Invalid username or password."
} catch (error) {
    console.error(error.message);
}

/**
 * Q3.--> You are developing a payment processing module for an e-commerce platform. Implement error
handling for the payment transaction process.Create a function processPayment that simulates
processing a payment transaction. The function should take payment details (amount, card number,
expiration date) as parameters and throw errors under certain conditions
3 If the payment amount is not a positive number, throw an error indicating "Invalid payment amount.
3 If the card number is not provided or is not a valid credit card number, throw an error indicating "Invalid
card number.
3 If the expiration date is not provided or is in the past, throw an error indicating "Invalid expiration date."
 */

function processPayment(amount, cardNumber, expirationDate) {
    // Check if payment amount is valid
    if (amount <= 0) {
        throw new Error("Invalid payment amount. Amount must be a positive number.");
    }

    // Check if card number is valid
    if (!cardNumber || !validateCardNumber(cardNumber)) {
        throw new Error("Invalid card number. Please enter a valid credit card number.");
    }

    // Check if expiration date is valid
    if (!expirationDate || !validateExpirationDate(expirationDate)) {
        throw new Error("Invalid expiration date. Please enter a valid expiration date in the future.");
    }

    // If all checks pass, simulate payment processing
    console.log("Payment processed successfully!");
}

  // Helper function to validate credit card number
function validateCardNumber(cardNumber) {
    // Simple validation: check if card number has 16 digits and passes Luhn check
    if (cardNumber.length !== 16) return false;
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber[i]);
        if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) digit -= 9;

    }
    sum += digit;
    }
    return sum % 10 === 0;
}

  // Helper function to validate expiration date
function validateExpirationDate(expirationDate) {
    // Simple validation: check if expiration date is in the future
    let currentDate = new Date();
    let expirationDateObject = new Date(expirationDate);
    return expirationDateObject > currentDate;
}

try {
    processPayment(10, "4111111111111111", "2025-12-31");
    console.log("Payment processed successfully!");
} catch (error) {
    console.error(error.message);
}


/***
 * 
 */