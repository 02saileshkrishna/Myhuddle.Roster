module.exports = (sequelize, Sequelize) => {
  const km_holiday_list = sequelize.define(
    "km_holiday_list",
    {
      store_id: {
        type: Sequelize.STRING(5),
        allowNull: false,
        field: "store_id",
        unique: "store_id_n_Holidya",
      },
      holidayDescription: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: "holiday_description",
        unique: "store_id_n_Holidya",
      },
      holidayStart: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "holiday_start",
      },
      holidayEnd: {
        type: Sequelize.DATE,
        allowNull: false,
        field: "holiday_end",
      },
      lastUpdate: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
        field: "last_update",
      },
    },
    {
      timestamps: false,
      tableName: "km_holiday_list",
    }
  );

  return km_holiday_list;
};
