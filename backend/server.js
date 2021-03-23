const express = require("express");
const path = require("path");
const pageRoutes = require("./routes/pageRoutes/pageRoutes");
const apiRoutes = require('./routes/apiRoutes/apiRoutes')
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/')))

app.set("views", path.join(__dirname, "../frontend/views"));
app.set("view engine", "ejs");

// API ROUTES

app.use(apiRoutes.router)

// SERVE PAGES
app.use(pageRoutes.router)
// Homepage


app.listen(3000, () => console.log("connected 3000"));
