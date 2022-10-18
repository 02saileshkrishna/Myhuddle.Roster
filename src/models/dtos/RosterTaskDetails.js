// private String taskCode;
// private String taskName;
// private String taskDepartment;
// private Date taskStart;
// private Date taskEnd;
// private int shiftChange;

class RosterTaskDetails {
  taskCode;
  taskName;
  department;
  taskStart;
  taskEnd;
  shiftChange;

  constructor(data) {
    this.taskCode = data.taskCode;
    this.taskName = data.taskName;
    this.department = data.department;

    this.taskStart = data.taskStart;
    this.taskEnd = data.taskEnd;
    this.shiftChange = data.shiftChange;
  }
}

module.exports = RosterTaskDetails;
