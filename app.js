const apiKey = 'b6cc4392568a3586e950307c86a22bbd';
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = city => {
    url=`${apiBase}?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then((data) => update(data))
}

document.getElementById('search').addEventListener('click',function(){
    const search_city=document.getElementById('search_city').value
    getWeather(search_city)
})

const update = data =>{
    document.getElementById('city').innerText=data.name || "Unknown Location!";
    document.getElementById('temp').innerText=data.main.temp;
    document.getElementById('status').innerText=data.weather[0].main;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}
getWeather('Bogra')