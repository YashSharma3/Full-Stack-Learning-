const accountId=12345
let accountEmail="beingpredator3@gmail.com"
var accountPassword="Yash@123"
accountCity="Jaipur"

// accountId="56789" we cannot change the value kept in const variable
console.log(accountId)

accountEmail="sharma2004yash@gmail.com"
console.log(accountEmail) // So with let we can change the value 

accountPassword="hasy@123"
console.log(accountPassword)//So with var we can change the value 

// prints the value in the format of a table with in the index as provided 
console.table([accountId,accountEmail,accountPassword])

/*
Prefer not to use var 
because var changes the value of variable globally while let changes the value of the variable for the particular block
*/

// If you don't assogn a value to the variable js will mark it as undefined