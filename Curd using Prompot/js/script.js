// var firstName = "mohamed";
// var secondName = "ahmed";
// console.log(`${firstName} ${secondName}`);
// console.log(myAge);
// myAge = 25;
// requierdAge = "25";
// mirtalState = "Single";
// type = "male";
// console.log(myAge == requierdAge);

// if ((myAge == requierdAge && mirtalState == "single") || type == "male") {
//   console.log("You are the requierd Person");
// } else {
//   console.log("Not the required Person");
// }
// myAge == requierdAge && mirtalState == "single" && type == "male"
//   ? console.log("You are the requierd Person")
//   : console.log("Not the required Person");

// var arr = ["html", "css", "js", "bootstrap"];

// // console.log(arr.includes("html"));

// // var p = prompt("enter the course name :");

// // if (!arr.includes(p)) arr.push(p);
// // console.log(arr);

// arr.splice(1, 0, "ts", "react"); /* adding*/
// arr.splice(1, 2); /* removing */
// arr.splice(1, 1, "Node js", "PhP");

// console.log(arr);

// var numbers = [1, 5, 3, 10, 11, 20];

// // var element = numbers.find((item) => {
// //   return item > 5;
// // });
// var element = numbers.find((item) => item > 5);
// console.log(element);
function usersNumbers() {
  var userNumber = prompt("please enter user number");
  for (let index = 0; index < userNumber; index++) {
    addUser();
  }
  deleteUser();
  editUserBalanceById();
}
var users = [];
function addUser() {
  var userName = prompt("enter Your Name");
  var userId = prompt("enter Your Id");
  var userBalance = prompt("enter Your Balance");
  var user = {userId, userName, userBalance};
  users.push(user);
  console.log(users);
}
function deleteUser() {
  var deletedIndex = prompt("enter the deleted user Index");
  var deletedUser = users.findIndex(
    (element) => element.userId == deletedIndex
  );
  var newUsers = users.splice(deletedUser, 1);
  return newUsers;
}
function editUserBalanceById() {
  var userIdToEditBalance = prompt("enter User Id To Edit Balance");
  var newUserBalance = prompt("enter The user New Balance");
  var editedbalanceUser = users.find(
    (element) => element.userId == userIdToEditBalance
  );
  var newbalance = (editedbalanceUser.userBalance = newUserBalance);
  console.log(newbalance);
}
usersNumbers();
