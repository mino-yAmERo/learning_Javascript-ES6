// push, pop, shift, unshift

//push เพิ่มสมาชิกต่อท้าย
const data = [10,20,30];
 
data.push(500);
data.push(...[1000,2000,3000]); //spread operator
console.log(data);
//pop ลบสมาชิกตัวสุดท้ายออก
data.pop();
console.log(data);

//shift นำสมาชิกตัวหน้าออก
data.shift();
console.log(data);

//unshift เพิ่มสมาชิกเข้าไปข้างหน้า
data.unshift(100);
data.unshift(...[1,2,3,4]); //Spread operator
console.log(data);



