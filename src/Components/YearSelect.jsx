import React, {Component} from 'react';
import classnames from 'classnames';

class YearSelect extends Component {

  render() {
    const {year, changeYear, minYear, maxYear} = this.props;
    return (
      <div className="calendar__year-select year-select">
        <button className={classnames('year-select__button',
          'year-select__button_prev',
          year === minYear ? 'year-select__button_disabled' : ''
        )} aria-label="Предыдущий год" onClick={() => changeYear('-')}/>
        <div className="year-select__current">{year}</div>
        <button className={classnames('year-select__button',
          'year-select__button_next',
          year === maxYear ? 'year-select__button_disabled' : ''
        )} aria-label="Следующий год" onClick={() => changeYear('+')}/>
      </div>
    )
  }
}

export default YearSelect;