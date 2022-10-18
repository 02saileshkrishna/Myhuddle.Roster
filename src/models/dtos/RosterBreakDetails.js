// private String breakType;
// private Date breakStart;
// private Date breakEnd;
class RosterBreakDetails {
  breakType;
  breakStart;
  breakEnd;

  constructor(data) {
    this.breakType = data.breakType;
    this.breakStart = data.breakStart;
    this.breakEnd = data.breakEnd;
  }
}

module.exports = RosterBreakDetails;
