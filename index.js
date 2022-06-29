const express = require('express');

const app = express();

// simple route 
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

// protected route -> logged in :

app.get('/protected', (req, res) => {
  res.send('Hello!');
});

app.listen(5000, () => console.log('listening on: 5000'));