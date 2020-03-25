const NodeGeocoder = require('node-geocoder');

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

        const resp = await geocoder.reverse({
          lat: latitude,
          lon: longitude
        });
        res.render("index", {data: resp[0].countryCode});
}
