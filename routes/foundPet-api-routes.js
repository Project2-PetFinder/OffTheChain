var db = require("../models");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.foundPet.findAll({}).then(function(dbfound_pets) {
      res.json(dbfound_pets);
    });
  });

  app.get("/api/pet/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.foundPet.findOne({
      where: {
        id: req.params.id
      },
      
    }).then(function(dbfound_pets) {
      res.json(dbfound_pets);
    });
  });

  app.post("/api/pets", function(req, res) {
    db.foundPet.create(req.body
      ).then(function(dbfound_pets) {
      res.json(dbfound_pets);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbfound_pets) {
      res.json(dbfound_pets);
    });
  });

};
