var express = require('express');
var mqtt = require('mqtt');
var router = express.Router();
var url = require('url');

var mqtt_url = process.env.CLOUDMQTT_URL || 'tcp://m16.mqtt.com:14012';
var topic = process.env.CLOUDMQTT_TOPIC || 'new';
//var client = mqtt.connect(mqtt_url);

var options = {
    port: 14012,
    host: 'mqtt://m16.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'hhvkvucy',
    password: 'AqJlrrAid2xf',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('mqtt://m16.cloudmqtt.com', options);



/* GET home page. */
router.get('/', function(req, res, next) {
console.log("connected 1");
  var config =  url.parse(mqtt_url);
  config.topic = topic;
  res.render('index', {
	connected: client.connected,
	config: config
  });
});

client.on('connect', function() {
console.log("cpnnected 1");

  //router.get('/stream', function(req, res) {
   // console.log("cpnnected 661");

    // send headers for event-stream connection
    // see spec for more information
    // res.writeHead(200, {
    //   'Content-Type': 'text/event-stream',
    //   'Cache-Control': 'no-cache',
    //   'Connection': 'keep-alive'
    // });
    //res.write('\n');



var https = require('https') ; 
var url ;
var request = require('request');

	function createPublicFileURL(storageName) {
		    url = `https://us-central1-kkkkk-214820.cloudfunctions.net/addMessage?text=${encodeURIComponent(storageName)}`;

console.log("what");
request(`https://us-central1-kkkkk-214820.cloudfunctions.net/addMessage?text=${encodeURIComponent(storageName)}`, function (error, response, body) {
console.log("up");
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
}



	//here, we are uploading theinfo to posts .. so it can be retrieved when necessary
    // Timeout timer, send a comment line every 20 sec
    var timer = setInterval(function() {
      //res.write('event: ping' + '\n\n');
      console.log('event: ping' + '\n\n');
    }, 20000);

    client.subscribe(topic, function() {
      console.log("cpnnected k1");

      client.on('message', function(topic, msg, pkt) {
		//res.write("New message\n");
    console.log(msg+"hello");
	createPublicFileURL(msg);

		// var json = JSON.parse(msg);
  //       console.log("heelo "+json);

        //res.write("data: " + json.date + ": " + json.msg + "\n\n");
      //});
    });
  });
});

module.exports = router;
