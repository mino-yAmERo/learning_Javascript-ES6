//Destructuring
//จับคู่ ข้อมูลใน array กับ array ที่สร้างมาใหม่
//Array

const colors = ["เขียว","แดง","เหลือง"];
//วิธีดั้งเดิม กำหนดค่ากับตัวแปร
const green_ = colors[0];
const red_ = colors[1];
const yellow_ = colors[2];
//destructuring
const [a,b,c] = colors
console.log(a,b,c);

const[green,,yellow] = colors;
console.log(green);
console.log(yellow);

//Object
const product = {
    name : "คอมพิวเตอร์",
    price : 30000,
    stock : 10
}
console.log(product);
//วิธีดั้งเดิม
const productName_ = product.name;
const productPrice_ = product.price;
const productStock_ = product.stock;
//destructuring
const {name:x,price:y,stock:z} = product;
console.log(x);
console.log(y);
console.log(z);