const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIkey = '55f428ad7a8370ee4852c41ecd5c1edb';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return false;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .info-humidity span');
            const wind = document.querySelector('.weather-details .info-wind span');

            // changing weather image using api response
            switch (json.weather[0].main) {
                case 'Clear' :
                    image.src = "images/clear.png";
                    break;

                case 'Rain' :
                    image.src = "images/rain.png";
                    break;

                case 'Snow' :
                    image.src = "images/snow.png";
                    break;

                case 'Clouds' :
                    image.src = "images/cloud.png";
                    break;

                case 'Mist' :
                    image.src = "images/mist.png";
                    break;

                case 'Haze' :
                    image.src = "images/mist.png";
                    break;

                default:
                    image.src = "images/cloud.png";
                    break;
            }




        })
})

