import React from 'react';

import { Divider, Table } from 'antd';
import { create, read, update, remove } from '../services/characterService';

export default class CharacterList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			characters: [],
		};
	}

	componentDidMount() {
		read()
			.then(characters => this.setState({ characters }));
	}

	delete(character) {
		console.log('deleteing', character);
		alert('not implemented');
	}

	load(character) {
		console.log('loading', character);
		window.location = `/characters/${character.id}`;
	}

	render() {
		const { characters } = this.state;

		const columns = [
			{ title:'id', key:'id', dataIndex:'id' },
			{ title:'name', key:'name', dataIndex:'name' },
			{ title:'action', key:'action', render:(text, record) => <span>
	          <a onClick={event => this.load(record)}>Load</a>
	          <Divider type="vertical" />
	          <a onClick={event => this.delete(record)}>Delete</a>
	        </span> },
		];

		return <article id="characters">asd
			<Table dataSource={characters} columns={columns} />
		</article>
	}
}
