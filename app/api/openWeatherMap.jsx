var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=a9fa025565bf880711e4bf718ee239db';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function (res) {
    debugger;
          if(res.data.cod != 200  && res.data.message) {
              throw new Error ('Unable to Fetch Weather');
          } else{
            return res.data.main.temp;
         }
      },  function (err) {
      //  throw new Error (err.response.data.message);
          throw new Error('Unable to Fetch Weather for that Location.')
      });
  }
}
