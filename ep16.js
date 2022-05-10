//Array Reduce
//ทบทวน map & filter
const data = [100,200,300,400,500,600,700,800,900,1000];

//map สมาชิกให้เท่ากับ i+1
const mapdata = data.map((e,i)=>{
    return e=i+1;
})
console.log(mapdata);

//filter e มากกว่า 4 และหาร2 ลงตัว
const odddata = mapdata.filter(e=> e>4 && e%2==0);
console.log(odddata);

//Reduce
//ส่งข้อมูลภายใน array ที่ต้องการไปทำงานและส่งค่ากลับมาค่าเดียว
//array.reduce((ค่าที่ถูกประมวลผล,element)=>{},ค่าเริ่มต้น) //
//ค่าเริ่มต้น เช่น total =0
//Ex.การหาผลรวม
const number = [1,2,3,4,5,6,7];
const sum = number.reduce((value,e)=>{
    console.log(`value : ${value} element : ${e}`);
    const total = value+e;
    return total
},0)
//total ถูกสะสมเก็บเข้าไปใน value แล้วนำไปรวมกับ element ต่อไป
/*
    total 0     value 0     e 1 => value + e = 1
    total 1 =>  value 1     e 2 => value + e = 3
    total 3 =>  value 3     e 3 => value + e = 6
    total 6 =>  value 6     e 4 => value + e = 10
    total 10 => value 10    e 5 => value + e = 15
    total 15 => value 15    e 6 => value + e = 21
    total 21 => value 21    e 7 => value + e = 28
    # total = 28 #
*/
console.log(`ผลรวมทั้งหมด : ${sum}`);

const cart = [
    {name:"กระเป๋า",price:500},
    {name:"โทรศัพท์",price:12500},
    {name:"หนังสือ",price:999},
]
/*

const cost = cart.reduce((value,e)=>{
    const sum = value+e.price;
    return sum;
},0)

*/

//เขียนลดรูป 
const cost = cart.reduce((value,e)=>e.price+value,0)
console.log(`ราคาทั้งหมด : ${cost}`);
