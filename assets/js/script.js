var apiKey = "b8f1c6d27f4bce759e26a007c1ce4b0d";
// OpenWeather info:  email: mbahl1670@gmail.com  password:  bootcamp



var getWeather = function() {
    // the endpoint we need to use for OpenWeather is the One Call Api.  However, this uses the latitude and longitude of a city.
    // the Current Weather API lets us use a city name and will provide the lat & lon for that city
    // perforing 2 API Calls, one to obtain the lat&long of the selected city, then another using that lat&lon to get the 
    // weather information we need for the app

    var apiCity = "Minneapolis"; // city that is going to be searched
    // Current Weather API allows us to use a city name
    var apiLatLong = "https://api.openweathermap.org/data/2.5/weather?q=" + apiCity + "&appid=b8f1c6d27f4bce759e26a007c1ce4b0d";

        fetch(apiLatLong).then(function(response) {
        response.json().then(function(data) {
            // obtian the lat&long of the selected city and put into a variable
            console.log(data.name);
            varLatitude = data.coord.lat;
            varLongitude = data.coord.lon;
            // the apiCall needed for OneCall API endpoint, using the lat&lon obtained from the first call
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