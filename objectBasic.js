// const obj = {
//  name:"ujjwal",
//  course: "bca",
//  gender: "male",
// }
// console.log(obj)
// console.log(obj.gender);
// console.log(obj["gender"]);
     
//2nd method to create obj
// const person = new Object();
// //add property
// person.name="rohit";
// person.age=80;
// person.gender="male";
// console.log(person);
// //delete 
// delete person.age;
// console.log(person);
// //modify or update
//  person.name="mohit";//or
// person["name"]="mohit";
// console.log(person);

// //3rd method to create obj
// class people{
//     constructor(name, age, gender){   
//         this.name=name;
//         this.age=age;
//         this.gender=gender;    
//     }
// }
// let per1 = new people("rohit" , 20 , "male");
// console.log(per1);

// //methods for object:-
// let obj={name:"ujjwal",
//     age:30,
//     gender:"male",
// }
// const arr=Object.keys(obj);
// console.log(arr);

// // for all values->
// const arr=Object.values(obj);
// console.log(arr);

// key,values ko array ke form me bna deta hai->
// const arr=Object.entries(obj);
// console.log(arr);

// //assign :-
// let obj1={
//     a:1,
//     b:2,
// }
// let obj2={
//     c:3,
//     d:4,
// }
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);
// doing same thing using spread operator
// const obj4={...obj1,...obj2};
// console.log(obj4) ;

// //nested object
// const user={
//     name:"ujjwal",
//     balanace:420,
//     address:{
//         pincode:203412,
//         city:"delhi",
//     }
// }
// console.log(user.address.city);
// //use of "assign" in nested object:-
// const user2=Object.assign({},user);
// console.log(user2);
// user2.name="mohit";// name does not change in user1 becoz it creates deep copy
// console.log(user.name);
// user2.address.pincode=245412;// here it cretes shallow copy
// console.log(user.address.pincode);
//hence the conclusion is jo nested object ke andar ke element hai vo shallow copy create krnge means change ho jynge 
// jbki jo bharr wale hai vo deep copy create krnge mtlb change nhi honge
// spread method ka bhe same he seen hai isliye hamare pass best method hai ki hm jb bhe nested object ho toh hm structureclone ka
// structureclone sbki deep copy he create krta hai

// //DESTRUCTING OF AN OBJECT:->
// let obj={
//  name:"rohit",
//  money:430,
//  balance: 30,
//  age:20,
// }
// const{name:full_name,balance}=obj;
// console.log(full_name,balance);

//DESTRUCTING OF AN ARRAY
const arr=[1,2,3,4,5];
// const[first,second,,fourth]=arr;
// console.log(first,second,fourth);
//agar hm chahata hai ki 3rd ke andar baaki saare value aa jaye toh
const[first,second,...third]=arr;
console.log(first,second,third);



