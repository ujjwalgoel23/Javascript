const set1= new Set([10,20,30,40,"money"]);
const set2=new Set([10,20,30,40,50,60,"money"]);

//union of these 2 set:->
const set3=new Set([...set1,...set2]);
console.log(set3);

//intersection of these set:->
const set4=[...set1].filter(num=>set2.has(num));
console.log(set4);

//iterate over set
for(let value of set1){
    console.log(value);
}
//iterate using for each method:->
set1.forEach(num=>console.log(num));

 