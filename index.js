var express = require('express');
var app = express();
var VK = require('vksdk');
var vk = new VK({
   'appId'     : 5963094,
   'appSecret' : 'ToBbOS0OAOMiDy2yX9Y7',
   'language'  : 'ru'
});
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


 
/**
 * Request server methods
 */
 
// Setup server access token for server API methods 
vk.on('serverTokenReady', function(_o) {
    // Here will be server access token 
    vk.setToken(_o.access_token);
});
 
// Turn on requests with access tokens 
vk.setSecureRequests(true);
 
// Request server API method 
app.get('/', function(req, res) {
    vk.request('secure.getSMSHistory', {}, function(_dd) {
      res.send(_dd);
    });
   vk.setToken(access_token)
   vk.request('users.get', {'user_id' : 1}, function(_o) {
      res.send(_o);
   });
});
 
/**
 * Request client methods
 */
// First you have to pass access_token from client side JS code 

// views is directory for all template files


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


