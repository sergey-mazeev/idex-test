import React, {Component} from 'react';
import UserEntry from "./UserEntry";

class Table extends Component {
  columns = ['Фамилия, Имя', 'дней', 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

  render() {
    const {entries, calendar} = this.props;
    return (
      <table className="calendar__table">
        <thead>
        <tr>
          {this.columns.map((col, index) => (
            <td key={`td-head-${index}`}>{col}</td>))}
        </tr>
        </thead>
        <tbody>
        {entries.map((entry, index) =>
          <UserEntry {...entry} key={`user-entry-${index}-${entry.id}`} calendar={calendar}/>)}
        </tbody>
      </table>
    )
  }
}

export default Table;