// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
  


    // route for home page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/landing-page.html"));
    });

    // route for lost form
    app.get("/lost", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/lost-form.html"));
    });

    // route for found form
    app.get("/found", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/found-form.html"));
    });

    // route for map-search
    app.get("/database", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/map-results.html"));
    });

    // map for team page
    app.get("/team", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/team.html"));
    });

    // If no matching route is found default to landing page
    
}
