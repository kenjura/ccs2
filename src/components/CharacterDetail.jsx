import CharacterPowers from './CharacterPowers';
import React from 'react';
import RollableStat from './RollableStat';

import { Switch, Tooltip } from 'antd';
import { read } from '../services/characterService';

import '../componentStyles/CharacterDetail.scss';

export default class CharacterDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			addingPower: false,
			character: null,
			editMode: true,
		};

		this.handleAddPower = this.handleAddPower.bind(this);
		this.handleSwitchChange = this.handleSwitchChange.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		Promise.all([ read({ id }, { parse:true }) ])
			.then(([ character ]) => this.setState({ character }));
	}

	handleAddPower() {
		this.setState({ addingPower:true });
	}

	handleSwitchChange(value) {
		this.setState({ editMode:value });
	}

	render() {
		let { addingPower, character, editMode } = this.state;
		if (!character) return '';

		window.character = character;

		return <article id="character">
			<header>
				<h1>{ character.name }</h1>
			</header>

			<div id="edit-mode-switch">
				Edit Mode: <Switch onChange={this.handleSwitchChange} value={editMode}></Switch>
			</div>

			<section>
				<h2>Attributes</h2>
				<table className="standard-table">
					<tbody>
						<tr>
							<th>Level</th>
							<td>
								<Tooltip title={ character.levelMakeup }>
									{ character.level }
								</Tooltip>
							</td>
						</tr>
						{ character.attributes.map(AttributeDisplay) }
						<tr>
							<th>Max HP</th>
							<td>{ character.maxHP }</td>
						</tr>
					</tbody>
				</table>
			</section>

			<section>
				<h2>Skills</h2>
				<table className="standard-table">
					<thead>
						<tr>
							<th>Skill</th>
							<th>Ability Score</th>
							<th>Proficient?</th>
							<th>Modifier</th>
						</tr>
					</thead>
					<tbody>
						{ character.skills.map(SkillDisplay) }
					</tbody>
				</table>
			</section>

			<CharacterPowers character={character} editMode={editMode} />

			
		</article>
	}
}


function AttributeDisplay(props) {
	return <tr key={ props.name }>
		<th>{ props.name }</th>
		<td>
			<Tooltip title={ renderTooltip(props) }>
				{ props.finalValue }
			</Tooltip>
		</td>
	</tr>

	function renderTooltip(attr) {
		return `Base ${attr.baseValue}, statAdds ${attr.statAdds}, equipment ${attr.equipment}, buffs ${attr.buffs}, total ${attr.finalValue}`;
	}
}

function SkillDisplay(skill) {
	return <tr key={skill.name}>
		<td>{ skill.name }</td>
		<td>{ skill.stat }</td>
		<td>{ skill.proficient ? 'Yes' : 'No' }</td>
		<td><RollableStat value={skill.finalValue} /></td>
	</tr>
}
