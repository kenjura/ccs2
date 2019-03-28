import React from 'react';

import { notification } from 'antd';

export default class RollableStart extends React.Component {
	constructor(props) {
		super(props);

		this.formatValue = this.formatValue.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	formatValue(value) {
		if (value >= 0) return `+${value}`;
		else return value;
	}

	handleClick() {
		const { value } = this.props;
		const dieRoll = Math.ceil(Math.random()*20);
		const message = `Rolled a ${dieRoll}, added ${value}, result = ${dieRoll + value}.`;
		notification.open({ message });
	}

	render() {
		return <a onClick={this.handleClick}>
			{ this.formatValue(this.props.value) }
		</a>
	}
}