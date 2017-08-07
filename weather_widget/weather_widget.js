// var request = require('request');
// var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + process.argv[2] + '&APPID=f406c9845cd234b05b4a185645cad86a';
//
// request(url, function (error, response, body) {
//   console.log('error:', error);
//   console.log('statusCode:', response && response.statusCode);
//   console.log('city:', JSON.parse(body).name);
//   console.log('temperature:', JSON.parse(body).main.temp);
// });


// DT version
var request = require('request');
var geolocation = require('geolocation');
var _ = require('lodash');

var app = require('express')();
const PORT = 5000;

app.set('views', './views');
app.set('view engine', 'ejs');

var uri = 'http://api.openweathermap.org/data/2.5/weather';

app.get('/', function(req, res) {
  var latitude = 48.8698679;
  var longitude = 2.3072976;

  // geolocation.getCurrentPosition(function (err, position) {
  //   if (err) throw err
  //   console.log(position)
  // });

  request({
    uri: uri,
    qs: {
      lat: latitude,
      lon: longitude,
      // q: 'melbourne, au',
      units: 'metric',
      appid: process.env.OPEN_WEATHER_APP_KEY
    }
  }, function(error, response, body) {
    var body = JSON.parse(body);
    res.render('index', {temperature: body.main.temp, location: body.name});
  });

});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
