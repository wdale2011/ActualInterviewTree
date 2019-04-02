import React from 'react';

class AddReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  inputHandler = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputHandler} />
        <button onClick={() => this.props.addEmployee(this.state.name)}>
          Add employee
        </button>
      </div>
    );
  }
}
export default AddReport;
