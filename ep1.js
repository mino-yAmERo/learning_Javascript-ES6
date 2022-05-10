//Block Scope

var x=5;
if(x==5){
    var y =500;
    console.log("loop ใน ",y);
}
console.log("loop นอก ",y);

//ประกาศตัวแปรแบบ var อาจทำให้หลุด block scope 
//สามารถใช้ตัวแปร y ทั้งๆที่เป็น local variable
// เปลี่ยนไปใช้ let แทน
let a=5;
if(a==5){
    let b =500;
    console.log("loop ใน ",b);
}