const button=document.querySelector('button');

button.addEventListener('click',()=>{
    //accessing the no.
    const input1=document.getElementById("first");
    const num1=Number(input1.value);

    const input2=document.getElementById("second");
    const num2=Number(input1.value);

    // if(num1==NaN ||num2==NaN)return ;   OR
    if(isNaN(num1)||isNaN(num2)) return ;
    //result 
    const result=num1+num2;
    const re=document.querySelector("#result");
    re.innerText="Result : "+result;
})