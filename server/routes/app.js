const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');


//var BankUsersClass = require('./models/User');
// const Schema = mongoose.Schema;
// const BookSchema = new Schema({ varone: Number, vartwo: Number, varthree: String, varfour: String });
// module.exports = mongoose.model('User', BookSchema);

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

//const url = "mongodb://Madhavi:maddy@123@ds247587.mlab.com:47587/mydatabase";


// // Connect
// const connection = (closure) => {
//     return MongoClient.connect(url, (err, db) => {
//         if (err) return console.log(err);
//         db.createCollection("BankUsers1", function(err, res){
//             if(err) throw err;
//             console.log("collected Created")
//         })
//         closure(db);
//     });
// };

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
//   console.log("success")
// });

/* SAVE USER */
// router.post('/', function(req, res, next) {
//     user.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });

// Error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err == 'object' ? err.message : err;
//     res.status(501).json(response);
// };

// // Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// };

module.exports = {
    router
}