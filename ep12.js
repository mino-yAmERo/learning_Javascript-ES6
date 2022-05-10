// การ Loop Array
// For Loop , ForEach , ForOf

const data = [10,20,30,40,50];

// //for loop
// for(let i=0;i<data.length;i++){
//     if (data[i]==40) continue;
//     console.log(`ลำดับที่ ${i} : ${data[i]}`);
// }

//for each
//ไม่สามารถใช้ break & continue
data.forEach(x =>{
    if (x==40) break;
    console.log(`สมาชิกใน Array Data = ${x}`)
    
});

// //for of
// //สามารถใช้ break & continue
// let i = 0; //ตัวแปรแสดงผลเลข index
// for(let x of data) {
//     if (x==40) continue;
//     console.log(`index ${i} : ${x}`);
//     i++
// }
