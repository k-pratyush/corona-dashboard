const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.set("view engine", "ejs");
dotenv.config({path: './config/config.env'});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/api', require("./routes/map"));

fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        console.log(data["India"][data["India"].length - 1].confirmed)
});

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server active on port 3000');
});
