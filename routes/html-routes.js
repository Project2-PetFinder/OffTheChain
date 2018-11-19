// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/petsearch", function(req, res) {
      res.sendFile(path.join(__dirname, "./getStarterFile.html"));
    });

    // route for home page
    app.get("/home", function(req, res) {
      res.sendFile(path.join(__dirname, "./landing-page.html"));
    });

    // route for lost form
    app.get("/lost", function(req, res) {
      res.sendFile(path.join(__dirname, "./lost-form.html"));
    });

    // route for found form
    app.get("/found", function(req, res) {
      res.sendFile(path.join(__dirname, "./found-form.html"));
    });

    // route for map-search
    app.get("/database", function(req, res) {
      res.sendFile(path.join(__dirname, "./map-results.html"));
    });

    // map for team page
    app.get("/team", function(req, res) {
      res.sendFile(path.join(__dirname, "./team.html"));
    });

    // If no matching route is found default to landing page
    
}
