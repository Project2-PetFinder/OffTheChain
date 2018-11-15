var db = require("../models");

module.exports = function(app) {
  app.get("/api/pets", function(req, res) {
    console.log(db.foundPet)
      console.log(db.found_petss)
    // 1. Add a join to include all of each Author's Posts
    db.foundPet.findAll({}).then(function(dbfound_pets) {
      res.json(dbfound_pets);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Author.findOne({
      where: {
        id: req.params.id
      },
      include:[db.Post]
    }).then(function(dbfound_pets) {
      res.json(dbfound_pets);
    });
  });

  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbfound_pets) {
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
