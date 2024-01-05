const accId = 144553
let accEmail = "tanmayspal2003@Gmail.com"
var accPassword = "12345678"
accCity = "Indore"
let accountState;
// const accType  //const should has initialization

// accId = 2  //const can not be change

accEmail = "hello@gmailcom" //let can be change, let has block scope
accPassword = "87654321"    //var can be change, var has function scope
accCity = "Mumbai"          //we can declare variable without using var, let, const
accountState                //variable without initialization has undefined value

console.log(accId);

console.table([accEmail, accPassword, accCity, accountState])