/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 +'.'+ d.getDate()+'.'+ d.getFullYear();

let URL='http://api.openweathermap.org/data/2.5/forecast?zip=';
const key='&appid=065e46e34be6a63e3e227691795de2be';

document.getElementById('generate').addEventListener('click',gene);

function gene(e){

    let feel=document.getElementById('feelings').value;
    let zipCode=document.getElementById('zip').value;
      weather(URL,zipCode,key) 
      
      
      .then(function(data){
         
            postData('/adding',{date:newDate, temp:data.list[1].main.temp ,feel:feel})
            
                     

                      }) .then(()=>update())




                      };




const weather=async(URL,zipCode,key)=>{
const uni='&units=metric';
const res=await fetch(URL+zipCode+uni+key);

try{

   const data= await res.json();
   return data;
}
catch(error){
    console.log('error'+ error);
}


}


//post data 
const postData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),      
  });

try{

    const newData=await response.json();
    console.log(newData);
    return newData;

}catch(error){
    console.log('error',error);
}

}



 const update=async()=>{

 const re=await fetch('/all');

 try{
     const output=await re.json();

console.log(output);

document.getElementById('date').innerHTML='the date is'+' ' +output['date']  ;
document.getElementById('temp').innerHTML= 'the temprature is' +' ' + Math.round(output['temp'] )+'°c' ;        
document.getElementById('content').innerHTML='your feeling is'+' '+ output['feel'] ;


 }

 catch(error){
     console.log('error',error);
 }


 }