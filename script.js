const input = document.querySelector('.input__city');
const input2 = document.querySelector('.input__country');
const cityDiv = document.querySelector('.city');
const weathTemp = document.querySelector('.weather');
const weathDescr = document.querySelector('.weather-descr');
const weathIcon = document.querySelector('.weather-icon');
const flagIcon = document.querySelector('.flag-icon');
const btn1 = document.querySelector('.show');
const btn2 = document.querySelector('.clear');

btn1.onclick = function () {
    let city = input.value;
    let country = input2.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e659141f96cf034901170e56e6407daa`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            cityDiv.textContent = data.name;
            weathTemp.innerHTML = Math.round(data.main.temp) - 273 + '&deg;';
            weathDescr.textContent = data.weather[0].description;
            weathIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="50" height="50">`;
            let countryCod = (data.sys.country).toLowerCase();
            flagIcon.innerHTML = `<img src="http://openweathermap.org/images/flags/${countryCod}.png">`;

        })
        .catch(function () {

        });

}
btn2.onclick = function () {

    cityDiv.textContent = '';
    weathTemp.innerHTML = '';
    weathDescr.textContent = '';
    weathIcon.innerHTML = '';
    flagIcon.innerHTML = '';
}



