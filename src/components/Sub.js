import React from 'react';
import '../css/List.css';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      reports: [],
    };
  }

  addEmployee = name => {
    let reports = this.state.reports;
    reports.push(name);
    this.setState({ reports });
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={this.state.addEmployee}>Add Report</button>
        <button onClick={() => this.props.removeEmployee(this.state.name)}>
          Delete Employee
        </button>
        <ol>
          {this.state.reports.map((report, index) => (
            <li key={index}>
              <Sub name={report} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default Sub;
