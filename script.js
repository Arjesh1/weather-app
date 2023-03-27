
    const apiKey = '9d00ba9d6fefd4f4f29c1971d1b8dd06'
    const apiUrl =  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=kathmandu'

    async function checkWeather(){
        const response = await fetch (apiUrl + `&appid=${apiKey}`)
        let data = await response.json()

        console.log(data);
       


        document.getElementById('city').innerHTML=data.name
        document.getElementById('temp').innerHTML=Math.round(data.main.temp)
        document.getElementById('description').innerHTML=data.name

    }
    checkWeather()

    




