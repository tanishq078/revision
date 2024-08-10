const accountID = 122333;
let accountEmail = "tanishq@code.com"
var accountPass = "1233"
accountCity = "Mathura"
let accountState;
// accountID = 2; // not allowed
console.log(accountID);

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

accountEmail = "tan@tan.com";

accountPass = "222";

accountCity = "Bangaluru";

console.table([accountID, accountEmail, accountPass, accountCity, accountState]);
