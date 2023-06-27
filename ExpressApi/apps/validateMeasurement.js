const express = require('express');
const { MongoClient } = require('mongodb');
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser  
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors())

// Connection URL for MongoDB
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'ShivajiCreationDb';

// Define an async function to connect to MongoDB
async function connectToMongo() {
    try {
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const db = client.db(dbName);

        // Define your routes and interact with MongoDB here

        // Example route: Get all documents from a collection

        app.get("/display/:id", async (req, res) => {


            var num = parseInt(req.params.id);
            console.log(num)
            let collection = await db.collection("mshirt");
            let query = {order_number:num};
            let result = await collection.findOne(query);
          console.log(result)
            if (!result) res.send("Not found").status(404);
            else res.send(result).status(200);
          });


          app.get("/getcustbyid/:id", async (req, res) => {


            var num = parseInt(req.params.id);
            console.log(num)
            let collection = await db.collection("customers");
            let query = {order_number:num};
            let result = await collection.findOne(query);
          console.log(result)
            if (!result) res.send("Not found").status(404);
            else res.send(result).status(200);
          });



          app.get("/editmeasure/:id", async (req, res) => {


            var num = parseInt(req.params.id);
            console.log(num)
            let collection = await db.collection("mshirt");
            let query = {order_number:num};
            let result = await collection.findOne(query);
          console.log(result)
            if (!result) res.send("Not found").status(404);
            else res.send(result).status(200);
          });





//         app.get('/display/:id', (req, res) => {

//             var id = req.params.id
// console.log(id)
//             db.collection('m_shirt').findOne({
//                 "order_number": id
//             }, function (err, article) {
//                 res.send(article);
//                 console.log(article)
//             });

//         });
        // Start the Express.js server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }
}


// Call the connectToMongo function to establish the MongoDB connection
connectToMongo();

class mydata {
    cust_name;
    order_number;
    date;
    particulars
}
