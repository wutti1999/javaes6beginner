//Destructuring object

//เเบบเดิม
// var person={
//     name:"wuttipong",
//     skill:"java database php"
// }
 
// var person=person.name
// var skill=person.skill
// console.log();

//เเบบใหม่
var player ={
    name:"wuttipong",
    skill:"snooker"
}
let {name,skill}= player
console.log(player);