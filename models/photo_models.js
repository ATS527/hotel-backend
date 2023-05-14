const Sequelize = require("sequelize");
const db = require("../config/db");

const Photos = db.define("Photos", {
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
  type: {
    type: Sequelize.STRING,
  },
});

// const SlidePhoto = db.define("SlidePhotos", {
//   id: {
//     type: Sequelize.STRING,
//     primaryKey: true,
//   },
//   room_id: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   image1: {
//     type: Sequelize.STRING,
//   },
//   image2: {
//     type: Sequelize.STRING,
//   },
//   image3: {
//     type: Sequelize.STRING,
//   },
//   image4: {
//     type: Sequelize.STRING,
//   },
// });

// const RoomPhoto = db.define("RoomPhotos", {
//   id: {
//     type: Sequelize.STRING,
//     primaryKey: true,
//   },
//   room_id: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   image1: {
//     type: Sequelize.STRING,
//   },
//   image2: {
//     type: Sequelize.STRING,
//   },
//   image3: {
//     type: Sequelize.STRING,
//   },
//   image4: {
//     type: Sequelize.STRING,
//   },
// });

// const OtherPhoto = db.define("OtherPhotos", {
//   id: {
//     type: Sequelize.STRING,
//     primaryKey: true,
//   },
//   room_id: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   image1: {
//     type: Sequelize.STRING,
//   },
//   image2: {
//     type: Sequelize.STRING,
//   },
//   image3: {
//     type: Sequelize.STRING,
//   },
//   image4: {
//     type: Sequelize.STRING,
//   },
// });

module.exports = Photos;
