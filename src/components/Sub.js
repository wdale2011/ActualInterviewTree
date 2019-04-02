import React from 'react';
import AddReport from './AddReport';
import '../css/List.css';

class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      reports: [],
      addNewReport: false,
    };
  }

  addReport = () => {
    this.setState({ addNewReport: !this.state.addNewReport });
  };

  addEmployee = name => {
    let reports = this.state.reports;
    reports.push(name);
    this.setState({ reports });
  };

  removeEmployee = name => {
    let reports = this.state.reports;
    let index = reports.indexOf(name);
    reports.splice(index, 1);
    this.setState({ reports });
  };

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        {this.state.addNewReport ? (
          <div>
            <AddReport addEmployee={this.addEmployee} />
            <button onClick={this.addReport}>Back</button>
          </div>
        ) : (
          <div>
            <button onClick={this.addReport}>Add Report</button>
            <button onClick={() => this.props.removeEmployee(this.state.name)}>
              Delete Employee
            </button>
          </div>
        )}
        <ol>
          {this.state.reports.map((report, index) => (
            <li key={index}>
              <Sub name={report} removeEmployee={this.removeEmployee} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default Sub;
