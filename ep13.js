// ค้นหาข้อมูลใน Array
// indexOf(ข้อมูล)
// ผลการค้นหาจะได้ เลข index ที่ค้นเจอ ถ้าไม่เจอได้ -1
const colors = ["เขียว","น้ำเงิน","ขาว","แดง","เหลือง"];
let ido = colors.indexOf("แดง");
console.log(ido);
console.log(colors.indexOf("ม่วง")); //ค้นไม่เจอ

// find(ข้อมูล)
// ผลการค้นหาจะได้ ข้อมูลนั้น ถ้าค้นไม่เจอได้ undefined
let find = colors.find(x => x==="เหลือง" ); // === เช็คค่าข้อมูล และชนิด
console.log(find);

// findIndex(ข้อมูล)
// ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
let findindex = colors.findIndex(x => x==="ขาว");
console.log(findindex);