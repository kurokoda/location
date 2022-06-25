const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { pick } = require("lodash");
const app = express();

app.use(cors());

app.get("/locationDetail", (req, res) => {
  const { placeId } = req.query;

  const config = {
    headers: {},
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name%2Crating%2Cformatted_phone_number%2Cprice_level%2Crating%2Cphoto%2Creview&key=AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k`,
  };

  axios(config)
    .then((response) => {
      const locationDetail = response.data.result;
      res.status(200).json(JSON.stringify(locationDetail));
    })
    .catch((error) => {
      res.status(500);
      console.log(error);
    });
});

app.get("/locationList", (req, res) => {
  const { location, keyword } = req.query;

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
  let query = `?location=${encodeURIComponent(
    location
  )}&radius=1500&key=AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k`;
  if (keyword?.length) {
    query = query.concat(`&keyword=${encodeURIComponent(keyword)}`);
  }

  const config = {
    headers: {},
    method: "get",
    url: `${url}${query}`,
  };

  axios(config)
    .then((response) => {
      const locationList = response.data.results;
      const normalizedLocationList = locationList.map((location) => {
        return pick(location, ["name", "place_id", "rating"]);
      });
      res.status(200).json(JSON.stringify(normalizedLocationList));
    })
    .catch((error) => {
      res.status(500);
      console.log(error);
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
