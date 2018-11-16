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
    db.foundPet.create({
      "animal_ID": 581340,
      "name": "Fluffy",
      "found_location": "30.404569, -97.727315",
      "at_AAC": "No (contact for more info)",
      "intake_date": "0000-00-00",
      "type": "Dog",
      "looks_like": "Catahoula/Labrador Retriever",
      "color": "Blue Merle/White",
      "sex": "Spayed Female",
      "age": "9 years",
      "image_link": "http://www.petharbor.com/pet.asp?uaid=ASTN.A581340",
      }).then(function(dbfound_pets) {
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
