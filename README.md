# Weather Dashboard - Challenge #6 in the U of MN Bootcamp

## Built With
* Javascript
* JQuery
* Bootstrap

## Acceptance Criteria
* When you search for a city you are presented with current and future conditions for that city and it is added to the search history
* The current weather displays the city name, the date, and icon representation of weather conditions, temperature, humidity, wind speed and UV index
* The UV index displays a color that indicates wether conditions are favorable, moderate, or severe
* The future weather conditions dispaly a 5-day forcast
* The 5-day forecast displays the date, an icon representation of weather condtions, the temperature, the wind speed, and the humidity
* When you click on a city in the search history, the current and future weather conditions for that city are displayed again

## Screenshot of the Application
![Screenshot (28)](https://user-images.githubusercontent.com/90292697/142741464-d95f1d4b-bb2e-4c3d-94be-3f648790304d.png)

![Screenshot (27)](https://user-images.githubusercontent.com/90292697/142741467-61f291d1-f229-4be0-9d23-867ee4d8b8d1.png)

## Git Repository!
https://github.com/mbahl1670/ch6-weatherDashboard-mjb

## Website
https://mbahl1670.github.io/ch6-weatherDashboard-mjb/

## How this was accomplished
* Created the searchform and html elements that will hold all the weather data
* Obtained Open Weather API key
* Created the getWeather function, which pulls take the name typed into the input form and passes it into the function
* The OneCall endpoint provides all information needed to meet acceptance criteria except for a UV index, the current Weather endpoint will provide the UV index but will only work with latitude & longitude.  You can obtain the latitude and longitude for the city typed in from the OneCall endpoint, then plug that info in for a 2nd API call to obtain the UV index.
* The One Weather API site contains icons for the weather, use the iconID from the API call to get the correct weather icon
* Created an event listener, when a list item in the search hisotry, the city name that is stored in that list item is used to do another getWeather call
