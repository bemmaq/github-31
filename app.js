const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey = 'f631ea87daddf959f8d7a12c30009e4c';
console.log(url + 'Bishkek' + '&appid=' + apiKey);
const input = document.querySelector('input');
const btn = document.querySelector('.bx-search');
const info = document.querySelector('.info');
const imgurl = 'https://openweathermap.org/img/wn/';

async function getWeather(name) {
    try {
        const res = await fetch(url + name + '&appid=' + apiKey);
        const data = await res.json();
        console.log(data);
        showCity(data);
    } catch (err) {
        console.log(err, 'oshibka');
    }
}

btn.onclick = () => {
    getWeather(input.value);
};


function showCity(obj) {
    info.innerHTML = '';
    info.innerHTML = `
    <h1>${obj.name}</h1>
    <h4>Temperature:${Math.round(obj.main.temp - 273.15)}°C</h4>
    <h4>${obj.weather[0].description}</h4>
    <img src='${imgurl + obj.weather[0].icon}@2x.png' style='width: 100px; height: 100px;'style='background-image:no-repeat'/> <!-- Adjust the width and height as needed -->
    <h3>Humidity:${obj.main.humidity}</h3>
    <h3>Wind:${obj.wind.speed}</h3>
    <h4> Cloudy:${obj.clouds.all}</h4>
    `;
    
}


function getWeatherCity(weather) {
    switch (weather) {
        case 'Rain':
            info.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2013/04/01/09/22/rain-98538_640.png')";
            break;

        case 'Clouds':
            info.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ohpRHNnuufuXeFiKCqoiPHWENAiDiAhip6x5ZKkOjOQ8iCJdpjVWNMltAcIZZWUVtjU&usqp=CAU')";
            break;

        case 'Clear':
            info.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/6198/6198743.png')";
            break;

        case 'Snow':
            info.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/012/806/420/small_2x/3d-cartoon-weather-icon-snow-clouds-and-snowflakes-sign-isolated-on-transparent-background-3d-render-illustration-png.png')";
            break;

        default:
            info.style.backgroundImage = "url('default-background.jpg')";
            break;
    }
}
