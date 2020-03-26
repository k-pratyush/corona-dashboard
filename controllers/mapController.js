const NodeGeocoder = require('node-geocoder');
const axios = require('axios');

let country = "";

exports.landingPage = async (req, res) => {
  res.render("index", {data: ""});
};

exports.generatePlot = (req, res) => {
  axios.get('http://localhost:5000/predict/' + country).then(resp => {
    res.status(200).json({
      key: resp.data["country"],
      value: resp.data['prediction']
    });
  });
}

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

  country = result[0].countryCode;

  res.render("index", {data: result[0].countryCode});
}
