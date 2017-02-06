'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

// Creating an API which accepts the parameter "echo" and makes a post
restService.post('/echo', function(req, res) {
  // Next to the structure of the answer there is also:
  // req.body.result.parameters.echoText
  // "echoText" is the actual content which this API is expecting - if it is another content there will be message "Seems like there is a problem.."
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
   
    // this is the response, which is exactly the same as the incoming message
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
