import PropTypes from 'prop-types';
import React from 'react';

import { Button, Modal, Table, Tooltip } from 'antd';
import { error } from '../helpers/notificationHelper';
import { read as readSystem } from '../services/systemService';

export default class CharacterPowers extends React.Component {
	static propTypes = {
		character: PropTypes.shape({
			powers: PropTypes.arrayOf(PropTypes.object),
		}),
	}

	static columns = [
		{ dataIndex:'level', title:'Level' },
		{ dataIndex:'school', title:'School' },
		{ dataIndex:'discipline', title:'Discipline' },
		{ dataIndex:'type', title:'Type' },
		{ dataIndex:'spell', title:'Name' },
		{ dataIndex:'description', title:'Description' },
		{ render:() => <Button type="primary">Add this power</Button> },
	];

	constructor(props) {
		super(props);

		this.state = {
			addingPower: false,
			powers: [],
		};

		this.handleAddPower = this.handleAddPower.bind(this);
		this.handleOk = this.handleOk.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleAddPower() {
		this.setState({ addingPower:true });

		readSystem()
			.then(({ powers }) => this.setState({ powers }))
			.catch(error);
	}
	handleCancel() {
		this.setState({ addingPower:false });
	}
	handleOk() {
		this.setState({ addingPower:false });
	}

	render() {
		const { character, editMode } = this.props;
		const { addingPower, powers } = this.state;

		return <section>
			<h2>Powers</h2>
				<table className="standard-table">
					<thead>
						<tr>
							<th>School</th>
							<th>Discipline</th>
							<th>Level</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						{ character.powers.map(PowerDisplay) }
					</tbody>
				</table>
				{ editMode ? <Button type="primary" onClick={this.handleAddPower}>Add Power</Button> : null }
				<Modal 
					style={{ minWidth:'calc(100vw - 100px)' }}
					onOk={this.handleOk} 
					onCancel={this.handleCancel}
					visible={addingPower} 
				>
					<Table // todo: replace this with a virtualized list
						columns={CharacterPowers.columns} 
						dataSource={powers}
						pagination={false}
						scroll={{ y:400 }} // todo: use CSS to match this to viewport size
					/>
				</Modal>
		</section>
	}
}


function PowerDisplay(power) {
	return <tr key={power.name}>
		<td>{ power.school }</td>
		<td>{ power.discipline }</td>
		<td>{ power.level }</td>
		<td>
			<Tooltip title={ power.description }>
				{ power.name }
			</Tooltip>
		</td>
	</tr>
}