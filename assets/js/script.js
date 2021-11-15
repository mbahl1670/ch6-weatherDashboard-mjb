var apiKey = "b8f1c6d27f4bce759e26a007c1ce4b0d";
// OpenWeather info:  email: mbahl1670@gmail.com  password:  bootcamp

var fiveDayForcastEl = document.querySelector("#forcast");


var getWeather = function (city) {
    // the endpoint we need to use for OpenWeather is the One Call Api.  However, this uses the latitude and longitude of a city.
    // the Current Weather API lets us use a city name and will provide the lat & lon for that city
    // perforing 2 API Calls, one to obtain the lat&long of the selected city, then another using that lat&lon to get the 
    // weather information we need for the app

    var apiCity = city; // city that is going to be searched
    // Current Weather API allows us to use a city name
    var apiLatLong = "https://api.openweathermap.org/data/2.5/weather?q=" + apiCity + "&appid=b8f1c6d27f4bce759e26a007c1ce4b0d";

    fetch(apiLatLong).then(function (response) {
        response.json().then(function (data) {
            // obtian the lat&long of the selected city and put into a variable
            console.log(data.name);
            varLatitude = data.coord.lat;
            varLongitude = data.coord.lon;
            // the apiCall needed for OneCall API endpoint, using the lat&lon obtained from the first call
            var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + varLatitude + "&lon=" + varLongitude + "&exclude=minutely,hourly,alerts&units=imperial&appid=b8f1c6d27f4bce759e26a007c1ce4b0d";
            fetch(apiUrl).then(function (response) {
                response.json().then(function (data) {
                    displayWeather(data, apiCity);
                });
            });
        });
    });
}

var displayWeather = function (weatherInfo, city) {
    console.log(weatherInfo);
    
    $("#cityName").text(city);
    $("#currentDate").text("(" + moment.unix(weatherInfo.current.dt).format("MM/DD/YYYY") + ")");   // tutor Jared Jawed helped with the conversion from 
    var weatherIcon = weatherInfo.current.weather[0].icon;
    var weatherIconSource = "http://openweathermap.org/img/wn/" + weatherIcon +".png";
    $("#currentIcon").attr("src", weatherIconSource);
    
    $("#currentTemp").text(weatherInfo.current.temp + " °F");
    $("#currentWind").text(weatherInfo.current.wind_speed + " MPH");
    $("#currentHumidity").text(weatherInfo.current.humidity + " %");
    $("#currentUV").text(weatherInfo.current.uvi);

    // using a for loop to fill in the 5 day forecast
    for (i=1; i<6; i++) {
        $("#day" + i + "Date").text("(" + moment.unix(weatherInfo.daily[i].dt).format("MM/DD/YYYY") + ")");
        var forcastWeatherIcon = weatherInfo.daily[i].weather[0].icon;
        var forcastWeatherIconSource = "http://openweathermap.org/img/wn/" + forcastWeatherIcon +".png";
        $("#day" + i + "Icon").attr("src", forcastWeatherIconSource);
        $("#day" + i + "Temp").text(weatherInfo.daily[i].temp.day + "  °F");
        $("#day" + i + "Wind").text(weatherInfo.daily[i].wind_speed + " MPH");
        $("#day" + i + "Humidity").text(weatherInfo.daily[i].humidity + " %");
    }   
}

// this is the function that will be called when you click the search button
var citySearch = function(city) {
    getWeather(city);
}



// event handler for when the search button is clicked
$("#searchBtn").on("click", function(event) {
    var newCity = $("#citySearch").val().trim();
    citySearch(newCity);
});

// When the input area for a city is clicked, it will clear the placeholder or whatever is currently
// there.  If you click away from the input area without putting anything in, the placeholder appears again
$("#citySearch").on("click", function() {
    $("#citySearch").attr("placeholder", "").val("");
}).on("blur", function() {
    $("#citySearch").attr("placeholder", "Type a City Name Here")
});



// for (var i = 1; i < 6; i++) {
    //         $('#forecast').append(`
    //         <div class="col-lg-4 col-md-2 card">
    //             <h2>date</h2>
    //             <p>image</p>
    //             <div class="d-flex">
    //             <p class="mr-2">Temp:</p>
    //             <p>${weatherInfo[i].temp.day}°F</p>
    //         </div>
    //         <div class="d-flex">
    //             <p class="mr-2">Wind:</p>
    //             <p>9.53 MPH</p>
    //         </div>
    //         <div class="d-flex">
    //             <p class="mr-2">Humidy:</p>
    //             <p>66 %</p>
    //         </div>
    //     </div>
    //     `);
    // }
    