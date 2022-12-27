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


  
  app.get('/hello/:id', (req, res) => {
    const id = req.params.id;
    res.json({status: 200, message: `Hello, ${id}`});
  });
  app.get('/search', (req, res) => {
    const search = req.query.s;
    if (search) {
      res.json({status: 200, message: "ok", data: search});
    } else {
      res.status(500).json({status: 500, error: true, message: "you have to provide a search"});
    }
  });


const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
];

app.get('/movies/create', (req, res) => {
  // create a movie
});

app.get('/movies/read', (req, res) => {
  res.json({status: 200, data: movies});
});

app.get('/movies/update', (req, res) => {
  // update a movie
});

app.get('/movies/delete', (req, res) => {
  // delete a movie
});
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
