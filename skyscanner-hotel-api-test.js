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

var destination = getElementById('hotel-destination').value || 'tokyo', 
apikey = 'prtl6749387986743898559646983194', 
checkin = getElementById('checkin').value || '', 
checkout = getElementById('checkout').value || '', 
guests = getElementById('guests').value || '1', 
rooms = getElementById('rooms').value || '1'; 

router.get('/sky', function(req, res) {
	unirest.get('http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/US/USD/en-us/' + destination + '?apikey=' + apikey)
		.headers({
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json'
		});
	console.log(res);
});


// router.get('/sky', function(req, res){
// 	unirest.get('http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/US/USD/en-us/{entityid}/{checkindate}/{checkoutdate}/{guests}/{rooms}?apiKey=' + apikey);