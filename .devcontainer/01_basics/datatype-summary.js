// Primitive datatype ---- 7 types
/* String
Number
Boolean
null
undefined
Symbol  ---- to make something unique
BigInt  */ 
 
const score= 100
const scoreval = 50
const isLoggedin= false
const outsideTemp= null
let userEmail;
const id= Symbol('132')
const anotherid= Symbol('132')
//console.log(id===anotherid);
const bigNumber = 122455624865784284n

// non-primitive datatype or reference type 

/*  arrays
objects
functions */ 

const heroes= ["shaktiman", "naagraaj"]
let myobj={
    name:"sahil",
    age:21,
}
const myfunction= function(){
    console.log("hello world")
}
console.log(typeof bigNumber)
console.log(typeof scoreval)


//++++++++++++++++++++++++++++++++++++++

// memory -- heap or stack
   // stack=provide copy of a variable
   // heap= provide reference means original 
/* 
primitive datatype use stack memory
non-primitive datatype use heap memory
*/

let myname = "sahil goyal"
let anothername = myname;
anothername= "raj"

console.log(myname)
console.log(anothername)

let userone= {
    email: "user@gmail.com",
    upiid: "user@ybl"
}

let usertwo= userone
usertwo.email="sahil@gmail.com"

console.log(userone.email)
console.log(usertwo.email)
