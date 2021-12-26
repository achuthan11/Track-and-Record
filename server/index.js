const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json()); // to parse the incoming data from json
app.use(cors());  // to use cross platform data, i.e from front end to backend

const db= mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Kratoswithsword2",
    database: "track_and_record"
});

app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password
    db.query(
        "select email, password from employee where email=? and password =?",
        [email,password],
        (err,result)=>{
            if(err){
                console.log({err :err});
            }
            if(result) {
                res.send(result);
                console.log(result[1]);
            }
            else{
                res.send({message: "Invalid credentials"});
                console.log("Error message", result);
            }
        }
    )
});

app.get('/',(req,res)=>{
    const query="select * from employee";
    db.query(query,(err,result) => {
        if(err)  return res.status(404).send(err);
        else res.send(result);
    });
});

app.listen(3001, ()=>{
    console.log("Running on 3001");
});