const NodeGeocoder = require('node-geocoder');
const axios = require('axios');

exports.landingPage = (req, res) => {
  res.render("index", {data: ""});
};

exports.getStats = async(req, res) => {
  const latitude = req.body.lat;
  const longitude = req.body.long;
  const options = {
    provider: process.env.GEOCODER_PROVIDER,
    apiKey: process.env.GEOCODER_KEY,
    formatter: null
  };
  const geocoder = NodeGeocoder(options);

  const result = await geocoder.reverse({
    lat: latitude,
    lon: longitude
  });

  axios.get('http://localhost:5000/predict/' + result[0].countryCode).then(resp => {
  console.log(resp.data);
  });

  res.render("index", {data: result[0].countryCode});
}
