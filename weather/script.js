
const city_input = document.querySelector('#city_input');
const btn = document.querySelector('.btn');
const cityname= document.querySelector('.city-name');
const weather = document.querySelector('.weather');
const sky_img = document.querySelector('#sky_img');
const weather_name = document.querySelector('.weather_name');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const container = document.querySelector('.container')

const box = document.querySelector('.box');

if(navigator.onLine){
    update();
    }else{
    const container = document.querySelector('.container')
    container.textContent='You are Offline Please connect to Internet'
    container.style.background="none"
    container.style.color="red"
    container.style.textAlign="center"

    }
btn.addEventListener('click',update)

async function update(){
    let city_name =city_input.value;
    let API_key = "2ecb79968a3ce6f78f58fd2cfe5a9293";
    
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`)
    .then(res=>res.json()
    .then(data=> {
        const datass= data;
        console.log(datass)
        let deg = datass.main.temp;
        let degVal=Math.floor(deg-273)+' °C'
        sky_img.src=`https://codewith-pm.github.io/newOne/weather/asset/${datass.weather[0].main.toLowerCase()}.png`
        
        cityname.textContent=datass.name;
        weather.textContent=degVal;

        weather_name.textContent=datass.weather[0].main;
        humidity.textContent=datass.main.humidity;
        wind.textContent=datass.wind.speed+" km/h";
    }))
}
