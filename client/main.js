import React, { Component, PropTypes} from 'react';
import { render } from 'react-dom';

const Member = (props) => {
  const member = props.member;
  const fullName = member.FirstName + ' ' + member.Surname;
  return <li>{fullName}</li>;
};

const MembersList = (props) => {
  const members = props.members;
  return (
    <ul>{
      members.map((member, i) =>
        <Member key={i} member={member} />
      )
    }</ul>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
    };
    this.getMembers();
  }

  render() {
    return <MembersList members={this.state.members} />;
  }

  getMembers() {
    fetch('/members')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({members: responseJson.members});
      });
  }
}

render(<App/>, document.getElementById('app'));
