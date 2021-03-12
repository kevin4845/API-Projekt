const apikey = 'c6ed510a2963cd5722bf5952c6a0b42f'

function Start() {
    document.getElementById('submit').addEventListener('click', ()=> {
        ShowResult()
    })


}

/* WHEN PRESSING SUBMIT TO GET DATA ABOUT THE CITY THE FUNCTION 'ShowResult' WILL BE RUN */
function ShowResult() {
    var city = document.getElementById("city-field").value;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
    fetch(url).then(data => data.json()).then(function (data) {
        for (let i = 0; i < data.list.length; i++) {
            document.getElementById('box'+i).innerHTML = `
            <h4>${data.list[i].dt_txt}</h4>
            <p>Cloud: ${data.list[i].clouds.all}</p>
            <p>Min. Temp: ${data.list[i].main.temp_min}</p>
            <p>Max. Temp: ${data.list[i].main.temp_max}</p>
            <p>Feels Like: ${data.list[i].main.feels_like}</p>
            `;
        }

    });

}
