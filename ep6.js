//Rest Parameter
//ส่งค่าเข้าไปทำงานใน function โดยไม่จำกัดจำนวน
/*
summation =(x,y)=>{
    return x+y
}
summation =(x,y,z)=>x+y+z;
console.log(summation(50,100));
console.log(summation(500,233));
console.log(summation(100,200,300)); */

summation=(...number)=>{
    let total =0;
    for(let i=0;i<number.length;i++){
        total+=number[i]
    }
    return total;
}
console.log(summation(50,50,50,50,50,-150));

//For of 
summation1=(...numberArr)=>{
    let total=0
    for(let number of numberArr) total+=number
    return total;
}

console.log(summation1(50,25,75,150,50,-150));
