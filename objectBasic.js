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

//methods for object:-
let obj={name:"ujjwal",
    age:30,
    gender:"male",
}
// const arr=Object.keys(obj);
// console.log(arr);

// // for all values->
// const arr=Object.values(obj);
// console.log(arr);

// key,values ko array ke form me bna deta hai->
// const arr=Object.entries(obj);
// console.log(arr);

//assign :-
let obj1={
    a:1,
    b:2,
}
let obj2={
    c:3,
    d:4,
}
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);
// doing same thing using spread operator
const obj4={...obj1,...obj2};
console.log(obj4)