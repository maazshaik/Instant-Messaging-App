const express = require("express");
const cors = require('cors')
const axios = require("axios");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const  PORT= process.env.BACKEND_PORT || 3001;

const app = express();
const db = require('./postgres')

require('dotenv').config();
let server_address = ""
let server_port = "6000"

if (process.env.PROD == "TRUE") {
  server_address = process.env.MSERVER_HOST
}else{
  server_address = process.env.LOCAL_IP
}

console.log(server_address)

app.use(cors({
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  origin: ['http://35.224.20.5:3000', 'http://35.224.20.5:3001',
  process.env.LOCAL_IP + ':' + process.env.SERVER_PORT, process.env.LOCAL_IP + ':' + process.env.CLIENT_PORT]
}));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ key: "userId", secret: "secret", saveUninitialized: false, resave: false ,cookie:{maxAge:60 * 60 *24 }}));


app.get('/send', (req,res) => {
  const sendText = req.query.text
  const sender_name = req.session.user

  console.log('http://'+ server_address + ':' + server_port + '/send')
  
  const options = {
    method: 'POST',
    url: 'http://'+ server_address + ':' + server_port + '/send',
    data: {text: sendText, sender: sender_name, receiver: '2'},
    headers: {
      // Add correct auth bearer
      Authorization: 'Bearer abcdxyz',
      'Content-Type': 'application/json',
    }
}

  axios.request(options).then((response) => {
      res.json("Success!!")
  }).catch((error) => {
      console.error(error)
  })
})

app.get("/userregister", (req, res) => {
  db.getUserByIdName(req)
  .then(response => {
      res.status(200).send(response);
  }).catch(error => {
      console.error(error);
  })
})

app.get("/userregister2", (req, res) => {
  db.createUser(req.query)
  .then(response => {
      res.status(200).send(response);
  }).catch(error => {
      console.error(error);
  })
})

app.get("/userlogin", (req, res) => {
  db.getUserById(req)
  .then(response => {
      if(req.query.password == response.rows[0].password){
        req.session.user = response.rows[0].username;
        res.status(200).send(response);
      }
      else{
        res.status(201).send(response);
      }

  }).catch(error => {
      console.error(error);
  })
})

app.get("/logout", (req, res) => {
  req.session.destroy();
  return res.send("User logged out!");
});

app.listen(PORT, () => {
});