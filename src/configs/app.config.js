module.exports = {
  Db: {
    HOST: "tdgao6k1cff1ns.csyqewpk0aoo.ap-southeast-2.rds.amazonaws.com", //"tdlllwxhzfdez1.cfwafydn4lat.ap-southeast-2.rds.amazonaws.com",
    USER: "dbclient",
    PASSWORD: "Kmart1234",
    DataBase: "kmart_mobileap",
    port: "3306",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  jwtPrivateKey: "not_too_short_secret_for_KASS_it_might_error_MyHuddele",
};
