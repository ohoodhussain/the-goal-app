const express = require('express');
const app = express();
//conver json into js
const bodyParser=require('body-parser');
const { MongoClient } = require('mongodb');
const dbName = 'userTask';
const collName = 'savedTask';

//gloabal scope
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//create misselware
app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))

app.post('/save-task', async function(req, res){
    const taskObj = req.body
    console.log("save task:", taskObj.task)

    // connect to mongodb database
    // Use connect method to connect to the server
    await client.connect()
    console.log('Connected successfully to server');

    res.send({savedTask:taskObj.task})
})

app.get('/get-tasks',async function(req,res){
    const tasks=[
        "write js",
        "ohood",
        "renad"

    ]

    // connect to mongodb database
    // Use connect method to connect to the server
    await client.connect()
    console.log('Connected successfully to server');

    //initiates the db
    const db = client.db(dbName);

    const collection =db.collection(collName);

  await collection.insertOne({ _id: 1 });
  await collection.insertOne({ _id: 2 });
    res.send({tasks:tasks})
})
function startbackend(){
    console.log("app on port 3005")
}
app.listen(3005, startbackend)