//first request to get entityID, second and more to get resp obj
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 80;
var unirest = require('unirest');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var destination = 
// getElementById('hotel-destination').value || 
'tokyo', 
apikey = 'prtl6749387986743898559646983194', 
checkin = 
// document.getElementById('checkin').value || 
'2016-10-15T19:30:00', 
checkout = 
// document.getElementById('checkout').value || 
'2016-10-15T20:55:00', 
guests = 
// document.getElementById('guests').value || 
'1', 
rooms = 
// document.getElementById('rooms').value || 
'1'; 

app.get('/hotel', function(req, res) {
	unirest.get('http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-us/' + destination + '?apikey=' + apikey)
		.headers({
			Accept: 'application/json'
		}).end(function(data){
	res.json(data);})
	})


// router.get('/sky', function(req, res){
// 	unirest.get('http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-us/{entityid}/{checkindate}/{checkoutdate}/{guests}/{rooms}?apiKey=' + apikey);

app.listen(PORT, function(){
	console.log('listening on', PORT);
});