const Sequelize = require("sequelize");
const db = require("../config/db");

const CoverPhoto = db.define("CoverPhotos", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  room_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image1: {
    type: Sequelize.STRING,
  },
  image2: {
    type: Sequelize.STRING,
  },
  image3: {
    type: Sequelize.STRING,
  },
  image4: {
    type: Sequelize.STRING,
  },
});

module.exports = CoverPhoto;
