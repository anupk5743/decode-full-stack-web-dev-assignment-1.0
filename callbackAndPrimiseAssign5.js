/**
 * Q1.-->Write a function sumAsync that takes two numbers as arguments and uses a callback to return their sum after
a delay of 1 second.
 */

function sumAsync(a,b,callback) {
    setTimeout(()=> {
        const result = a+b;
        callback(result);
    }, 1000);
}
sumAsync(3,7, (result)=>{
    console.log(result)
});


/***
 * Q2.-->Create a function getData that returns a Promise. The Promise should resolve after 2 seconds with a message
"Data fetched successfully."
 */

function getData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully.");
        },2000)
    });
}
getData().then((result)=>{
    console.log(result)
});


/**
 * Q3.-->  Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL and returns
the parsed JSON response.
 */

async function fetchData(url) {
    const response = await fetch(url);
    const data =  await response.json();
    return data;
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data)=> {
    console.log(data);
})


/**
/**
/**
 * Q4.--> Write an asynchronous function fetchData that uses the Fetch API to retrieve data from a given URL https://jsonplaceholder.typicode.com/todos/1" and returns the parsed JSON response.
 * 
 */

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
fetchData("https://jsonplaceholder.typicode.com/todos/1").then((data) =>{
    console.log(data)
});


/****
 * Q5.--> Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The
function should multiply each element of the array by 2 and pass the result to the callback.
 */

function multiplyWithCallback(numbers,callback) {
    const multipliedArray = numbers.map((num)=> num * 2)
    callback(multipliedArray);
    }
const inputArray= [1,2,3,4];
multiplyWithCallback(inputArray,(result)=>{
    console.log(result)
}
)

/****
 * Q6.-> create a function fetchDataPosts that takes a userId and fetches the user details
 * and their posts using separate api calls. use promise chaining to ensure the posts are 
 * retrieve only after the user details are fetched.return on object with user details and posts
 */

function fetchDataPosts(userId){
    return fetch('https://jsonplaceholder.typicode.com/users/$(userId')
    .then((response)=> response.json()).then((userData)=>{
        return fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=${userId'
            )
            .then((response)=> response.json())
            .then((posts)=> ({user: userData, posts}));
        });
}
fetchDataPosts(1).then((result)=> {
    console.log(result);
});


/***
 * Q7.-->Write a function fetchMultipleData that takes an array of URLs and uses Promise.all() to fetch data from all the
URLs concurrently. Return an array of responses.
 */

function fetchMultipleData(urls) {
    const promises = urls.map((url)=> 
        fetch(url).then((response)=> response.json())
    );
    return Promise.all(promises);
}
const urlsToFetch = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleData(urlsToFetch).then((response)=> {
    console.log(response);
});



/***
 * Q8.-->Create a function racePromises that takes an array of promises and returns the result of the first promise that
resolves or rejects. Use Promise.race() to implement this.
 */

function racePromises(promises) {
    return Promise.race(promises);
}

const promise1 = new Promise((resolve)=> 
    setTimeout(()=> resolve("Promise 1 resolved"),1000)
);
const promise2 = new Promise((_, reject)=> 
setTimeout(() => reject("Promise 2 rejected"), 500)
);

racePromises([promise1, promise2])
    .then((result)=> {
        console.log(result);
    })
    .catch((error)=> {
        console.log(error)
    });

