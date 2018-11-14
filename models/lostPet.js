module.exports = function(sequelize, Sequelize) {
    var lost_pets = sequelize.define("lost_pet", {
      animal_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        auto_increment:true,
      },
      name: {
        type: Sequelize.STRING,
      },
      found_location: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      found_location: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      at_AAC: {
        type:Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      intake_date: {
        type:Sequelize.DATEONLY,
        allowNull: false,
        len: [1]
      },
      type: {
        type:Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      looks_like: {
          type:Sequelize.STRING,
          allowNull: false,
          len:[1]
      },
      color: {
        type:Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      sex: {
        type:Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      age: {
        type:Sequelize.STRING,
        len: [1]
      },
      image_link: {
        type:Sequelize.STRING,
        allowNull: false,
        len: [1]
      }
    });
return lost_pets}