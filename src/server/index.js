const express = require("express");
const axios = require("axios");

const bodyParser = require("Body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("dist"));

app.get("/api/mounts", (req, res) => {
  const makeApiCall = async () => {
    const response = await axios
      .get("https://api.xivdb.com/mount?columns=id,name,icon")
      .then(result => res.send(result.data))
      .catch(err => res.send(err));
  };
  makeApiCall();
});

app.post("/api/mount-info", (req, res) => {
  const makeApiCall = async () => {
    const response = await axios
      .get(`https://api.xivdb.com/mount/${req.body.mountId}`)
      .then(result => res.send(result.data))
      .catch(err => res.send(err));
  };
  makeApiCall();
});

app.listen(8080, () => console.log("Listening on port 8080!"));
