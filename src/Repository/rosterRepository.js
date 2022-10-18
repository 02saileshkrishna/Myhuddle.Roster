const querry = require("./queries");
const connection = require("./Connetion");
const { Op } = require("sequelize");
const HolidayDTO = require("./../models/dtos/HolidayDTO");
const storeList = require("./../models/dbModel/km_store_list");
const RosterBreakDetails = require("../models/dtos/RosterBreakDetails");
const RosterTaskDetails = require("../models/dtos/RosterTaskDetails");

const date = require("date-and-time");

async function getRosterDetailsFromDbAsync(name) {
  const emp_id = "942171";
  const rosterDetail = await connection.rosterDetail.findAll({
    //include: connection.storeList,
    include: [
      {
        model: connection.storeList,
        required: true,
      },
    ],
    where: {
      emp_id: {
        [Op.eq]: emp_id,
      },
      shift_start: {
        [Op.gt]: getLastMonday(),
      },
    },
    order: [["shift_start", "ASC"]],
  });
  if (rosterDetail != null) {
    const resterDetails = Array.from(rosterDetail);
    let rosterList = resterDetails.map((a) => a.dataValues);
    let shiftIds = resterDetails.map((a) => a.dataValues.shiftId);
    shiftIds.forEach((id) => {
      var rosterListItem = rosterList.filter((r) => r.shiftId == id);
      BusinessLogic(rosterListItem);
      console.log("hello   : " + rosterListItem.shift_start);
    });
  }
  var a = new HolidayDTO({
    startDate: "2022-14-10",
    endDate: "2022-14-10",
    holidayDesc: "Diwali",
  });
  console.log(rosterDetail);
  console.log(getLastMonday());
  return rosterDetail;
  //   return new Promise(async (resolve, reject) => {
  //     dbConnection.query(
  //       querry.get_User_Detail_From_km_emp_data_By_EmpId,
  //       function (err, result, fields) {
  //         if (err) {
  //           reject(err);
  //         }
  //         resolve(result);
  //       }
  //     );

  //   });
}

function getLastMonday() {
  let target = 1; // Monday
  let date = new Date();
  date.setDate(
    date.getDate() -
      (date.getDay() == target ? 7 : (date.getDay() + (7 - target)) % 7)
  );
  var diffDays = parseInt((date - new Date()) / (1000 * 60 * 60 * 24), 10);

  if (diffDays >= -5) {
    date = date.addDays(-7);
  }
  return date;
}
function GetDateDifference(last_modified) {
  let diffDays = parseInt(
    (new Date() - last_modified) / (1000 * 60 * 60 * 24),
    10
  );
  return diffDays;
}

function BusinessLogic(rosterListItem) {
  rosterListItem.forEach((element) => {
    if (
      element != null &&
      element.task_code != null &&
      (element.task_code.toLowerCase() == "1" ||
        element.task_code.toLowerCase() == "pb1")
    ) {
      let breaks = new RosterBreakDetails({
        breakStart: element.shift_Start,
        breakEnd: element.shift_end,
        breakType: breakType.task_name,
      });
    } else if (element != null) {
      let tasks = new RosterTaskDetails({
        taskCode: element.task_code,
        taskName: element.task_name,
        department: element.dept_name,
        taskStart: element.shift_start,
        taskEnd: element.shift_end,
        shiftChange: date.isSameDay(new Date(), element.last_modified) ? 0 : 1,
      });

      //shiftDetailsDTO.getTaskDetails().add(tasks);
    }
    if (element != null) storeId = element.km_store_list.store_id;
  });
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

module.exports = {
  getRosterDetailsFromDbAsync,
};
