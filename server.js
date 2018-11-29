// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var morgan = require("morgan");
var fileUpload = require('express-fileupload');
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
app.use(fileUpload());

app.post('/upload', function(req, res) {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  console.log(req.body);
  console.log(req.files);
  var sampleFile = req.files.image_link;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + '/public/assets/upload/' + req.files.image_link.name , function(err) {
    if (err)
      return res.status(500).send(err);

    res.send(200);
  });
});

// Routes
// =============================================================
require("./routes/html-routes.js")(app)
require("./routes/foundPet-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });