//**********fetch() method************************ */
const obj=fetch('http://api.weatherapi.com/v1/current.json?key=2321325ebd9b474bbd161846250106&q=London&aqi=yes');

// setTimeout(()=>{
//     console.log(obj);   ==>is not good because we does not know that how much time does the api takes to fetch the data
// },2000);
 
// obj.then((obj)=>{
//     console.log(obj);
// })

//if api does not able to fetch the data then we need to throw an error =>
    // obj.then((response)=>{
    //     console.log(response);
    // }).catch((error)=>{
    //     console.log(error);
    //     })

// obj.then((response)=>{
//     console.log(response.json()); // ye he promise he return krega. ye bhe ke async task hai toh execute hone me time lgega
// })
   
// obj.then((response)=>{
//   const pro=response.json();
  
//     pro.then((data)=>{
//         console.log(data);
//     })
// });

//ANOTHER METHOD =>
    // const pro=obj.then((response)=>{
    //     return response.json();
    // })
    // pro.then((data)=>{
    //     console.log(data);
    // });

    //more easy=>
        obj.then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    });//this method is  also known as promise chaining
     

