import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-bootstrap-date-picker';
import { Row, Col } from 'react-bootstrap';
import Moment from 'moment';

class Datepicker extends Component {

  constructor() {
    super();
    this.state = {
      value: Moment().toISOString()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.datePicker.refs.input).addEventListener("change", (event) => {
      const value = event.target.value;
      this.handleChange(Moment(value).toISOString(), value);
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
              id="datepicker"
              value={this.state.value}
              onChange={this.handleChange}
              ref={(c) => this.datePicker = c} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Datepicker;
