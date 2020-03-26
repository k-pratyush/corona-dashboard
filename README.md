# corona-dashboard

![Screenshot 2020-03-27 at 12 21 42 AM](https://user-images.githubusercontent.com/32244337/77686919-a83b8400-6fc3-11ea-88fb-cc0cef6d4747.png)

#### Time series prediction for covid 19 confirmed cases using ARIMA modelling.
dataset: CSSEGISandData/COVID-19

optimal p (autoregressive order), d (difference term for making the series stationary) and q (order of moving averages) parameters have been selected based using `auto_arima` function in pmdarima library.
view `dataset-exploration.ipynb` for details

### Steps for installation :
1. install dependencies:
```
npm i
```
2. create config directory with config.env file and add the following environment variables with API keys
```
PORT=3000
GEOCODER_PROVIDER=mapquest
GEOCODER_KEY=<YOUR API KEY>
```
3. generate mapbox access token from www.mapbox.com and replace '<MAPBOX_ACCESS_TOKEN>' with the generated token in public/mapboxGL.js file

4. create a conda environment
```
conda create -n <your environment name> python=3.6
conda activate <your environment name>
```
5. install python dependencies
```
pip install -r requirements.txt
```
6. run the prediction server
```
python server.py
```
7. run application
```
node app.js
```
8. visit `localhost:3000/api` to use the app
