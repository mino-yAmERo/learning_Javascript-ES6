//Spread Operator
//กระจายสมาชิกใน array ไปใช้งาน

const newArr = [100,200,300];
const data = [10,20,...newArr];
console.log(data);

const colors = ["เขียว","น้ำเงิน","ขาว"];
const allcolors = ["แดง","เหลือง",...colors];
const newcolor = ["ดำ","เทา"];

allcolors.push(...newcolor);
console.log(allcolors);
