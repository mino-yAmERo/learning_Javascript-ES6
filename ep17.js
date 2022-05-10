//Computed Property Name
let user={
    ["user"+1]:"Mino",
    ["user"+2]:"Yamero",
}
console.log(user);

let Name = "cake";

let food = {
    [Name]:Name,food2:"cake ส้ม"
}
console.log(food);
let menu={
    [Name]:Name+" ส้ม", [Name+"Mix"]: Name+" มะม่วง"
}
console.log(menu);
let {cake,cakeMix} = menu
console.log(cake);
console.log(cakeMix);

//Shorthand Property & Method

function _user(name,last,age){
    return{
        name,
        last,
        age
    }
}
console.log(_user("Mino","Yamero",15));