//syncronius(Foran chalne wala)

import { resolve } from "path";

//Asyncrouius( Time taken he)

//call back function


//promises---------------
// Here are the three states of a promise:

// Pending: Initial state, where the promise is waiting for a result or resolution.
// Fulfilled (or Resolved): The promise has been successfully resolved with a value.
// Rejected: The promise has been rejected with an error or reason.
//Step 6: Promise is Resolved or Rejected

// The promise is now either resolved with the data or rejected with an error. You can then use the then() method to handle the resolved data or the catch() method to handle the error.
// Step 1: Create a Promise
//In this example, we create a promise and simulate a request to a server using setTimeout. After 2 seconds, we resolve the promise with the data "Hello, World!". The then() method is used to handle the resolved data and log it to the console.


// Example 2: Creating a Promise and Rejecting it with an Error
// Promise 1: Resolve with data
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = 'Hello, World!';
//       resolve(data); // Resolve the promise with the data
//     }, 2000);
//   });
  
//   promise1.then((data) => {
//     console.log(data); // Output: Hello, World!// resolved body
//   });
  
  
  // Promise 2: Reject with error
  // let promise2 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     let error = 'Oops, something went wrong!';
  //     reject(error); // Reject the promise with the error// this is reject body
  //   }, 2000);
  // });
  
  // promise2.catch((error) => {
  //   console.log(error); // Output: Oops, something went wrong!
  // });
  // promise resolve return karta he 
//  let  mypromise = new Promise<string>((resolve,reject)=>{
//     setTimeout(()=>{
//       let apiData= "";
//       if(apiData){
//         resolve("data mill gaya")
//       }else{
//         reject("data nhi milla")
//       }
//     },2000);
//   })

//    mypromise.then(function(value1){
//    console.log(value1);// body of resolve
    
//   })

// mypromise.catch(function(value2){ //body of reject
//   console.log(value2);
// })
//------------------another way of promise-----------------
// function mypromise(){
//   return new Promise<string>((resolve,reject)=>{

//       let apiData= "";
//       if(apiData == ""){
//         resolve("data mill gaya")
//       }else{
//         reject("data nhi milla")
//       }
//   })


// }


// mypromise().then(function(value1){
//   console.log(value1);// body of resolve
  

// })
// .catch(function(value2){ //body of reject
// console.log(value2);
// })
// syntax
//let promise = newPromise((resolve,reject)=>{})
// let promise = new Promise((resolve,reject) =>{
//   console.log("I am promise");
//   // resolve("promise sucessful!");
//   reject("Errors accours.")
// })
// promise.then(()=>{
//   console.log()
// })
// const getPromise = () =>{
//   return new Promise((resolve,reject) =>{
//     if(resolve){
//     console.log("I am promise");
//     resolve("promise sucessful!");
//     }else{
//       console.log("Something went wrong")


//     reject("Errors accours.")
//     }
//   })
// }



// let myPromise = getPromise()

// myPromise.then((res)=>{
//   console.log("Promise fullfilled!",res);
// })
// myPromise.catch((err)=>{
//   console.log("oops somethings went wrong...",err);
// })
// if(true){
// let myPromise1 = new Promise<void>((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Data agaya")
//   },1000);
//   resolve();
// })
// myPromise1.then(()=>{
//   console.log("promise fullfilled!");
// })
// }else{
// let mypromise2 = new Promise<void>((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("Some thing went wrong.......");
//   },4000)
//   reject();
// })
// mypromise2.catch(()=>{
//   console.log("errors accours")
// })
// }



