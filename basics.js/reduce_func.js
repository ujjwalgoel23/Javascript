let arr=["apple","orange","grapes","apple","orange"];
const result=arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)) 
        acc[curr]++;
    else 
        acc[curr]=1;
    return acc;
},{});

console.log(result);
   
