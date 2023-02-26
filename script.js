// 1. How to access the second element of the array `const nums = [3, 7, 10]`

// const nums = [3, 7, 10]
// console.log(nums[1]);

// 2. For the code below, what does `arrNums.splice(2, 0)` return?
//
//     ```javascript
//     const arrNums = [1, 2, 3, 4, 5];
//     ```
// empty array

// 3. What is the result of the following code:
// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)
// console.log(favoriteNumbers) = [4,5,6,1,2,3,7,8,9]

// 4. What does the following code print to the console ?
// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs.spain = "Real Madrid";
// console.log(football.clubs.spain); = "Real Madrid";

// 5. What does the following code print to the console?
// const myteam = "bestTeam";

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// football.clubs[myteam] = "France national football team";
// // console.log(football.clubs); return an objet adding myTeam : "France national football team"

// ------------- A faire

// 6. Can we define the function as follows?
//     If yes,
//     * what is it called ?
//     * what is this part ?
//         ```
//         function(a, b){
//            return a*b;
//         }
//     * explain how to invoke it
//
//     const x = function(a, b){
//        return a*b;
//     }
// x(1,3)
//  yes we can its anonymous

// // 7. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

// function x() {
//     a = 5;
//     console.log(a);
// }
// yes its ok its related to the window

// #### Functions

// 8. In JavaScript can we pass functions as arguments to other functions ? What does this code return ?
// function sayHello() {
//     return "Hello, ";
// }
// function greeting(helloMessage, name) {
//     console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

// // Yes we can pass it as argument
// // its returning "hello Javascript"

// 9. Transform this function into an arrow function. Explain what is the goal of this parameter `num1=10`.

// function sum(num1 = 10, num2) {
//     return num1 + num2
// }

// sum(40, 2)
// sum(42, 0)
// console.log("the answer to everything is", sum(42, 0))
// its a default parameter
// // Arrow function
// const sum = (a = 10, b) => a + b

// sum(40, 2)
// sum(40,)
// console.log("the answer to everything is", sum(42, 0))

// -------- A Faire !!!!!
// 10. How would you call the `foo` function in the console.log, in order to display what the `bar` function returns ? Explain the process and concept behind it

//      function foo (param) {
//        function bar() {
//          return "Poppin' bottles";
//        }
//        return bar;
//      }
// foo("hello")()

// #### DOM
//
// 11. Which of the following events will you add in the `addEventListener()`method?
//       ☐ click "This one !!"
//       ☐ onclick

// 12. Does the `addEventListener()` method allow you to add many events to the same element?
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
// Yes it is
//

// #### Array Methods : forEach, map, filter, reduce, find, every, some

// 14. Do this exercise twice: first with a `for loop`, then with a `for of loop`.
// Console.log the sum of this array
//        const marks = [67, 60, 89, 90, 67, 42];
// const marks = [67, 60, 89, 90, 67, 42];
// let sum = 0;

// // marks.forEach(ele => {
// //     sum += ele;
// // })

// // console.log(sum);

// for (let i = 0; i < marks.length; i++) {
//     sum += marks[i]
// }
// console.log(sum);

// 15. What is the value of `passed` in the following code?
// const marks = [67, 60, 89, 90, 67, 42];

// const passed = marks.every(function (m) {
//     return m >= 50;
// });

// every methode return a boolean here its false because
// we have a number smaller than 50

// 16. What does the following code log?
// const nums = [10, 50, 88];

// const bignums = nums.filter(function (n) {
//     return n > 10;
// });

// console.log(bignums); = a new array[50, 88]

// ------- A faire
// 17. Use a **javascript array method** to square the value of every element in the array.
// const
// input = [1, 2, 3, 4, 5];
// //code
// input.forEach((elem, index) => {
//     input[index] **= 2

// });
// console.log(input) // [ 1, 4, 9, 16, 25]

// // 18. Use **2 javascript array methods** and chain them to return the sum of all the positives ones.
// const secondInput = [1, -4, 12, 0, -3, 29, -150];
// //          console.log(total) //42


// const positivNum = secondInput.filter(function (n) {
//     return n > 0
// }).reduce((acc, num) => acc + num)
// console.log(positivNum);

// // 19. Use **3 javascript methods** and chain them to abbreviate the name and return the name initials
// const input = 'George Raymond Richard Martin';
// const initital = input.split(' ').map(letter => letter[0]).join('')
// console.log(initital);


// 22. Use object destructuring to retrieve the value of the keys `france` and `spain`

// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }
// const { clubs } = football
// console.log(`France : ${clubs.france}, SPAIN ${clubs.spain} `);

// 23. Use object destructuring in the function to retrieve the value of the keys `france` and `spain`

// A completer !!!

// function retrieveSports() {
//     const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
//     console.log(sentence);
// }
// const football = {
//     type: "sport",
//     clubs: {
//         france: "Paris Saint-Germain",
//         spain: "Atlético Madrid",
//     }
// }

// retrieveSports(football)

// 24. What will be printed in the console

// class Item {
//     constructor(nameProduct, priceProduct) {
//         this.name = nameProduct;
//         this.price = priceProduct;
//     }
//     displayInfo() {
//         console.log(this.name + " is for $ " + this.price)
//     }
// }

// const cake = new Item("Chocolate Cake", 10);
// cake.displayInfo();

// the Print will be : "Chocolate Cake is for $ 10"

// 25. What will be the output and why ? What will be the state of the promise ?

// Promise.resolve('Success!')
//     .then(data => {
//         return data.toUpperCase()
//     })
//     .then(data => {
//         console.log(data)
//     })

// THE output will be : Success!
// and the state fullfilled

// 26. What will be displayed by the following code, after 2 seconds?

// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve("OK");
//     }, 2000);
// });

// p.then(function (data) {
//     console.log(data);
// });

// After 2s it will be : ok


// 27. Consider the following `async` function and its output. What will be displayed to the console when calling the `test()` function? Explain the process

// async function test() {
//     let result = 'first!';

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done!'), 1000);
//     });

//     result = await promise;

//     console.log(result);
// }

// test();

// the output will be : DOne !


// 28. Use **async await**, and **the fetch API** to fetch a fact on cats and display it. Use this third party API :  `https://catfact.ninja/fact`
//     1. In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
//     2. In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
//     3. Make sure to use try and catc

// const btn = document.getElementById("btn")
// btn.addEventListener("click", getData)

// async function getData() {
//     try {
//         const url = "https://catfact.ninja/fact";
//         const responce = await fetch(url);
//         const data = await responce.json();
//         displayData(data);
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);

//     }
// };

// function displayData(cat) {
//     const sect = document.getElementById("container")
//     const para = document.createElement("p")
//     para.textContent = cat.fact
//     console.log(para);
//     sect.appendChild(para)
// };

