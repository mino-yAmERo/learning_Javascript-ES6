//Array Map

const number = [10,20,30,40];

const newnumber = number.map(element =>{
    const a = element*2;
    return a
})
console.log(`Before Map : ${number}`);
console.log(`After Map : ${newnumber}`);

const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"];
const result = data.map((e,i)=>{
    return `วันที่ ${i+1} , สภาพอากาศ = ${e}`

})
console.log(result);

const wetdata = [
    {day:"01/06/2564",weather:"แดดร้อน",temp:35},
    {day:"02/06/2564",weather:"แดดปานกลาง",temp:32},
    {day:"03/06/2564",weather:"ไม่มีแดด",temp:29},
    {day:"04/06/2564",weather:"ฝนตก",temp:25},
    {day:"05/06/2564",weather:"อากาศหนาว",temp:20},
]

console.log(wetdata);
const result2 = wetdata.map((e,i)=>{
    return `${i+1}. วันที่ : ${e.day} สภาพอากาศ : ${e.weather} อุณหภูมิ : ${e.temp} C `;
})
console.log(result2);
for (let x of result2) console.log(x);