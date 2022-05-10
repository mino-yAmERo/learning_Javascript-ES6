// Array Filter
const data = [10,20,30,40];

//กำหนดเงื่อนไข
//ผ่านเงื่อนไข => ส่งไป Array อีกอันที่ผ่านเงื่อนไข

const result = data.filter(e=>{
    return e>20;
})
console.log(`Array ใหม่ : ${result}`);

const emdata = [
    {name:"Mino",salary:25000,dept:"programmer"},
    {name:"Yamero",salary:18000,dept:"accounting"},
    {name:"Minor",salary:25500,dept:"reception"},
    {name:"Nutthabhas",salary:24000,dept:"design"},
    {name:"S",salary:30000,dept:"engineer"},
]
//filter salary => 25000
const result1 = emdata.filter(e=>{
    return e.salary>=25000 && e.name.startsWith("M");
})
console.log(result1);
//map เอาชื่อของคนที่ salary >= 25000
const getname = result1.map(e=>e.name);
console.log(getname);