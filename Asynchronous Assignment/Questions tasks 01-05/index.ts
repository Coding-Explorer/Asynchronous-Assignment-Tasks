
/* -----------------------Question # 01-----------------------.

=> Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/ 

//Here's i'm using setTimeout function to delay the execution of the console.log() function by 2 seconds.
//And it's a simple function that logs "Hey Rabail👋, How are you?" after 2 second delay.
//Arrow function enhances the readability of the code and makes it concise.
function fetchGreeting(){
    setTimeout(() => {
        console.log("Hey Rabail👋, How are you?");
        
    },2000)
}

//Now calling the function.
fetchGreeting()

/* -----------------------Question # 02-----------------------.
=> Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/

//Here's i'm using setTimeout function to delay the execution of the console.log() function by 1 second.
//And it's a simple function that logs "Task started" and "Task completed" after 1 second delay.
//The use of arrow function is for the sake of simplicity and to make code more readable.
function simulateTask() {
    console.log("Task started!");
    setTimeout(() => {
        console.log("Task completed!");
    }, 1000);
}

//Now invoking the function.
simulateTask()

/* ------------------------Question # 03-------------------------.
=> Write a function fetchData that returns a Promise which resolves with the string 
"Data fetched successfully!" after a delay of 1 second.*/

//Here's i'm using promise => promise is a container for future value.
//Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.
//Promise is used to handle asynchronous operations in JavaScript.
//Promise is a constructor function that takes a callback function as an argument.
//Here's i'm using Promise to delay the execution of the console.log() function by 1 second.
//And it's a simple function that logs "Data fetched successfully!" after 1 second delay.
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

//Now calling the function along with .then method.
//.then method is used to handle the resolved value of the Promise.
//.then method takes a callback function as an argument, which will be executed when the Promise is resolved.
fetchData1().then((message) => {
    console.log(message); 
});

/* --------------------------Question # 04--------------------------.
=> Write a function fetchWithError that returns a Promise. It should randomly either 
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
delay of 1 second. Handle the rejection using .catch .*/

//Here's i'm using promise => promise is a container for future value.
//Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.
//The usage of resolve and reject in a Promise is to indicate whether the asynchronous operation was successful or not.
//And the use of if statement to randomly resolve or reject the Promise.
//The benefit of using math.random() is to generate a random boolean value, which can be used to decide whether to resolve or reject the Promise.
//Here's i'm using Promise to delay the execution of the console.log() function by 1 second.
//And it's a simple function that logs "Data fetched successfully!" or "Data fetch failed!" after 1 second delay.
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}

//Now calling the function along with .then and .catch methods.
//.then method is used to handle the resolved value of the Promise.
//.catch method is used to handle the rejection of the Promise.
//.then method takes a callback function as an argument, which will be executed when the Promise is resolved.
//.catch method takes a callback function as an argument, which will be executed when the Promise is rejected.
fetchWithError().then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
});

/* ------------------------Question # 05-----------------------.
=> Write a function execute Sequentially that executes two functions fetchData and 
processData sequentially using Promises, and logs the results in the order they are 
called. */

//Here's i'm using Promise to execute two functions fetchData and processData sequentially.
//Firstly i'm creating two Promises, one for fetchData and one for processData by using new Promise() method.
//Secondly declaring a function executeSequentially that takes two functions as arguments.
//Then i'm using Promise.all() method to execute both Promises sequentially.
let fetchData = new Promise((resolve, reject) => {
    resolve("Data Fetched successfully!");
});

let processData = new Promise((resolve, reject) => {
    resolve("Data processed successfully!");
});

//Now i'm using await keyword to wait for the Promise to resolve before executing the next line of code.
//And then i'm using console.log() method to log the result of the Promise.
async function executeSequentially() {
    let fetch = await fetchData;
    console.log(fetch);
    let process = await processData;
    console.log(process);
}

//Finally i'm calling the function executeSequentially.
executeSequentially();
