import { read as readClasses } from '../services/classService';
import { read as readSystem } from '../services/systemService';

export default class Character {
	constructor(args) {
		this.id = `New character ${Math.random()*10000000}`;
		this.name = this.id;
		this.attributes = [];
		this.race = 'unknown';
		this.levels = [];
		this.equipment = [];
		this.skills = [];
	}

	get str() {
		return this.attributes.find(attr => attr.name === 'Strength').finalValue;
	}
	get dex() {
		return this.attributes.find(attr => attr.name === 'Dexterity').finalValue;
	}
	get con() {
		return this.attributes.find(attr => attr.name === 'Constitution').finalValue;
	}
	get int() {
		return this.attributes.find(attr => attr.name === 'Intelligence').finalValue;
	}
	get wis() {
		return this.attributes.find(attr => attr.name === 'Wisdom').finalValue;
	}
	get cha() {
		return this.attributes.find(attr => attr.name === 'Charisma').finalValue;
	}

	static async parse(data) {
		const character = new Character();

		// inherit from model
		Object.assign(character, data);

		// we're gonna need these later
		const classes = await readClasses();
		const system = await readSystem();	

		// calculate total level
		character.level = data.levels.length;

		// calculate class level totals
		const myClasses =  [...new Set(data.levels.map(l => l.class))];
		character.levelMakeup = myClasses
			.map(className => `${data.levels.filter(l => l.class === className).length} ${className}`)
			.join(' ');

		// calculate final attributes
		character.attributes
			.forEach(attr => {
				attr.statAdds = data.levels.filter(l => l.statAdd === attr.name).length;
				attr.equipment = 0;
				attr.buffs = 0;
				attr.finalValue = attr.baseValue + attr.statAdds + attr.equipment + attr.buffs;
			});

		// calculate hit point total
		character.maxHP = data.levels
			.reduce((prev,cur) => prev + classes.find(c => c.name === cur.class).hpPerLevel, 0)
			+ character.level * character.attributes.find(a => a.name === 'Constitution').finalValue;

		// calculate skills
		system.skills
			.forEach(skill => {
				const proficient = data.skillProficiencies.includes(skill.name);
				const finalValue = (character.attributes.find(attr => attr.name === skill.stat) || {}).finalValue + Number(proficient)*5;
				character.skills.push(Object.assign({}, skill, { proficient, finalValue } ));
			});

		// calculate powers
		const allPowers = [...data.levels.map(lev => lev.powers)].flat();
		character.powers = [];
		allPowers.forEach(powerName => {
			const power = system.powers.find(p => p.name === powerName);
			if (!power) character.powers.push({
				name: `unknown power ${powerName}`,
				level: -1,
			});
			else character.powers.push(power);
		})

		return character;
	}
}