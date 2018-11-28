module.exports = function(sequelize, Sequelize) {
    var lostPet = sequelize.define("lostPet", {
      animal_ID: {
        type: Sequelize.INTEGER,
        auto_increment:true,
      },
      name: {
        type: Sequelize.STRING,
      },
      Address: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      lost_location: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1]
      },
      lost_date: {
        type:Sequelize.DATEONLY,
        allowNull: false,
        len: [1]
      },
      looks_like: {
          type:Sequelize.STRING,
          allowNull: false,
          len:[1]
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1]
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
return lostPet}