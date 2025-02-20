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


