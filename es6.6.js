//เเบบเดิม//ไม่มีคลาส
var user={
    name:"wuttipong",
    age:22,
    Sayhello:function(){
        return "Sayhello ="+this.name
    }
}
console.log(user.Sayhello());

//มีคลาส //เเบบเดิม
function User(name,age){
    this.name=name
    this.age=age
}
User.prototype.Sayhello=function(){
    console.log("hello="+this.name + "age ="+this.age);
}
var user1=new User("wuttipong", 60)
user1.Sayhello()


//เเบบใหม่ มีclass
class User3{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    Sayhello(){
        console.log("hello="+this.name + "age ="+this.age);
    }
}
let user2 =new User3("wuttipong",50)
user2.Sayhello()
