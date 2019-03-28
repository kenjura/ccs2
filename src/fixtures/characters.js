export const characters = [
	{
		id:'1',
		name:'Some Guy',
		attributes: [
			{ name:'Strength', baseValue:3 },
			{ name:'Dexterity', baseValue:3 },
			{ name:'Constitution', baseValue:1 },
			{ name:'Intelligence', baseValue:0 },
			{ name:'Wisdom', baseValue:-1 },
			{ name:'Charisma', baseValue:2 },
		],
		race: 'Human',
		skillProficiencies: [
			'Animal Handling',
			'Athletics',
			'Stealth',
		],
		levels: [
			{
				level: 1,
				class: 'Fighter',
				powers: [
					'Charge',
					'Cleave',
				],
				talents: null
			},
			{
				level: 2,
				class: 'Rogue',
				powers: [
					'Sneak Attack',
					'Uncanny Dodge',
				],
				talents: 'Shadow Dancer',
			},
			{
				level: 3,
				class: 'Fighter',
				powers: [
					'Whirlwind Attack',
					'Mounted Combat',
				],
				talents: null
			},
			{
				level: 4,
				class: 'Sorcerer',
				powers: [
					'Magic Missile',
					'Shield',
				],
				talents: null,
				statAdd: 'Charisma',
			},
		],
		equipment: [
			{
				name: 'Spellblade',
				type: 'Weapon',
				quality: 'Uncommon',
				description: 'This weapon is a cool spellblade',
				weapon: {
					size: 'Medium',
					dice: 'd6',
					damageType: 'slashing',
					hands: 1,
					improvements: [
						{ name: 'Fine', effect: '+1' }
					]
				}
			}
		]
	}
]