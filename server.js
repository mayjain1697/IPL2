const express = require('express');
const app = express();
const eco_data = require('./economicalBowler.json');

app.use(express.static("public"));

app.get('/economy', (req, res) => {
    var season = req.query.year;
    const data = eco_data.topEconomicalBowlerOfEachYear[season];

    res.send(data);
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));