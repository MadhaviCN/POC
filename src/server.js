// // var express = require('express');
// // var app = express();
// // app.get('/', function(req, res){
// //     res.send("hello world");
// // })
// // app.listen(3000, function(){
// //     console.log("listening on port : 3000");
// // })
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const http = require('http');
// const mongoose = require('http');
// const Promise = require('bluebird');
// const app = express();

// var BankUsersClass = require('../../models/User');
// // API file for interacting with MongoDB
// var apps = require('./server/routes/app');
// // Parsers is used to json into a normal object
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
// //This post is used to post the data in mongodb and it takes 2 arguments, 
// //first is url(newCustomer) resource will be created
// app.post('/newCustomer', (req, res) => {
//     console.log(re.body);
// })


// // Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// // API location
// app.use('/api', api);

// // Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });


// //Set Port
// const port = process.env.PORT || '3000';
// app.set('port', port);

// const server = http.createServer(app);

// server.listen(port, () => console.log(`Running on localhost:${port}`));