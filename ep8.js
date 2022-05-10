//Default parameter
//กำหนดค่าเริ่มต้นให้กับ parameter ในฟังก์ชั่น
getDataCustomer =(customerName,customerAddress="กรุงเทพมหานคร")=>{
    const address =
`ชื่อลูกค้า : ${customerName}
ที่อยู่ : ${customerAddress}\n`
    return address;
}

console.log(getDataCustomer("Mino","สระแก้ว"));
console.log(getDataCustomer("Yamero"));