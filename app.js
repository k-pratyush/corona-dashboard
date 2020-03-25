const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

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

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server active on port 3000');
});
