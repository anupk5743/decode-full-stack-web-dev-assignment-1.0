//*************closure and Destructuring***************//



/****
 *Q1.--> You are building a counter application that tracks the number of times a button is clicked. implement the counter using closure.
  *   */ 
function createCounter(){
    let count = 0;
    return function() {
        count++;
        console.log('click count: ',{count});
    };
}

let clickCounter = createCounter()

//Simulate button clicks
clickCounter();
clickCounter();


/****
 * Q2.--> You have an object representing a customer order with properties orderId, productName, and quality.
 * use destructuring to extract and print these properties.
 */

let order = {
    orderId: "12345",
    productName: "Laptop",
    quantity:2
};

//without destructuring 
console.log("Without Destructuring:");
console.log("Order Id:",order.orderId);
console.log("Product Name:",order.productName);
console.log("Quantity:",order.quantity);

//with destructuring
console.log("\nWith Destructuring:");
let {orderId, productName, quantity}=order;
console.log("Order Id:",orderId);
console.log("Product Name:",productName);
console.log("Quantity:",quantity);


/****
 * Q3.--> in this coding challenge let's try to implement the cart feature using javaScript closure,using js closure
 * try to create a cart and return a function to getCartItems
 */

function shoppingCart(){
    const cartItems =[];
    return {
        getCartItems: function(){
            return cartItems;
        }
    };
}
const cart = shoppingCart();
console.log('cart items:',cart.getCartItems());

/*****
 * Q4.--> continuing the previous coding challenge, now let's implement the add to cart feature, on calling 
 * add to cart closure function the object of productId, name, Quantity and price should be added to the cartItem 
 * note that if duplicate items with same productId is added, the Product quantity must bw incremented.
 * use javascript closure to achieve the output.
 */


function shoppingCart() {
    const cartItems = [];

    function itemIndexInCart(productId) {
        return cartItems.findIndex(item => item.id === productId);
    }
    return{
        addItem: function(product){
            const itemIndex = itemIndexInCart(product.id);

            if(itemIndex !== -1){
                cartItems[itemIndex].quantity++;
            } else {
                cartItems.push({id: product.id, name: product.name,price: product.price,quantity:1});
            }
        },
            getCartItems:function() {
                return cartItems;
            }
    };
}

const Cart = shoppingCart();
console.log("Cart Items:", cart.getCartItems());

const product1 = {id: 1, name: 'Product 1', price: 10};
const product2 = {id: 2, name: 'Product 2', price: 20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
console.log('cart items:', cart.getCartItems());



/***
 * Q5.--> continuing the previous coding challenge, now let's implement the remove item from cart feature.
 * on calling the remove item closure function the specified productId item must be removed from cartItems
 * array.use javascript closure to achieve the output.
 */

function shoppingCart() {
    const cartItems = [];

    function itemIndexInCart(productId) {
        return cartItems.findIndex(item => item.id === productId);
    }
    return{
        addItem: function(product){
            const itemIndex = itemIndexInCart(product.id);

            if(itemIndex !== -1){
                cartItems[itemIndex].quantity++;
            } else {
                cartItems.push({id: product.id, name: product.name,price: product.price,quantity:1});
            }
        },
        removeItem: function(productId){
            const indexToRemove = itemIndexInCart(productId);

            if(indexToRemove != -1){
                cartItems.splice(indexToRemove,1);
            }
        },
            getCartItems:function() {
                return cartItems;
            }
    };
}

const Carts = shoppingCart();
console.log("Cart Items:", cart.getCartItems());

const pro1 = {id: 1, name: 'Product 1', price: 10};
const pro2 = {id: 2, name: 'Product 2', price: 20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
console.log('cart items:', cart.getCartItems());

const prod1 = {id: 1, name: 'Product 1', price: 10};
const prod2 = {id: 2, name: 'Product 2', price: 20};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
console.log('cart items:', cart.getCartItems());


/****
 * Q6.--> You are developing a music playlist management system implement function that leverage closure and higher order function to perform common playlist operations.
 * Task 1: Create a function createPlaylist that takes a playlist name as a parameter and return a closure this closure 
 * should allow adding and listing songs for the given playlist
 * task 2: Create a function addSong that takes a song name and artist as parameter and adds the song to the 
 * specified playlist. use the closure created in task1.
 * task 3: create a function listSongs that lists all the songs in a specified playlist. use the closure created
 * in the task 1.
 */


// Task 1: Create Playlist
function createPlaylist(playlistName) {
    let playlist = [];
    return{
        addSong: function(songName,artist){
            playlist.push({songName,artist});
        },
        listSongs: function(){
            if(playlist.length === 0){
                console.log('${playlistName} playlist is empty');
            } else {
                console.log(`${playlistName} Playlist: ${playlist.map(song => `${song.songName} by ${song.artist}`).join(', ')}`);
                
        }
    }
}

//task2: add song to playlist
function addSong(playlist,songName, artist){
    playlist.addSong(songName,artist);
}

//task3: list song in playlists
function listSongs(playlist){
    playlist.listSongs();
}

const myPlaylist = createPlaylist("My favorites");

addSong(myPlaylist,"Song1","Artist1");
addSong(myPlaylist,"Song2","Artist2");
addSong(myPlaylist,"Song3","Artist3");
listSongs(myPlaylist);
}