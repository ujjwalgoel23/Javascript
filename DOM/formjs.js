//   //accessing all the values from form
const form=document.querySelector('form');

 form.addEventListener('submit',(event)=>{
    event.preventDefault();//prevent us from refreshing the page

//     // const first=document.getElementById("first");
//     // const second=document.getElementById("second");
//     // const third=document.getElementById("third");
//     // const result=document.getElementById("result");
//     // result.innerHTML=`${first.value} ${second.value} `;

console.log(event.target.value);
//*************************OPTIMISED CODE****************************/
  const data = new FormData(form);// this is API
//fetching data-> 
  // console.log(Array.from(data.values()));
  //console.log(Array.from(data.entries())); return the data in 2d array
  

//     // document.body.append(result);   
  });

