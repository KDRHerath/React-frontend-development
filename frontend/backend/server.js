const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const browseroute = require('./src/route');

const app = express();
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/api' , browseroute);

app.listen(8080,()=>{
    console.log("Listning to port 8080");
})