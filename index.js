const express = require('express');
const app = express();
const path = require("path");

require("dotenv").config();
app.set("view engine", "ejs");
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use(express.urlencoded({ extended: false }));

const homeRoute = require("./routes/home");
const pokeRoute = require("./routes/pokemon");

app.use(homeRoute);
app.use(pokeRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
