const accountId = 12345
let accountEmail= "sahilgoyal.1535@gmail.com"
var accountPassword= "123456"
accountCity= "jaipur"
let accountState;

// accountId= 456789 // not allowed because its constant
accountEmail= "abc@gmail.com"
accountPassword="85786"
accountCity= "noida"

// console.log(accountId);

/*
perfer not to use var because of block scope and functional scope
*/
console.table({accountId, accountEmail, accountPassword, accountCity,accountState})
