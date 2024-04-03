import inquirer from "inquirer";

let myBalance = 10000; //pkr
let myPin = 1234;

let pinAnswer = await inquirer.prompt({

     "name": "pin",
     "message": "enter your number",
     "type": "number"
})      // we use box bracket when we have multiple question

console.log(pinAnswer.pin);
{
if (pinAnswer.pin === myPin)
console.log("correct pin code!");
else {console.log("Invalid pin number")};
}

let operationAns = await inquirer.prompt([{
   name:"operation",
    message:"please select option",
    type:"list",
    choices:["WITHDRAW" , "CHECK BALANCE", "Fast Cash"],
}]);
console.log(operationAns);

if (operationAns.operation ==="WITHDRAW"){

   let amountAns = await inquirer.prompt([{
    name:"amount",
    message: "enter your amount",
    type: "number",
   }
]);

//using concatination

    if (amountAns.amount <= myBalance)
{console.log ("please take your cash");

myBalance -= amountAns.amount; 
console.log (`Your current balance is: "  ${myBalance}`)}

else 
{console.log("Sorry! your balance is insufficient")};
}

if (operationAns.operation ==="CHECK BALANCE"){
    console.log("your current Balance is: " + myBalance);
};

if (operationAns.operation ==="Fast Cash"){
let amountAns = await inquirer.prompt([{
    name: "amount",
    type: "list",
    message: "Please choose your amount",
    choices: ['1000', '2000', '5000', '10000'], 


}]);

if (amountAns.amount <= myBalance)
{console.log ("please take your cash");

myBalance -= amountAns.amount; 
console.log (`Your current balance is: "  ${myBalance}`)}

else 
{console.log("Sorry! your balance is insufficient")};
}

