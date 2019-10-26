import React, {Component} from "react";

class Schedule extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      calendar: [],
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.calendar !== prevState.calendar) {
      return {calendar: nextProps.calendar};
    }
    else {
      return null;
    }
  }

  renderWeek(week, index) {
    const result = week.map((day, index) => (
      <div key={index} className={day.className} data-date={day.date}>{""}</div>
    ));

    return (
      <div key={index} className="week">
        {result}
      </div>
    )
  }

  renderMounth(month) {
    return (
      <div className="month">
        {month.map(this.renderWeek)}
      </div>
    )
  }

  render() {
    const {calendar} = this.state;
    const {year} = this.props;
    return (
      <>
        {calendar.map((month, index) => (
          <td key={`${year}-${index}`}>{this.renderMounth(month)}</td>
        ))
        }
      </>
    )
  }
}

export default Schedule;