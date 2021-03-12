const apikey = 'c6ed510a2963cd5722bf5952c6a0b42f'

/* THIS FUNCTION WILL BE RUN AS SOON AS THE BODY IS LOADED IN THE HTML */
function Start() {
    document.getElementById('submit').addEventListener('click', ()=> {
        ShowResult()
    })

    // Gets all the elements with the class 'result'
    results = document.getElementsByClassName('result');

    /* CREATES A BUTTON FOR EACH ITEM THAT HAS THE CLASS 'RESULT' */
    for (var i = 0; i < results.length; i++) {
        results[i].addEventListener('click', function() {
            AnimatePressed(this.id);
        })     
    }

}

function AnimatePressed(id) {
    document.getElementById(id).animate([
        { transform: 'rotate(360deg)' }
    ], {
        duration: 1000,
        iterations: 2
    });
}

/* WHEN PRESSING SUBMIT TO GET DATA ABOUT THE CITY THE FUNCTION 'ShowResult' WILL BE RUN */
function ShowResult() {
    var city = document.getElementById("city-field").value;
    var unit = document.getElementById("unit").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${unit}`
    fetch(url).then(data => data.json()).then(function (data) {
        var unit = document.getElementById("unit").value; 
        document.getElementById('weather-img').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById('city').innerText = data.name
        document.getElementById('country').innerText = data.sys.country
        if (unit === "metric") {
            document.getElementById('temp').innerText = data.main.temp + " °C";
            document.getElementById('wind-speed').innerText = data.wind.speed + " m/s";
        } else if (unit == "standard") {
            document.getElementById('temp').innerText = data.main.temp + " °K";
            document.getElementById('wind-speed').innerText = data.wind.speed + " m/s";
        } else if (unit == "imperial") {
            document.getElementById('temp').innerText = data.main.temp + " °F";
            document.getElementById('wind-speed').innerText = data.wind.speed + " mph";
        }
        document.getElementById('latitude').innerText = data.coord.lat
        document.getElementById('longtitude').innerText = data.coord.lon
        document.getElementById('visibility').innerText = data.visibility
    });

}
