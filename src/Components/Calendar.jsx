import React, {Component} from 'react';
import './calendar.scss';
import YearSelect from "./YearSelect";
import Table from "./Table";
import moment from 'moment';
import {getFirstDayOfMounth, getDaysInMounth} from "../utils/getDate";

import data from '../sampleData';

class Calendar extends Component {
  constructor(props) {
    super(props);
    const currentYear = Number(new Date().getFullYear());
    this.state = {
      dateContext: moment(),
      year: currentYear,
      minYear: currentYear - 2,
      maxYear: currentYear + 2,
      calendar: [],
    };
  }

  setCalendar() {
    const {year} = this.state;
    const calendar = Array.apply(null, {length: 12}).map(() => []);
    const weeks = calendar.map((el, index) => {
      const month = [];
      const currMonth = moment({year: year, month: index});
      const startDay = getFirstDayOfMounth(currMonth);
      for (let i = 0; i < startDay; i += 1) {
        month.push({
          el: 'emptyCell',
          className: 'cell cell_empty',
          date: null
        });
      }
      const daysCount = getDaysInMounth(currMonth);
      const momentNow = moment();
      const inPast = currMonth.isBefore(momentNow, 'month');
      for (let j = 1; j <= daysCount; j += 1) {
        let inPastInner;
        if (!inPast && currMonth.isSame(momentNow, 'month')) {
          inPastInner = moment({
            year: {year},
            month: index,
            day: j,
          }).isBefore(momentNow, 'day');
        }
        let className = 'cell cell_day';
        if (inPast || inPastInner) {
          className = 'cell cell_day cell_last';
        }
        month.push({
          el: 'day',
          className: className,
          date: `${year}-${Number(index) + 1}-${j}`
        });
      }
      if (month.length % 7) {
        for (let m = 0; m < month.length % 7; m += 1) {
          month.push({
            el: 'emptyCell',
            className: 'cell cell_empty',
            date: null
          });
        }
      }

      const weeksInner = [];

      for (let w = 0; w < month.length; w += 7) {
        weeksInner.push(month.slice(w, w + 7));
      }

      return weeksInner;
    });
    this.setState({calendar: weeks})
  }

  componentDidMount() {
    this.setCalendar();
  }

  changeYear = (diff) => {
    const {year, minYear, maxYear} = this.state;

    if (diff === '-') {
      if (year === minYear) {
        return false;
      }
      this.setState({
        year: year - 1,
      }, this.setCalendar)
    }
    else if (diff === '+') {
      if (year === maxYear) {
        return false;
      }
      this.setState({
        year: year + 1,
      }, this.setCalendar)
    }

  };

  render() {
    const entries = data.years[this.state.year].users;
    const {calendar} = this.state;
    return (
      <>
        <header className="calendar__header">
          <h2 className="calendar__title">График отпусков</h2>
          <YearSelect {...this.state} changeYear={this.changeYear}/>
        </header>
        <Table entries={entries} calendar={calendar}/>
      </>
    )
  }
}

export default Calendar;