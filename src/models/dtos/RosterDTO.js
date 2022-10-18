// private long empId;

// 	private int reminderTime;

// 	private List<HolidayDTO> holidays = new ArrayList<HolidayDTO>();

// 	private List<RosterShiftDetailsDTO> rosterShifts = new ArrayList<RosterShiftDetailsDTO>();

class RosterDTO {
  empId;
  reminderTime;
  holidays; //List<HolidayDTO> holidays

  rosterShifts; // new ArrayList<RosterShiftDetailsDTO>();
  taskEnd;
  shiftChange;

  constructor(data) {
    this.empId = data.empId;
    this.reminderTime = data.reminderTime;
    this.taskDepartment = data.taskDepartment;

    this.rosterShifts = data.rosterShifts;
    this.taskEnd = data.taskEnd;
    this.shiftChange = data.shiftChange;
  }
}

module.exports = RosterDTO;
