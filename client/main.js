import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Select from 'react-select';

const memberName = (member) => {
  return member.FirstName + ' ' + member.Surname;
};

const getMemberOptions = (input) => {
  return fetch('/members')
    .then((response) => response.json())
    .then((responseJson) => {
      return {
        options: responseJson.members.map((member) => {
          const name = memberName(member);
          return { value: name, label: name };
        }),
      };
    });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectValue: '',
    };
  }

  render() {
    return (
      <div>
        <h3>Members</h3>
        <Select.Async
          value={this.state.selectValue}
          onChange={this.updateValue.bind(this)}
          loadOptions={getMemberOptions}
        />
      </div>
    );
  }

  updateValue(selectValue) {
    this.setState({selectValue});
  }
};

render(<App/>, document.getElementById('app'));
