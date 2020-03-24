const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
app.set("view engine", "ejs");

dotenv.config({path: './config/config.env'});
app.use(express.json());
app.use(cors());

app.use('/api', require("./routes/map"));

PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server active on port 3000');
});
