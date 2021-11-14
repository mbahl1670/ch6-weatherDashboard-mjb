var apiKey = "b8f1c6d27f4bce759e26a007c1ce4b0d";
// OpenWeather info:  email: mbahl1670@gmail.com  password:  bootcamp



var getWeather = function() {
    var apiCity = "Minneapolis";
    var apiLatLong = "https://api.openweathermap.org/data/2.5/weather?q=" + apiCity + "&appid=b8f1c6d27f4bce759e26a007c1ce4b0d";
    
    fetch(apiLatLong).then(function(response) {
        response.json().then(function(data) {
            console.log(data.name);
            varLatitude = data.coord.lat;
            varLongitude = data.coord.lon;
            var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + varLatitude + "&lon=" + varLongitude + "&exclude=minutely,hourly,alerts&appid=b8f1c6d27f4bce759e26a007c1ce4b0d";
            fetch(apiUrl).then(function(response) {
                response.json().then(function(data) {
                    displayWeather(data, apiCity);
                });
            });     
        });
    });

    

}

var displayWeather = function(weatherInfo, city) {
    $("#cityName").text(city);
    console.log(weatherInfo);
}

getWeather();