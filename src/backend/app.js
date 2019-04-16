const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3001;


db.connect().then(dbo => {

app.get('/rest/shows', (req, res) => {
    dbo.collection('shows').find({}).toArray((err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

    // Serve any static files
    app.use(express.static(path.join(__dirname, '../../build')));
    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });

    app.listen(port, () => console.log(`Listening on port ${port}`));
}); 