const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const fs = require("fs");

// set html view engine using ejs. NEED ALL 5 LINES
const path = require("path");
const ejs = require("ejs");
// app.set("views", path.join(__dirname, "views"));
// app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.urlencoded());

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.render("index.ejs"));
// app.get("/searchResults.txt", (req, res) => {
//   fs.readFile('./searchResults.txt', 'utf8', (err, data) => {
//     if (err) console.log('error', err);
//     console.log(data);
//   })
// });
app.get("/results", (req, res) => res.render("results.ejs"));

app.post("/search", (req, res) => {
  const userInput = req.body.keyword;

  const url =
    // "https://www.googleapis.com/customsearch/v1?key=AIzaSyBfERkazXQItqZYA8iR2DgfE39QXItsPjU&cx=000973296940924731098:cjzveyjuqon&q=";
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyAFGfVnB-wP0YNoRlbwIYJry1YVo5A30dY&cx=000973296940924731098:cjzveyjuqon&q="; // new api key
console.log(url + userInput);

  fetch(url + userInput)
    .then(response => {
      return response.json();
    })
    .then(response => {

      const searchResults = JSON.stringify(response.items);
        res.render("results.ejs", {data: searchResults});
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
