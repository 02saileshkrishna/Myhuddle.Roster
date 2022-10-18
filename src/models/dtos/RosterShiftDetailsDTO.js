// private long shiftId;

// private String storeName;

// private Date shiftStart;

// private Date shiftEnd;

// private int shiftChange;

// private String departmentName;

// private List<RosterTaskDetails> taskDetails = new ArrayList<RosterTaskDetails>();

// private List<RosterBreakDetails> breaks = new ArrayList<RosterBreakDetails>();

class RosterShiftDetailsDTO {
  shiftId;
  storeName;
  shiftStart;
  shiftEnd;
  shiftChange;
  departmentName;
  taskDetails; //new ArrayList<RosterTaskDetails>();
  breaks; //new ArrayList<RosterBreakDetails>();

  constructor(data) {
    this.empId = data.empId;
    this.reminderTime = data.reminderTime;
    this.taskDepartment = data.taskDepartment;

    this.rosterShifts = data.rosterShifts;
    this.taskEnd = data.taskEnd;
    this.shiftChange = data.shiftChange;
    this.shiftId = data.shiftId;
    this.storeName = data.storeName;
    this.shiftStart = data.shiftStart;
    this.shiftEnd = data.shiftEnd;
    this.shiftChange = data.shiftChange;
    this.departmentName = data.departmentName;
    this.taskDetails = data.taskDetails; //new ArrayList<RosterTaskDetails>();
    this.breaks = data.breaks; //new ArrayList<RosterBreakDetails>();
  }
}

module.exports = RosterShiftDetailsDTO;
