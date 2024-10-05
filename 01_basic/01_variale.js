const accountId=11234;
let accoundtEmail="ajay@google.com";
var accountPassword="707875";
accountCity="Meerganj"
let accountState; // only decleare the vaiable name and value not definr then  value assign undefine
/*
IN var varaible  create the scope problem if we use var and if change in block scope in same variable name 
chnage all file in varaibel name 
Prefer not to use var 
because of issue in block scope and functional scope
*/
// accountId=2;     //not  allowed  for const variable  not change after initialize the value in conat variable 
console.log(accountId);
console.table([accountId,accoundtEmail,accountPassword,accountCity,accountState]); 
//using the console.table  all variable print in single run in table formate

