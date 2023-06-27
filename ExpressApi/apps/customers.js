const express = require('express');
const { MongoClient } = require('mongodb');
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser  
const app = express();
const port = 3000;
var cors = require('cors')

app.use(cors())
app.use(bodyParser());
// Connection URL for MongoDB
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'ShivajiCreationDb';

// Define an async function to connect to MongoDB
async function connectToMongo() {
    try {

        
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });

        const db = client.db(dbName);
        const myColl = db.collection('customers');


        app.post('/insertcust', async (req, res) => {

            let data = req.body;
            //const doc = { "order_number": data.order_number, "cust_name": data.cust_name, "mobile": data.mobile };
            console.log(data);
            const result = await myColl.insertOne(data);
            console.log(`A document was inserted with the _id: ${result}`);
            res.send(`A document was inserted with the _id: ${result}`);
            // Start the Express.js server
     
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
    }

}
// Call the connectToMongo function to establish the MongoDB connection
connectToMongo();

