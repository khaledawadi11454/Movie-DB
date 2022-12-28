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
  
app.get('/movies/read/by-date', (req, res) => {
    const moviesSortedByDate = movies.sort((a, b) => a.date - b.date);
    res.json({ status: 200, data: moviesSortedByDate });
  });
  
  app.get('/movies/read/by-rating', (req, res) => {
    const moviesSortedByRating = movies.sort((a, b) => b.rating - a.rating);
    res.json({ status: 200, data: moviesSortedByRating });
  });
  
  app.get('/movies/read/by-title', (req, res) => {
    const moviesSortedByTitle = movies.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    res.json({ status: 200, data: moviesSortedByTitle });
  });


  app.get('/movies/get/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies[id - 1];
    if (movie) {
        res.status(200).json({ status: 200, data: movie })
    } else {
        res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` })
    }
});

app.get('/movies/add', (req, res) => {
  const title = req.query.title;
  const year = req.query.year;
  let rating = req.query.rating;

  if (!title || !year || year.length !== 4 || isNaN(year)) {
    res.status(403).json({status: 403, error: true, message: 'you cannot create a movie without providing a title and a year'});
  } else {
    if (!rating) {
      rating = 4;
    }
    const newMovie = {title, year, rating};
    movies.push(newMovie);
    res.json({status: 200, data: movies});
  }
});

app.get("/movies/delete/:id", (req, res) => {
  const id = parseInt(req.params.id)
  if (id > movies.length) {
      res.status(404).json({ status: 404, error: true, message: `the movie ${id} does not exist` })
  } else {
      movies.splice(id, 1)
      res.status(200).json({ status: 200, data: movies })
  }
})
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
