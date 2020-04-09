

const inp = document.querySelector('.input__city');

function f1() {
    let city = inp.value;
    // api.openweathermap.org / data / 2.5 / weather ? id = { city id } & appid={ your api key }
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=e659141f96cf034901170e56e6407daa`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.city').innerHTML = data.name;
        })
        .catch(function () {
            // catch any errors
        });
}




document.querySelector('.show').onclick = f1;