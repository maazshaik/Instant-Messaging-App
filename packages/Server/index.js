const express = require("express");
const cors = require('cors')
const axios = require("axios");

const  PORT= process.env.PORT || 3001;

const app = express();
const db = require('./postgres')
app.use(cors())

app.get('/send', (req,res) => {
  const sendText = req.query.text

  const options = {
    method: 'POST',
    url: 'http://0.0.0.0:6000/send',
    data: {text: sendText, sender: '1', receiver: '2'},
    headers: {
      // Add correct auth bearer
      Authorization: 'Bearer abcdxyz',
      'Content-Type': 'application/json',
    }
}

  axios.request(options).then((response) => {
      res.json("heyyy!!")
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
  console.log(req.query)
  db.createUser(req.query)
  .then(response => {
    console.log(response)
      res.status(200).send(response);
  }).catch(error => {
      console.error(error);
  })
})

app.get("/userlogin", (req, res) => {
  console.log(req)
  db.getUserById(req)
  .then(response => {
    console.log(response)
      res.status(200).send(response);
  }).catch(error => {
      console.error(error);
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});