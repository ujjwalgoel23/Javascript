const arr=[1,2,3,4,"ujjwal",true];
console.log(arr);

//length of the array is :->
console.log(arr.length);

//accessing the element of array using index
console.log(arr[2]);
  //OR
  console.log(arr.at(2))
  /*"at" method is latest to access the lemenet of array , it also access neg. index such as
   -1 then the last value is printed while []does not carry neg. index*/
       
   //copying the element
   const newarr=arr;
   console.log(newarr)
   console.log(newarr==arr);

   // pushing more element in array at end 
   arr.push("goel");
   console.log(arr);

   //deleting the element from array;
   arr.pop();
   console.log(arr);

   // add element at start
   arr.unshift(10);
   console.log(arr);

// deleting element from start
arr.shift();
console.log(arr);

// delete at particular index
delete arr[0];
console.log(arr);
// iski yeh disadvantage hai ki ye value toh delete kr degaa pr space deltee nhi kregaa
//thatswhy hm use nhi krte delete ko

console.log(arr.indexOf("ujjwal"));
console.log(arr.lastIndexOf("ujjwal"));
 console.log(arr.includes(11));

//IMPORTANT FOR INTERVIEW
 //slice()--> first value first index , second value endindex which is not in included
console.log(arr.slice(2,4));
//splice()--> first value->starting index , second value->no. of element you want to print
console.log(arr.splice(2,4));
//or agar aab hm arr kko print krange toh dheknge ki arrray se splice wlaa part cut ho gya hai

//modified version of splice operation-->
// splice(starting_index,total_element_delete,add value);
console.log(arr.splice(2,4,90,30,40,70));
console.log(arr);

//concatetation of array
let arr1=[2,35,6,11];
let arr2=[5,12,19,20];
let arr3=arr1.concat(arr2);
console.log(arr3);


arr1.push(arr2);//prefer not to use
console.log(arr1);

//2D array
let arr2d=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);
console.log(arr2d[0]);
console.log(arr2d[0][2]);

//conversion of 2d/3d/4d/5d... array to 1d
let convertarr=arr2d.flat(Infinity);
console.log(convertarr);

//func() to check a rray is really a array
let abc=[1,2,3,45,6];
console.log(Array.isArray(abc));

// new metgod to declare array
let ac= new Array(91,2,3,4,);//agar hm yha pr single value dete hai toh vo size hota hai array ka
console.log(ac);