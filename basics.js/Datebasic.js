// // const d=new Date();
// // console.log(d);
// // console.log(d.getDate());//or
// // const now=Date.now();
// // console.log(now);
// // console.log(d.toDateString());
// // console.log(d.toString());

// // const da= new Date("2024-01-12");
// // console.log(da);

// const d=new Date;
// d.setDate(20);
// d.setFullYear(2022);
// d.setMonth(3);
// console.log(d);
// console.log(d.toLocaleDateString());
// console.log(d.toString());  

// //date calculation
// const date1=new Date();
// const date2= new Date("2025-04-20");
// console.log(date2-date1);//ans milisecond me milegaa
 
//COUNTDOWN TIMER 
const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");

const date=date2-date1;
const days=Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24);
const minute=Math.floor((date/(1000*60))%60);
const second=Math.floor((date/(1000))%60);
console.log(`olympic countdown:Days ${days} hour:${hour} minutes: ${minute} second: ${second}`);
