

// default parameter
const addUser=(name,last,city)=>{
    return name + last +"city ="+city 
}
console.log(addUser("wutti","jojo","bankkok"));
console.log(addUser("wutti","jojo","chaingmai"));





//Rest oparator 1

const addUser=(name,last,...city)=>{
    return name + last +city
}
console.log(addUser("wutti","hoho","hongsong"));
console.log(addUser("wutti","hoho","hongsong","bankkok"));

//Rest oparator 2

const addmessage=(frist,...message)=>{
       return message.map(m=>frist+message)
      
}
const addNumber=(...Number)=>{
    return Number.reduce((frist,current)=>{
          return frist+ current
    })
}
console.log(addmessage("hello","js","recent")) ;

console.log(addNumber(20,40,50,80));