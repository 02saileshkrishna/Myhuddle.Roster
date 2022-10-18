module.exports = (sequelize, Sequelize) => {
  const km_store_list = sequelize.define(
    "km_store_list",
    {
      store_id: {
        type: Sequelize.STRING(5),
        allowNull: false,
        field: "store_id",
        primaryKey: true,
      },
      store_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "store_name",
      },

      storeType: {
        type: Sequelize.STRING(15),
        allowNull: false,
        field: "store_type",
      },
      storeState: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null,
        field: "store_state",
      },
      storeCountry: {
        type: Sequelize.STRING(10),
        allowNull: true,
        defaultValue: null,
        field: "store_country",
      },
      storeZone: {
        type: Sequelize.STRING(50),
        allowNull: true,
        defaultValue: null,
        field: "store_zone",
      },
      storeZoneDesc: {
        type: Sequelize.STRING(20),
        allowNull: true,
        defaultValue: null,
        field: "store_zone_desc",
      },
      lastModify: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        field: "last_modify",
      },
    },
    {
      timestamps: false,
      tableName: "km_store_list",
    }
  );

  return km_store_list;
};
