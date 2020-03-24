from flask import Flask, jsonify
import pandas as pd
from pmdarima import auto_arima

app = Flask(__name__)

data = pd.read_csv("dataset/final.csv", index_col="Unnamed: 0")

models = {}

@app.route("/")
def home():
    return jsonify({
        "status": "OK"
    })

@app.route("/<country>")
def country_prediction(country):
    if not country in models.keys():
        models[country] = auto_arima(data.loc[country], trace=True, error_action='ignore',
                                    m=12, seasonal=True, stepwise=True, suppress_warnings=True)
    return jsonify({
            "status": 'OK',
            "country": country,
            "prediction": models[country].predict().tolist()
        })

if __name__ == "__main__":
    app.run(debug=True)
