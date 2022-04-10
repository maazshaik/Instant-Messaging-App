const express = require("express");
const cors = require('cors')
const axios = require("axios");

const  PORT= process.env.PORT || 3001;

const app = express();
app.use(cors())

app.get('/send', (req,res) => {
  const sendText = req.query.text

  const options = {
    method: 'GET',
    url: 'http://0.0.0.0:6000/send',
    params: {text: sendText, sender: '1', receiver: '2'}
    /*headers: {
        'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
    }*/
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