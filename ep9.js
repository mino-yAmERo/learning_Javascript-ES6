// join, concat
// join 
//แปลง Array => String (default: คั่นด้วย comma)
const data =[100,200,300];
let result = data.join();

console.log(data);
console.log(result);
console.log(typeof(result));

let result1 = data.join("*");
console.log(result1);
console.log(data.join(" "));

//concat ต่อสมาชิกภายใน Array
const data2 =[400,500,600];
const alldata = data.concat(data2);
console.log(alldata);
