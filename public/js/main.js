const key=document.getElementById('textbox');
const submit=document.getElementById('submit');
const output=document.getElementById('output')


// const apikey="98b7368dd5b3e8010c2f0d37exr4dc0f99"
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&appid=98b7368dd5b3e8010c2f0d37e4dc0f99&q=';

async function weatherdata(city){
   const response=await fetch(apiurl+city);
   var data=await response.json();
   console.log(data);
 const cityname=document.getElementById("output").innerText=city;
 
 if(cityname==""){
   document.getElementById("output").innerText="PLEASE ENTER CITY NAME";
 }
else if(cityname !=city){
   document.getElementById("output").innerText="PLEASE ENTER CORRECT NAME"
}
   else{
      document.getElementById("output").innerText=data.name;
 document.getElementById("temper").innerText="temp:"+data.main.temp +"°C";
 document.getElementById("day").innerHTML=data.weather[0].main;
 const dt=data.dt;
 var day = new Date(dt*1000);
     document.getElementById("date").innerText=day.toDateString();
   // document.getElementById("date").innerText=day.toUTCString();
   //  console.log(day.toUTCString()) 
 
   }
}
submit.addEventListener("click",()=>{
   weatherdata(key.value);
})










// const getdata=async()=>{
//     let cityval=key.value;
//  if(cityval=="")
//    {
//             outputs.innerText="please enetr any city";
//     }else{
//    try{
//      const url= 'http://https://api.openweathermap.org/data/2.5/weather?q=${key}&appid=98b7368dd5b3e8010c2f0d37e4dc0f99';
   
//     const tarra=await fetch(url);
//     const data =await tarra.json();
// console.log(data);
//    }catch{
//       outputs.innerText="please enetr city name correctly";
//    }
//  }
    
// }
// submit.addEventListener('click',getdata);
