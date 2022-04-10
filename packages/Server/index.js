const express = require("express");
const cors = require('cors')
const axios = require("axios");

const  PORT= process.env.PORT || 3001;

const app = express();
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

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});