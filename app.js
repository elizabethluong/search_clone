const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("views"));

app.get("/", (req, res) => res.send("index.html"));

app.listen(port, () => console.log(`Listening on port ${port}!`));
