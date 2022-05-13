// Adding a global and try catch

try {
	// Adding all the dependencies
    require('dotenv').config();
    var express = require('express');
    var app = express();
    var http = require('http');
	var https = require('https');
	var request = require('request');
    var router = express.Router();
    var port = process.argv.splice(2)[0] || process.env.PORT;
	var server = http.createServer(app);
	
    ///// Changed the code to fix the vulnerability ID 272868020-9 Medium - Exposed Session variables/////
    const io = require('socket.io')(server, {
        cookie: false,
        transports:['websocket','polling']
    });
    
	// fixing the default headers for the server
    router.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // fixing the default static file path -- in our case angular path from .env file
    app.use(express.static(process.env.DEFAULT_DIST_PATH));


	// setting up the port for the server
    server.listen(port, () => {
        console.log('Socket server start running on:' + port);
    });


	app.get('*', function (req, res) {
		res.sendFile(__dirname + process.env.DEFAULT_INDEX_FILE);
	});

// global catch
} catch (err) {
	console.log("Unexpected ", err.toString());
    console.log("A detailed description of the error is given below:");
    console.log(err.stack);
}
