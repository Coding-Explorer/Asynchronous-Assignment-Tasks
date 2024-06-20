/* -----------------------Question # 01-----------------------.

=> Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Here's i'm using setTimeout function to delay the execution of the console.log() function by 2 seconds.
//And it's a simple function that logs "Hey Rabail👋, How are you?" after 2 second delay.
//Arrow function enhances the readability of the code and makes it concise.
function fetchGreeting() {
    setTimeout(function () {
        console.log("Hey Rabail👋, How are you?");
    }, 2000);
}
//Now calling the function.
fetchGreeting();
/* -----------------------Question # 02-----------------------.
=> Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
//Here's i'm using setTimeout function to delay the execution of the console.log() function by 1 second.
//And it's a simple function that logs "Task started" and "Task completed" after 1 second delay.
//The use of arrow function is for the sake of simplicity and to make code more readable.
function simulateTask() {
    console.log("Task started!");
    setTimeout(function () {
        console.log("Task completed!");
    }, 1000);
}
//Now invoking the function.
simulateTask();
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
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
//Now calling the function along with .then method.
//.then method is used to handle the resolved value of the Promise.
//.then method takes a callback function as an argument, which will be executed when the Promise is resolved.
fetchData1().then(function (message) {
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
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
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
fetchWithError().then(function (response) {
    console.log(response);
}).catch(function (error) {
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
var fetchData = new Promise(function (resolve, reject) {
    resolve("Data Fetched successfully!");
});
var processData = new Promise(function (resolve, reject) {
    resolve("Data processed successfully!");
});
//Now i'm using await keyword to wait for the Promise to resolve before executing the next line of code.
//And then i'm using console.log() method to log the result of the Promise.
function executeSequentially() {
    return __awaiter(this, void 0, void 0, function () {
        var fetch, process;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData];
                case 1:
                    fetch = _a.sent();
                    console.log(fetch);
                    return [4 /*yield*/, processData];
                case 2:
                    process = _a.sent();
                    console.log(process);
                    return [2 /*return*/];
            }
        });
    });
}
//Finally i'm calling the function executeSequentially.
executeSequentially();
