// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var morgan = require("morgan");
var router = require("./routes/dropzone.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

// Static directory
app.use(express.static("public"));

// ~/public './route/to/find.json'

// Routes
// =============================================================
require("./routes/html-routes.js")(app)
require("./routes/foundPet-api-routes.js")(app);
app.use(router)

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });