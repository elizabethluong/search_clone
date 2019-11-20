const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.render("index.ejs"));

app.get("/results", (req, res) => res.render("results.ejs"));

app.post("/search", (req, res) => {
  const userInput = req.body.keyword;
  const url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAFGfVnB-wP0YNoRlbwIYJry1YVo5A30dY&cx=000973296940924731098:cjzveyjuqon&q=";
  fetch(url + userInput)
    .then(response => {
      return response.json();
    })
    .then(response => {
      const searchResults = JSON.stringify(response.items);
      res.render("results.ejs", { data: searchResults, keyword: userInput });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
