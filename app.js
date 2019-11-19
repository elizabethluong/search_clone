const express = require("express");
const app = express();
const port = 3000;

// set html view engine using ejs. NEED ALL 5 LINES
const path = require('path');
const ejs = require('ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.urlencoded());

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.render("index.html"));
app.get("/results", (req, res) => res.render("results.html"));

app.post("/search", (req, res) => {
    console.log(req);
    res.render("results.html");
}) 

app.listen(port, () => console.log(`Listening on port ${port}!`));
