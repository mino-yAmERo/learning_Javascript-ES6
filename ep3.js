//ทำงานกับ Object 

//ตัวแปรเก็บข้อมูล
const username = "Mino";
const age ="25";
const address ="สระแก้ว";
console.log(username);
console.log(age);
console.log(address);

//ใช้ object
const customer = {
    name : "Yamero",
    age:24,
    address:"สระแก้ว",
    showData(){
        console.log("ข้อมูลลูกค้า : "+this.name);
    }
}

console.log(customer);
console.log(customer.name);
console.log(customer.age);
console.log(customer.address);

const customer1 = {
    name:username,
    age:age,
    address:address
}
console.log(customer1);
console.log(customer.showData());