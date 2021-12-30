const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json()); // to parse the incoming data from json
app.use(cors()); // to use cross platform data, i.e from front end to backend
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Kratoswithsword2",
  database: "track_and_record",
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query =
    "select emp_name from employee where email = ? and password = ?";

  db.query(query, [email, password], (err, result) => {
    // console.log(err, result[0].emp_name);
    if (err) res.send(err);
    else if (result.length == 0) {
      res.send("No matching credentials");
      console.log(result, "invalid");
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/initiatives", (req, res) => {
  const query =
    "select init_name,description,init_status,created_by from initiatives;";
  db.query(query, (err, result) => {
    if (err) return res.status(404).send(err);
    else {
      console.log("Initiatives fetched!");
      res.send(result);
    }
  });
});

app.get("/employees", (req, res) => {
  const query = "select * from employee";
  db.query(query, (err, result) => {
    if (err) return res.status(404).send(err);
    else {
      console.log("Success!!");
      res.send(result);
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(3001, () => {
  console.log(`Running on ${port}`);
});
