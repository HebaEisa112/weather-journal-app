// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');

// Start up an instance of app
const app =express();

const axios = require('axios');


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port=5000;

const server=app.listen(port,listener);



function listener(){
console.log('server is running.........');
}

app.get('/all',(req,res)=>{

res.send(projectData)

} );

app.post('/adding',(req,res)=>{

const obj={
date:req.body.date,
temp: req.body.temp,
feel:req.body.feel

}

projectData=obj;

})