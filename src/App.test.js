import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

describe('App', function() {
	it('render without crash', () => {
		const app = ReactTestUtils.renderIntoDocument(<App />);

		expect(app).toBeDefined();
	});

	it('change empty value date picker', () => {
		const app = ReactTestUtils.renderIntoDocument(<App />);
		const datePicker = ReactDOM.findDOMNode(app.datePicker.refs.input);
		const value = "";

		const event = new Event("change");
		datePicker.value = value;
		datePicker.dispatchEvent(event);

		expect(app.state.formattedValue).toEqual(value);
	});

	it('check event event listener', () => {
		const app = ReactTestUtils.renderIntoDocument(<App />);
		const datePicker = ReactDOM.findDOMNode(app.datePicker.refs.input);
		const eventsDatePicker = {};
		const value = "";

		datePicker.addEventListener = jest.fn((event, cb) => {
	    	eventsDatePicker[event] = cb;
	    });

	    app.componentDidMount();

	    console.log(eventsDatePicker);
	});

	it('change value date picker', () => {
		const app = ReactTestUtils.renderIntoDocument(<App />);
		const datePicker = ReactDOM.findDOMNode(app.datePicker.refs.input);
		const value = "07/12/2016";

		datePicker.value = value;
		ReactTestUtils.Simulate.change(datePicker);

		expect(app.state.formattedValue).toBe(value);
	});
});