const NodeGeocoder = require('node-geocoder');

exports.index = async (req, res) => {
    const options = {
        provider: process.env.GEOCODER_PROVIDER,
        apiKey: process.env.GEOCODER_KEY,
        formatter: null
    };
    const geocoder = NodeGeocoder(options);

    const resp = await geocoder.reverse({
        lat: 45.767,
        lon: 4.833
    });
    // res.status(200).json({resp});
    res.render("index", {data: resp[0]});
    console.log(resp[0].countryCode);
    // res.send(resp);
};
