//FIRST METHOD---->
// const id1=document.querySelector("#red");
// const id2=document.querySelector("#blue");
// const id3=document.querySelector("#yellow");
// const id4=document.querySelector("#green");
// const id5=document.querySelector("#orange");
// const body=document.body;

// id1.addEventListener("click",()=>{
//     body.style.backgroundColor="red";
// })

// id2.addEventListener("click",()=>{
//    body.style.backgroundColor="blue";
// })

// id3.addEventListener("click",()=>{
//    body.style.backgroundColor = "yellow";
// })

// id4.addEventListener("click",()=>{
//   body.style.backgroundColor = "green";
// })

// id5.addEventListener("click",()=>{
//   body.style.backgroundColor = "orange";
// })
/**********************************8******* */
//SECOND METHOD-->

// const button=document.querySelectorAll("button");
// const body=document.body;

// button.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         body.style.backgroundColor=button.id;
//     })
// })

//third method--->//most optimised
//by using the concept of event bubbling and event capturing-->
const root=document.getElementById("root");

root.addEventListener("click",(event)=>{
    if(event.target.tagName ==='BUTTON')
    document.body.style.backgroundColor=event.target.id;
})



