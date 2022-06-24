const express = require('express')
const app = express()
const port = 3000
let {laodData} = require("./app")
const path = require('path');
const axios = require('axios').default;

app.post('/start', async (req, res) => {
    laodData()
    //await fetch('http://localhost:3000/start', {method: 'POST'});


    axios.post('http://localhost:4000/start',{})
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    res.send('Done')
  })

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    //res.sendFile("C:\Users\A. Reyes\Documents\workspace\programa a\index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})