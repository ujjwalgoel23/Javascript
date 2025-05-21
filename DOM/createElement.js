// we learn how we can create a element using javascipt
//we want to create <li>typescript<li> using js

//created an element
// let element=document.createElement('li');
// element.innerHTML="typescript";

// const parent=document.getElementById("root");
// parent.appendChild(element);

// //attaching multiple element->
// function attach(content){
// let element=document.createElement('li');
// element.innerHTML=content;
// const parent=document.getElementById("root");
// // parent.appendChild(element);
// parent.append(element,"hello world"); // is also used to attach multiple node at single time
// }
// attach("ts");
// // attach("react");

//******************************************** */
// create a textnode->
// const element=document.createTextNode("hello coders");
// const parent=document.getElementById("root");
// parent.append(element);

//******************************************** */
// //create a attribute node-->
//  const element=document.createAttribute("id");
//  element.value= "first" ;

//access first element
//  const parent=document.querySelector('li');
//  parent.setAttributeNode(element);

//access second element
// const parent=document.getElementById("root");
// parent.children[1].setAttributeNode(element);

//**************************************************/
//access attribute of a element-->
// const element=document.getElementById("root");
// console.log(element.getAttribute("id"));

//    //setattribute-->
//    element.setAttribute("class","ujjwal");
//    //remove attribute-->
//    element.removeAttribute("class");

//********************Add node to the DOM***************/
//  const parent=document.getElementById("root");

//  const element=document.createElement('li');
//  element.innerHTML="typescript";

// // parent.prepend(element);//used to add node at starting
// // parent.append(element);//used to add node at end

// //insert at specific place(insert before)-->
// const child2=parent.children[1];
// // parent.insertBefore(element,child2);//(newnode,refrence node)

// //---replace child---
// parent.replaceChild(element,child2);//(new element,old element)

// const parent=document.getElementById("root");

// const element=document.createElement("div");
// element.innerHTML="hello coder army";

// //parent.insertAdjacentElement("beforebegin" , element);
// parent.insertAdjacentElement("afterbegin" , element);
// // parent.insertAdjacentElement("beforeend" , element);
// //parent.insertAdjacentElement("afterend" , element);

//***********delete node or element************** */
// document.querySelector('li').remove();//removes first item of list

