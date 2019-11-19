const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");
const fs = require('fs');

// set html view engine using ejs. NEED ALL 5 LINES
const path = require("path");
const ejs = require("ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.urlencoded());

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.render("index.html"));
app.get("/searchResults.txt", (req, res) => {
  fs.readFile('./searchResults.txt', 'utf8', (err, data) => {
    if (err) console.log('error', err);
    console.log(data);
  })
});
app.get("/results", (req, res) => res.render("results.html"));

app.post("/search", (req, res) => {
  const url =
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyBfERkazXQItqZYA8iR2DgfE39QXItsPjU&cx=000973296940924731098:cjzveyjuqon&q=cat";

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(response => {
      const searchResults = response.items;
      fs.writeFile('searchResults.txt', JSON.stringify(searchResults), (err) => {
        if (err) console.log('error', err);
        console.log('file saved!')
    });

  res.render("results.html");
});
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
