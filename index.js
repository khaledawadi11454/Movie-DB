const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('OK');
  });

  app.get('/test', (req, res) => {
    res.json({status: 200, message: "ok"});
  });

  app.get('/time', (req, res) => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    res.json({status: 200, message: `${hours}:${minutes}`});
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
