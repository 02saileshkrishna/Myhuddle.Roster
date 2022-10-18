const { Sequelize, Datatype, Op } = require("sequelize");
const dbConfig = require("../configs/app.config");

const sequelize = new Sequelize(
  dbConfig.Db.DataBase,
  dbConfig.Db.USER,
  dbConfig.Db.PASSWORD,
  {
    host: dbConfig.Db.HOST,
    dialect: dbConfig.Db.dialect,
    operatorsAliases: false,
    logging: true,

    pool: {
      max: dbConfig.Db.pool.max,
      min: dbConfig.Db.pool.min,
      acquire: dbConfig.Db.pool.acquire,
      idle: dbConfig.Db.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("connected with Sequelize");
  })
  .catch((err) => {
    console.log("error in sequalize  :" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rosterDetail = require("../models/dbModel/km_roster_detail.js")(
  sequelize,
  Sequelize
);
db.storeList = require("../models/dbModel/km_store_list")(sequelize, Sequelize);
db.holidayList = require("../models/dbModel/km_holiday_list")(
  sequelize,
  Sequelize
);
db.storeList.hasMany(db.rosterDetail, { foreignKey: "store_id" });
//db.rosterDetail.hasOne(db.storeList, { foreignKey: "store_id" });
db.rosterDetail.belongsTo(db.storeList, { foreignKey: "store_id" });

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes its synced");
});
module.exports = db;
