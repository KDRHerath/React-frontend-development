const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database:"kasun"
    }
)
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

app.post('/login' , (req , res)=>{
    const sql = "SELECT user_name , password from student where user_name =? and password = ? ";
    const value = [
        req.body.userName,
        req.body.password,
    ]
  

    db.query( sql , value , (err , data)=>{
        if(err) res.json("sql conecting error");
        if(data.length > 0){
            return res.json(1);
        }else {
            return res.json(0);
        }
        
    })
})

app.listen(8080,()=>{
    console.log("Listning to port 8080");
})