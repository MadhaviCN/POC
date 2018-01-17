
//import apps from '../server/routes/app';
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const http = require('http');
// const mongoose = require('http');
// const Promise = require('bluebird');
// const app = express();
//var apps = require('../server/routes/app');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const http = require('http');
const mongoose = require('http');
const Promise = require('bluebird');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(__dirname, + '/dist'));
//appli.use('/user', apps)

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
    const obj = {
        "accNumber":1234,
        "ifsc": 5678,
        "name": "Madhavi",
        "email": "madhavi@example.com"
    }
    if(err){
        return console.log('bad connection');
    }
     const db = client.db('Users');
    console.log("db connected");   
    db.collection('newCustomer').insertOne(obj, (err, res) => {
        if(err){
            return console.log("no proper connection");
        }
        console.log(JSON.stringify(res));
    });    
    db.collection('newCustomer').find().toArray().then((docs) => {
        console.log("success");
        console.log(JSON.stringify(docs));
    }, (err) => {
        console.log('unable to connect');
    });
    client.close();
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
  });
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);
const listener = app.listen(port, () => console.log(`Running on localhost:${port}`));

// //var User = require('./models/User');
// // API file for interacting with MongoDB
// var apps = require('./routes/app');
// // Parsers is used to json into a normal object
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));
// //This post is used to post the data in mongodb and it takes 2 arguments, 
// //first is url(newCustomer) resource will be created
// app.post('/api/apps', (req, res) => {
//    console.log(req);
//    console.log(res);
//     user.save().then((doc) => {
//         res.send(doc);
//         }, (err) => {
//             res.send(e);
//         }
//     )
// })


// Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));

// // API location
// app.use('/api', api);

// // Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

