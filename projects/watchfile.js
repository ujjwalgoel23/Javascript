function timing(){
  const timer=document.getElementById("root");
  const now= new Date();
  const indiantime=now.toLocaleTimeString();
  timer.innerHTML=indiantime;
}
  setInterval(timing,1000);//1000milisecond=>1sec
  const timer=document.getElementById("root");

  timer.style.fontSize="200px";
  timer.style.display="flex";
  timer.style.alignItems="center";
  timer.style.justifyContent="center";
  timer.style.height="100vh";


