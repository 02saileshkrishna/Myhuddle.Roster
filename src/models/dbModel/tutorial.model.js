module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define(
    "tutorial",
    {
      shiftId: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
        field: "shift_id",
        unique: "shift_id_N_shift_detail_id",
      },
      shiftDetailId: {
        type: Sequelize.BIGINT(10),
        allowNull: false,
        field: "shift_detail_id",
        unique: "shift_id_N_shift_detail_id",
      },
      empId: {
        type: Sequelize.BIGINT(8),
        allowNull: false,
        field: "emp_id",
      },
      storeId: {
        type: Sequelize.STRING(5),
        allowNull: false,
        field: "store_id",
      },
      dept_name: {
        type: Sequelize.STRING(25),
        allowNull: true,
        field: "dept_name",
      },
      task_code: {
        type: Sequelize.STRING(5),
        allowNull: true,
        field: "task_code",
      },
      task_name: {
        type: Sequelize.STRING(25),
        allowNull: true,
        field: "task_name",
      },

      shift_start: {
        type: Sequelize.DATE,
        allowNull: true,
        field: "shift_start",
      },
      shift_end: {
        type: Sequelize.DATE,
        allowNull: true,
        field: "shift_end",
      },
      last_modified: {
        type: Sequelize.DATE,
        allowNull: true,
        field: "last_modified",
      },

      shift_deleted: {
        type: Sequelize.STRING(2), //'F - False, T - True',
        defaultValue: "F",
        allowNull: true,
        field: "shift_deleted",
      },
      shift_change: {
        type: Sequelize.INTEGER(2), //'0 - No Change, 1 - Changed',
        defaultValue: 0,
        field: "shift_change",
      },
      device_ack: {
        type: Sequelize.INTEGER(2), //'0 - Not Ack, 1 - Ack',
        defaultValue: 0,
        field: "device_ack",
      },
    },
    {
      timestamps: false,
    }
  );

  return Tutorial;
};
