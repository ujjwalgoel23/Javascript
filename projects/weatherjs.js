document.querySelector("button").addEventListener("click",()=>{
    const place=document.getElementById("city-input").value;

function updated_temp(data){
    const temp=document.getElementById("temp");
     temp.innerHTML= data.current.temp_c;
}

    const api=fetch(`http://api.weatherapi.com/v1/current.json?key=2321325ebd9b474bbd161846250106&q=${place}&aqi=yes`);
    api
    .then(response=>response.json())
    .then(data=>updated_temp(data))
    .catch(error=>console.log(error));
    
})