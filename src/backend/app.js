const express = require('express');
const app = express();
const getShows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(3000, () => console.log(`Example app listening on port 3000!`))