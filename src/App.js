import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-bootstrap-date-picker';
import { Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      value: new Date().toISOString()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.datePicker.refs.input).addEventListener("change", (event) => {
      this.handleChange(null, event.target.value);
    });
  }

  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016" 
    });
  }

  componentDidUpdate() {
    console.log(this.state.value);
    console.log(this.state.formattedValue);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={3} sm={3} md={3}>
            <DatePicker 
              id="example-datepicker" 
              value={this.state.value} 
              onChange={this.handleChange}
              ref={(c) => this.datePicker = c} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
