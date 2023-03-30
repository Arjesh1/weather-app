let searchForm = document.getElementById("form");

searchForm.addEventListener("click", (e) => {
    e.preventDefault();

    city= document.getElementById('searchCity').value
    


    
    
    const apiKey = '9d00ba9d6fefd4f4f29c1971d1b8dd06'
    const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`

    async function checkWeather(){
        const response = await fetch (apiUrl + `&appid=${apiKey}`)
        let data = await response.json()

        
       
        document.getElementById('city').innerHTML=data.name
        document.getElementById('temp').innerHTML=Math.round(data.main.temp)
        document.getElementById('wind').innerHTML=data.wind.speed + " km/hr"
        document.getElementById('humidity').innerHTML=data.main.humidity+ "%"

        

    }
    checkWeather()

})

