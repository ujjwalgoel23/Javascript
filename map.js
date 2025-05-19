const map1=new Map([
    ["rohan",3],
    ["sohan",34],
]);
console.log(map1);


//another method of initializing
const map2=new Map();
map2.set("rohan","sohan");
map2.set(3,4);
console.log(map2);


//iterate over map
for(let value of map1){
    console.log(value);
}
//accessing only keys:->
for(let [key,value] of map1){
    console.log(key);//access only key
    console.log(value);//access only values
}
