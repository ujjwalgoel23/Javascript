document.addEventListener("click",(Event)=>{
   const circle= document.createElement('div');
   circle.className="circle";
   circle.innerHTML="Hi";

   const x=Event.clientX;
   const y=Event.clientY;

   circle.style.left=`${x-25}px`;
   circle.style.top=`${y-25}px`;

   const color = ["#FFFFFF", "#FF3B3B", "#FFD700", "#00FFFF", "#32CD32", "#FF00FF", "#FFA500", "#C0C0C0", "#800080", "#008080"];
   circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
   document.body.appendChild(circle);

   setTimeout(()=>{
    circle.remove();
   },5000);
})