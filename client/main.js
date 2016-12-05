import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';
import Select from 'react-select';
import './style.scss';

const memberName = (member) => {
  return member.FirstName + ' ' + member.Surname;
};

const memberOption = (member) => {
  const name = memberName(member);
  return { value: name, label: name };
};

class App extends Component {
  fetchMembers() {
    return fetch('/members')
      .then((response) => response.json())
      .then((responseJson) => responseJson.members);
  }

  setMemberList() {
    this.fetchMembers()
      .then((members) => {
        const memberOptionList = members.map(memberOption);
        this.setState({memberOptionList});
      });
  }

  updateSelectedMember(selectedMember) {
    this.setState({selectedMember});
  }

  constructor() {
    super();
    this.state = {
      selectedMember: '',
      memberOptionList: [],
    };
    this.setMemberList();
  }

  render() {
    return (
      <div className="container">
        <h3>Members</h3>
        <Select
          value={this.state.selectedMember}
          onChange={this.updateSelectedMember.bind(this)}
          options={this.state.memberOptionList}
        />
      </div>
    );
  }
};

render(<App/>, document.getElementById('app'));
