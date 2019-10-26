import React, {Component} from 'react';
import Schedule from "./Schedule";

class UserEntry extends Component {

  render() {
    const {id, name, avatar, days, entries, calendar} = this.props;
    return (
      <tr key={`user-entry-${id}`} className="calendar__user-entry">
        <td>
          <img className="calendar__user-avatar" src={avatar} alt={name}/>
          <span className="calendar__user-name">{name}</span>
        </td>
        <td>{days}</td>
        <Schedule entries={entries} calendar={calendar}/>
      </tr>
    )
  }
}

export default UserEntry;