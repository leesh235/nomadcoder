const weather = document.querySelector(".js-weather");
const API_KEY = "2d25a6a166c8f0d41fd3ac42c8d6d5bd";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
} 

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("can`t access geo location");
}

function aksForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords === null){
        aksForCoords();
    }else{
        const parseCoords = JSON.parse(loadedcoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();