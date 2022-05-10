//Arrow Function

//แบบเดิม
   /*
function fullname(fname,lname){
     return fname+lname;
}
   */
//แบบใหม่
fullname=(fname,lname)=>fname+lname;
setAge=(age)=>"My age : "+age;

console.log(fullname("Mino","Yamero"));
x = setAge(18);
console.log(x);