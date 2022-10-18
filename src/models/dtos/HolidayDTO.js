// private Date startDate;

// 	private Date endDate;

// 	private String holidayDesc;

class HolidayDTO {
  startDate;
  endDate;
  holidayDesc;

  constructor(data) {
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.holidayDesc = data.holidayDesc;
  }
}

module.exports = HolidayDTO;
