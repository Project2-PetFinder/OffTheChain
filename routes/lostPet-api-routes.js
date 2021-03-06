var db = require("../models");

module.exports = function(app) {
  app.get("/api/lostpets", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.lostPet.findAll({}).then(function(dblost_pets) {
      res.json(dblost_pets);
    });
  });

  app.get("/api/lostpet/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.lostPet.findOne({
      where: {
        id: req.params.id
      },
      
    }).then(function(dblost_pets) {
      res.json(dblost_pets);
    });
  });

  app.post("/api/lostpets", function(req, res) {
    db.lostPet.create(req.body
      ).then(function(dblost_pets) {
      res.json(dblost_pets);
    });
  });

  app.delete("/api/lostpets/:id", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dblost_pets) {
      res.json(dblost_pets);
    });
  });

};
