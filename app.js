const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch"); // probably not needed if we use EJS
const fs = require('fs'); // not needed if we use EJS

// set html view engine using ejs. NEED ALL 5 LINES
// const path = require("path"); // this line seems to not be needed
const ejs = require("ejs");
// app.set("views", path.join(__dirname, "views")); // this line seems to not be needed
// app.engine("html", require("ejs").renderFile); // this line seems to not be needed
app.set("view engine", "ejs");

const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// app.use(express.urlencoded()); // not needed

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.render("index.ejs", {data1: '[ejs test data123]'}));
app.get("/searchResults.txt", (req, res) => {
  fs.readFile('./searchResults.txt', 'utf8', (err, data) => {
    if (err) console.log('error', err);
    console.log(data);
  })
});
app.get("/results", (req, res) => res.render("results.ejs"));

app.post("/search", (req, res) => {
  // const url =
  //   "https://www.googleapis.com/customsearch/v1?key=AIzaSyBfERkazXQItqZYA8iR2DgfE39QXItsPjU&cx=000973296940924731098:cjzveyjuqon&q=cat";

  // fetch(url)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(response => {
  //     const searchResults = response.items;
  //     fs.writeFile('searchResults.txt', JSON.stringify(searchResults), (err) => {
  //       if (err) console.log('error', err);
  //       console.log('file saved!')
  //   });

  res.render("results.ejs");
});
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));
