export function weatherfunc() {
    const weatherinput=document.getElementById("weatherinput");
    const getbtn=document.getElementById('getbtn');

    const locationresults = document.getElementById("locationresults");
     const tempratureresults = document.getElementById("tempratureresults");
     const  windspeed = document.getElementById("windspeed");
     const weathedescription = document.getElementById("weathedescription");


    const locationspinner = document.getElementById("locationspin");
    const tempraturespinner = document.getElementById("tempraturespinner");
    const windspeedspinner = document.getElementById('windspeedspinner');
   const weatherspinner  = document.getElementById("weatherspinner");


    const Apikey = "9c73c3614a12dcfc0008e4acdfcecd75";


    async function weatherget() {
        const weathervalue  = weatherinput.value.trim()
        if(!weathervalue){
         alert("enter city")
        }

           locationspinner.style.display = "block"
            tempraturespinner.style.display = "block"
            windspeedspinner.style.display = "block"
            weatherspinner.style.display = "block"


       

        locationresults.innerHTML = "";
        tempratureresults.innerHTML = "";
        windspeed.innerHTML = "";
        weathedescription.innerHTML = "";

        try{
           
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weathervalue}&units=metric&appid=${Apikey}`);
         if(!response.ok)throw new Error("network issue or city not found");
         const data = await response.json();
         console.log(data);

         locationspinner.style.display = "none";
         tempraturespinner.style.display = "none";
         windspeedspinner.style.display = "none";
           weatherspinner.style.display = "none";

         locationresults.innerHTML = ` <h1>${data.name}</h1>`;
        

         
         tempratureresults.innerHTML = `<h1>The main temprature for ${data.name} is ${data.main.temp} °C </h1>`
         
         windspeed.innerHTML = ` <h2>wind speed is ${data.wind.speed} m/s</h2>`

         weathedescription.innerHTML =  `<h1>Weather description for ${data.name} is  ${data.weather[0].description} </h1>`
         
        }
        catch (error){
            alert("failed search please try again");
           
           
        }
        finally{
            
        }
        weatherinput.value = "";

         locationspinner.style.display = "none";
         tempraturespinner.style.display = "none";
         windspeedspinner.style.display = "none";
           weatherspinner.style.display = "none";

     
    }

    getbtn.addEventListener("click",weatherget);
}
