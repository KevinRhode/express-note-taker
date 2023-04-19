const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
// const { cLog } = require('./middleware/clog');
//disabled for heroku
const exp = require('constants');
const PORT = 5000;

const app = express();

// Import custom middleware, "cLog"
// app.use(cLog);
//disabled for heroku

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//you router for modular routes
app.use('/',api);

// GET Route for index
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(process.env.PORT || PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

