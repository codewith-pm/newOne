
const city_input = document.querySelector('#city_input')
const btn = document.querySelector('#btn')
const city= document.querySelector('.city')
const climate = document.querySelector('.climate')
const weather = document.querySelector('.weather')
const box = document.querySelector('.box')

const info = document.querySelector('.par').
innerHTML="hello"

let kariapatti = 'test'

// function
box.style.display="none";
async function update(){
    let city_name =city_input.value;
    let API_key = "2ecb79968a3ce6f78f58fd2cfe5a9293";
    
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`).then(res=>res.json().then(data=> {
        const datass= data;
        console.log(datass.weather[0].main )
        console.log(datass.weather[0].description )
        console.log(datass.name)
        let deg = datass.main.temp;
        console.log(Math.floor(deg-273)+' °C')

        climate.innerHTML=datass.weather[0].main
        city.innerHTML=datass.name
        weather.innerHTML=Math.floor(deg-273)+' °C';
        box.style.display='flex'
    }))
}
