//การสืบทอด ของ class
class Admin{}







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