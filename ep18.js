//Class
//แบบเดิม

let user ={
    Name:"Mino",
    age:25,
    SayHi:function(){
        return `Hello ${this.Name}`;
    }
}
console.log(user.SayHi());

//สร้างclass แบบเดิม
function User(name,age){
    this.name=name,
    this.age=age
}
User.prototype.SayHi=function(){
    console.log(`Hello ${this.name} Age : ${this.age}`);
}
let user1 = new User("Mino",25);
user1.SayHi();

//สร้าง class แบบใหม่
class Admin {
    constructor(){
        console.log("I'm an admin");
    }
    isPermission(){
        console.log("Read & Write data from database");
    }
}
class Username extends Admin{
    constructor(name,age){
        super();
        this.name=name;
        this.age=age;
    }
    SayHi(){
        console.log(`Hello ${this.name} Age : ${this.age}`);
    }
}
let user2 = new Username("Yamero",24);
user2.SayHi();

//สืบทอดคุณสมบัติ
user2.isPermission();
