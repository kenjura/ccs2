export { powers, skills };

const skills = [
	{ "name":"Acrobatics", "stat":"Dexterity" },
	{ "name":"Animal Handling", "stat":"Wisdom" },
	{ "name":"Arcana", "stat":"Intelligence" },
	{ "name":"Athletics", "stat":"Strength" },
	{ "name":"Deception", "stat":"Charisma" },
	{ "name":"History", "stat":"Intelligence" },
	{ "name":"Insight", "stat":"Wisdom" },
	{ "name":"Intimidation", "stat":"Charisma" },
	{ "name":"Investigation", "stat":"Intelligence" },
	{ "name":"Medicine", "stat":"Wisdom" },
	{ "name":"Nature", "stat":"Intelligence" },
	{ "name":"Perception", "stat":"Wisdom" },
	{ "name":"Performance", "stat":"Charisma" },
	{ "name":"Persuasion", "stat":"Charisma" },
	{ "name":"Religion", "stat":"Intelligence" },
	{ "name":"Slight of Hand", "stat":"Dexterity" },
	{ "name":"Stealth", "stat":"Dexterity" },
	{ "name":"Survival", "stat":"Wisdom" },
]

const powers = [
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Gust of Wind",
      "Description": "Std, range 10; subject is pushed 5 squares. If they strike a hard surface, they suffer light bludgeoning damage. If they strike another creature, both split the damage equally. Can be empowered: for each Mana spent, double the push range. If empowered, the spell inflicts medium damage (regardless of how many Mana points were spent). Can be used to attempt to dispel any gas-based effect (opposed caster checks if magical in nature). Can clear smoke or fog from a 20' cubic area."
    },
    {
      "Level": 1,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Obscuring Mist",
      "Description": "Swift, range 10; You create a mist that obscures all sight beyond 10-ft, and grants concealment beyond 5-ft. You may move the mist up to 5 squares per round while you concentrate. If you stop concentrating, but resume concentration before the 5 round grace period ends, you may resume movement as well. 5 rounds is the total amount of time the effect will last without concentration, irrespective of how many times you drop concentration."
    },
    {
      "Level": 2,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Cyclone",
      "Description": "Swift, range 10; subject (up to Medium size) is trapped in a whirlwind, unable to take actions (Dex ends)."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Summon Wind",
      "Description": "Swift, emanation 10, concentration; you control wind within the radius; it can blow in any one direction, or can blow inward or outward relative to you at the center. Projectiles moving against the wind suffer disadvantage to hit, while those moving with it have advantage. Flying creatures suffer a 50% movement penalty against the wind (50% bonus with it), and if they are Small or smaller, they must pass Strength checks each round to avoid tumbling backward to the edge of the effect. This is true for land-bound creatures of Tiny or smaller. Any gas-based effects within the are dispersed (unless you're using an inward-focused wind, in which case they are concentrated on you)."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Gaseous Form",
      "Description": "SRD"
    },
    {
      "Level": 4,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Thin Air",
      "Description": "Swift, range 20, circle 4; area is devoid of air. Instantly extinguishes any fires and dispels gas effects. Air-breathing creatures immediately suffer light internal damage, and must pass a Con save each round to avoid the same. Speech is impossible, including verbal components for spellcasting. Does not distinguish between friend and foe."
    },
    {
      "Level": 5,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Thunderlance",
      "Description": "Std, line 5x200, 10x100, or 20x50; subjects suffer medium thunder damage plus are pushed to the end of the line. If they strike a hard surface, they suffer bludgeoning damage based on how far they moved (light up to 50-ft, medium up to 100-ft, heavy up to 200-ft)."
    },
    {
      "Level": 6,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "Tornado",
      "Description": "Big, nasty version of Cyclone that moves. TBD. Check the 7.8 cyclone power."
    },
    {
      "Level": 7,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Upgrade",
      "Spell": "Binding Mist",
      "Description": "The mist is thick and difficult to walk through. All creatures suffer 50% movement penalty in the area, and cannot use the Run or Charge actions."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Upgrade",
      "Spell": "Cloying Mist",
      "Description": "The mist is difficult to breathe. Air-breathing creatures cough and sputter, suffering disadvantage to all checks while inside the area. Should they remain for longer than 5 rounds, they begin to asphyxiate; they must reach clear air within 5 minutes or they will die."
    },
    {
      "Level": 4,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Upgrade",
      "Spell": "Moving Cyclone",
      "Description": "Your Cyclone can move as you direct, up to 30-ft/rd. If the subject escapes, the cyclone does not disappear, and can re-acquire the subject (or a new target) simply by passing over them. Furthermore, by spending 2 extra Mana, you can make the Cyclone 10'x10', able to capture 1 Large creature, or up to 4 medium ones."
    },
    {
      "Level": 5,
      "School": "Elementalism",
      "Discipline": "Air",
      "Type": "Upgrade",
      "Spell": "Aciding Mist",
      "Description": "Upgrades Obscuring Mist: the mist causes medium acid"
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Earth",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Fire Bolt",
      "Description": "At-will, std, range 20; inflicts medium fire damage."
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Summon Flare",
      "Description": "At-will, swift; you summon a Flare, a lesser fire elemental that takes the form of a small, ever-burning flame. It has a fly speed of 5, AC 17, 5 HP, and can inflict light fire damage with a melee attack. It sheds light equivalent to a torch."
    },
    {
      "Level": 1,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Burning Hands",
      "Description": "Costs 1 mana, std, cone 3; inflicts medium fire damage."
    },
    {
      "Level": 2,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Scorching Ray",
      "Description": "Costs 2 mana, std, range 20; inflicts heavy fire damage. Can be divided into 2 or 3 rays, inflicting half or 1/3 damage respectively, if you’re a weirdo."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Fireball",
      "Description": "Costs 3 mana, std, range 20, burst 4; inflicts medium fire damage."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Flame Shield",
      "Description": "Costs 3 mana, swift, 10 minutes; you are protected by a wreath of flames, that do not harm you, but anyone who strikes you in melee suffers medium fire damage. The attacker may attempt a Dex save for half damage, but in that case, they negate their attack against you."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Summon Lesser Fire Elemental",
      "Description": "Costs 3 mana, swift; you summon a lesser fire elemental, stats TBD. Can cast any Fire spells you can cast (using your mana)."
    },
    {
      "Level": 4,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Wall of Fire",
      "Description": "Costs 4 mana, swift, range 20, wall 1/level, concentration; 20-ft high wall of fire blocks line of sight, and anyone crossing it suffers heavy fire damage."
    },
    {
      "Level": 5,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Bomb",
      "Description": "Costs 5 mana, std; you create a warm, red bead that glows gently. When it suffers 1 point of damage (from a weapon strike, being thrown against a surface, caught in a spell, etc), it explodes in a burst 4 for medium fire damage. If not destroyed, the bead lasts until you recover the mana used to create it."
    },
    {
      "Level": 6,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Meteor",
      "Description": "Costs 6 mana, std, range 50, burst 8; on next turn start, inflicts heavy fire damage."
    },
    {
      "Level": 6,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Summon Fire Elemental",
      "Description": "Costs 6 mana, swift; you summon a fire elemental, stats per the monster manual. Can cast any Fire spells you can cast (using your mana)."
    },
    {
      "Level": 7,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Living Flame",
      "Description": "Costs 7 mana, swift, concentration; you become a fire elemental. You are immune to fire damage, and resistant to non-magical damage. You have no anatomy and cannot suffer critical hits or sneak attacks. You are immune to poison and disease. Those who strike you in melee suffer medium fire damage, and your melee attacks inflict the same. Your fire spells cost 1 less mana to cast."
    },
    {
      "Level": 8,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Detonate",
      "Description": "Costs 8 mana, std, range 10; subject dies (Con save mitigates to heavy fire damage), then explodes, inflicting heavy fire damage in a burst 3."
    },
    {
      "Level": 9,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Meteor Swarm",
      "Description": "Costs 9 mana, std, range 50; on next turn start, four Meteors fall as you direct."
    },
    {
      "Level": 9,
      "School": "Elementalism",
      "Discipline": "Fire",
      "Type": "Spell",
      "Spell": "Summon Greater Elemental",
      "Description": "TBD"
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Ray of Frost",
      "Description": "At-will, std, range 10; inflicts medium cold damage, plus chilled (50% movement reduction), Con ends."
    },
    {
      "Level": 1,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Howling Winds",
      "Description": "Costs 1 mana, std, cone 3; inflicts medium cold damage, plus chilled (50% movement reduction), Con ends."
    },
    {
      "Level": 1,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Frost Armor",
      "Description": "Costs 1 mana, swift, concentration; you gain medium armor (AC 15 + Dex), and when attackers strike you in melee they are chilled (Con ends)."
    },
    {
      "Level": 2,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Frost Bolt",
      "Description": "Costs 2 mana, std, range 20; inflicts medium cold damage plus chilled (Con ends), or, if target is already chilled, inflicts heavy cold damage."
    },
    {
      "Level": 2,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Frost Nova",
      "Description": "Costs 2 mana, swift, close burst 2; inflicts light cold damage plus rooted (unable to move) (Con ends), then chilled (Con ends)."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Frost Block",
      "Description": "Costs 3 mana, swift, range 10; subject is encased in a block of ice, unable to act, but also invulnerable. The block of ice has Hit Points equal to a heavy damage roll, and is resistant to all forms of damage, except it is vulnerable to fire and immune to poison, disease, and cold. The block lasts until destroyed, or until you end the spell as a free action, or after 3 rounds. Subject emerges a bit chilly, but unharmed."
    },
    {
      "Level": 4,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Ice Storm",
      "Description": "Costs 4 mana, std, range 50, circle 4; inflicts medium bludgeoning plus medium cold damage to everyone in the circle, plus anyone who enters the circle before the next turn."
    },
    {
      "Level": 4,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Wall of Ice",
      "Description": "Costs 4 mana, swift, range 20, wall 1/level, concentration; 20-ft high wall of ice blocks line of sight and effect. Each 5-ft wide section has HP equal to a heavy damage roll, and the same resistances as Frost Block. Destroying one section does not destroy the whole wall, and in fact, the destroyed section reforms one turn later."
    },
    {
      "Level": 5,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Frost Bomb",
      "Description": "Costs 5 mana, std, range 20, circle 4; on the start of your next turn, every creature and object in the area is frozen solid, suffering heavy cold damage each round (Con ends), then chilled (Con ends)."
    },
    {
      "Level": 6,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Frost Orb",
      "Description": "Costs 6 mana, std, range 10, concentration, up to 10 rounds; you create a 5-ft diameter orb of frost magic, which can fly up to 5 squares per round as you direct. Once per round, it can shoot a Ray of Frost (or Ice Lance, if upgraded) at any number of chosen targets within 3 squares."
    },
    {
      "Level": 7,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "Icebound",
      "Description": "Costs 7 mana, swift, concentration; you become a frost elemental. You are immune to frost damage, vulnerable to fire, and resistant to non-magical damage. You have no anatomy and cannot suffer critical hits or sneak attacks. You are immune to poison and disease. Those who strike you in melee suffer medium cold damage, and your melee attacks inflict the same. Your cold spells cost 1 less mana to cast."
    },
    {
      "Level": 8,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 2,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Upgrade",
      "Spell": "Shatter",
      "Description": "All of your spells which cause ''chilled'' critically hit on a roll of 15-20 when striking a creature who is already chilled, or 10-20 if ''rooted''."
    },
    {
      "Level": 3,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Upgrade",
      "Spell": "Reactive Frost Block",
      "Description": "You may cast Frost Block on yourself as a reaction."
    },
    {
      "Level": 4,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Upgrade",
      "Spell": "Frost Barrier",
      "Description": "Your Frost Armor also grants Ablation 10% with 1 charge per round. (When suffering damage, you can choose to suffer 10% of your max HP instead of the damage)"
    },
    {
      "Level": 5,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Upgrade",
      "Spell": "Ice Lance",
      "Description": "Upgrades Ray of Frost to range 20, changes damage to piercing cold. When used against a rooted or frozen target, inflicts heavy piercing damage plus OTS medium cold damage and chilled, Con ends."
    },
    {
      "Level": 5,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Upgrade",
      "Spell": "Cone of Cold",
      "Description": "Upgrades Howling Winds to a cone 10 with the same effect, but any creatures that are already chilled suffer heavy cold damage instead."
    },
    {
      "Level": 6,
      "School": "Elementalism",
      "Discipline": "Frost",
      "Type": "Upgrade",
      "Spell": "Frost Tomb",
      "Description": "Upgrades Frost Block, increasing its HP to 3x heavy damage. When used offensively, the 3 round limit is removed. Instead, the subject suffers medium cold damage each round, and the tomb loses the same amount of HP."
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Lightning",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Paraelemental",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Elementalism",
      "Discipline": "Water",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Summon Sprite",
      "Description": "swift action; you summon a sprite (fly 6/perfect, attacks using your casting stat + proficiency swift, 1 hp/level, AC = yours + 8, powers given in chart below). Can command up to 5 sprites at a time."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Color Spray",
      "Description": "std action, 15-ft cone; each creature is hit with a random color effect (see chart)."
    },
    {
      "Level": 2,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Color Pool",
      "Description": "swift action, range 5, 3 rds; 10-ft square is \"painted\" with chosen color. Allies who stand in the pool gain various benefits while standing in it, and, if they leave, the benefits last until their next turn begins. Sprites gain the listed benefit, as well as the traits of that color atop their normal traits. See chart for details."
    },
    {
      "Level": 3,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Color Veil",
      "Description": "swift action, range 10, wall 1/level, concentration; wall of a single color blocks certain things (see chart), but can be dispelled by the touch of anathema."
    },
    {
      "Level": 4,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Color Beam",
      "Description": "std action, line 2x10 or 1x20; as Color Spray, but a single color you choose, and 2 levels empowered."
    },
    {
      "Level": 5,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Chromatic Shield",
      "Description": "swift action, range 5, 1 hr/level; subject gains variable damage shield. Each round, gain resist 50% against the first attack suffered (fire, physical, lightning, frost, arcane, psychic). The resistance lasts all round, and resets on the subject's turn. Also grants immunity to color effects of level 5 or lower (can empower)."
    },
    {
      "Level": 6,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Prismatic Spray",
      "Description": "std action, 60-ft cone; as Color Spray, but has the effect of Color Beam on enemies (empowered to level 7) and Color Pool on allies (lasting 3 rds)."
    },
    {
      "Level": 8,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Prismatic Wall",
      "Description": "swift action, range 10, wall 1/level, concentration; wall has the effect of Color Veil for all colors simultaneously. Veils apply in order from red to violet (so a complete wall would block fire spells forever, but a single cold spell would cancel the red component, making the blue component vulnerable to fire spells). If an enemy touches the wall, after resolving what is blocked by veils, apply the damaging effect of a random color still active in the wall:\nRed: 15d6 fire plus half ots 3 rounds Orange: 15d8 crushing damage plus knockdown plus push 10 Yellow: 15d6 lightning plus stun 3 rds Green: 15d6 healing Blue: 15d6 frost plus frozen 1rd, rooted 1rd, then chilled 1rd Indigo: sent to another plane! Violet: permanently insane"
    },
    {
      "Level": 9,
      "School": "Evocation",
      "Discipline": "Color",
      "Type": "Spell",
      "Spell": "Prismatic Sphere",
      "Description": "As Prismatic Wall, but a centered circle 1-2, which you can freely cross."
    },
    {
      "Level": 0,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Mage Hand",
      "Description": "SRD"
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Mage Armor",
      "Description": "Costs 1 mana, swift, touch, 8 hours; target gains +3 armor bonus to AC."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Magic Missile",
      "Description": "Costs 1 mana, std action, range 100; subject is struck unerringly by a missile inflicting medium force damage. Can subdivide evenly between 2 or 3 targets, if desired."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Shield",
      "Description": "Costs 1 mana, reaction; roll Spellcraft vs an incoming attack. On success, you avoid the attack, on failure, you suffer its normal effect."
    },
    {
      "Level": 2,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Levitate",
      "Description": "SRD"
    },
    {
      "Level": 4,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Force Lance",
      "Description": "Costs 4 mana, std action, line 2x10; medium force damage plus push 10. Targets pushed against an unyielding surface suffer another medium bludgeoning damage. Inflicts bonus damage on structures (TBD)."
    },
    {
      "Level": 5,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Arcane Hand",
      "Description": "SRD"
    },
    {
      "Level": 5,
      "School": "Evocation",
      "Discipline": "Force",
      "Type": "Spell",
      "Spell": "Wall of Force",
      "Description": "SRD"
    },
    {
      "Level": 0,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Illumination",
      "Description": "swift, emanation 10; you shed warm light, bright enough to see easily, but not piercing to the eyes (of morally-upstanding folk). Any magic or magical creature within the radious which is considered profane to your faith is highlighted by the light, even if the magic or creature was otherwise concealed."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Healing Light",
      "Description": "Long range; heals for medium damage."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Searing Light",
      "Description": "Long range; medium radiant damage, or heavy to an undead or outsider. Causes blindness (Con negates) for 1 rd."
    },
    {
      "Level": 2,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Aura",
      "Description": "Emanation 10, concentration; you are surrounded by an aura of holy light, inspiring your allies. Choose a type:\nRadiance: allies gain Fast Healing 10% and immunity to fear. Tranquility: allies gain advantage to Int/Wis/Cha checks, +1 temporary Mana/rd. Wrath: enemies suffer 50% retributive radiant damage when attack allies; allies gain advantage to attack rolls."
    },
    {
      "Level": 3,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Holy Fire",
      "Description": "range 10, circle 2; heavenly light rains down, bursting into righteous flame. Enemies suffer medium radiant damage."
    },
    {
      "Level": 3,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Pillar of Light",
      "Description": "swift, centered circle 2; allies within circle cannot be harmed, nor can they inflict harm on others. Does not protect them from being pushed or pulled out of the area. Lasts 1 round, but can be sustained for 1 Mana per round (you must remain in the area to do so)."
    },
    {
      "Level": 4,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Wall of Light",
      "Description": "range 10, wall 1/level; crossing the wall heals allies for medium damage (max once/rd), harms enemies for same (undead and outsiders double), blocks line of effect for harmful spells."
    },
    {
      "Level": 5,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Lightform",
      "Description": "swift, concentration, costs 2 Mana/rd; you become an incorporeal form of light, immune to damage, but unable to take physical actions besides flying (movement = 150% walking speed, perfect maneuverability). You may cast Light spells, and you gain a natural \"attack\", which is a medium-range beam that heals allies or harms enemies for medium radiant damage (double vs undead/outsiders)."
    },
    {
      "Level": 6,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Solar Flare",
      "Description": "std, range 20, circle 5; on the beginning of the next round, enemies in the area suffer heavy radiant damage."
    },
    {
      "Level": 7,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Halo",
      "Description": "swift, emanation 10, 5 rounds; allies within the radius are healed for medium damage each round, and once per round, each ally may gain either a dispel attempt against any spell affecting them, or a blessing to one action granting them advantage."
    },
    {
      "Level": 8,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Exultation",
      "Description": "swift, range 10; subject gains +200% to current and max HP, and any effect that would cause instant death or loss-of-control instead causes 33% of their new max HP in unavoidable damage (at their option). Lasts 1 minute."
    },
    {
      "Level": 9,
      "School": "Evocation",
      "Discipline": "Radiance",
      "Type": "Spell",
      "Spell": "Choir of Judgment",
      "Description": "std action, range 20; a chorus of angelic voices sings the judgment of Heaven upon your chosen foe. In the first round, a ray of golden light pierces the sky, and the body of your target, inflicting heavy radiant damage (no save). Each subsequent round, this repeats, and a new beam is added, as new voices join the chorus. If the subject survives 7 rounds, the effect ends."
    },
    {
      "Level": 2,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "Darkvision",
      "Description": "Binds 2 Mana. You can see in darkness, including magical darkness of your own creation."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Absorb Light",
      "Description": "At-will, swift, concentration, emanation up to 5; light levels decrease by one level (sunlight -> bright light -> dim light -> darkness). At level 5+, the radius increases to 10. At level 10+, light levels drop up to 2 levels. At level 15+, the radius increases to 20. At level 20+, light levels drop up to 3 levels."
    },
    {
      "Level": 1,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Darkbolt",
      "Description": "Std, 30-ft; subject suffers medium shadow damage. Does not work in bright light. In darkness, inflicts heavy shadow damage."
    },
    {
      "Level": 2,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Shadowstuff",
      "Description": "Use shadow to create mundane objects, duplicate spells, etc. TBD"
    },
    {
      "Level": 3,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Shadow's Grasp",
      "Description": "Std, 30-ft; subject's Strength is halved. It suffers disadvantage to all Strength-based skills, and inflicts half damage with Strength-based attacks. Heals naturally in one day; can be magically dispelled."
    },
    {
      "Level": 4,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Shadow Binding",
      "Description": "Shadowy tentacles grab your foes. TBD"
    },
    {
      "Level": 5,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Shadow Double",
      "Description": "Swift, range 10; you create a double of yourself out of shadowstuff. The double has all of your abilities and knowledge, and acts independently, although you share a common Mana pool. Lasts up to 3 rounds, or until dispelled."
    },
    {
      "Level": 6,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Void Zone",
      "Description": "Zone of infinite darkness sucks in foes, never to be seen again. TBD"
    },
    {
      "Level": 7,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Wall of Shadows",
      "Description": "swift, range 20, wall 1/level, concentration; 20-ft high wall of absolute darkness blocks line of effect and line of sight. Anyone crossing suffers heavy disintegration damage."
    },
    {
      "Level": 8,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "utility",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Star of the Void",
      "Description": "Std, range 30-ft; you create a sphere of annihilation, one of the most dangerous objects in existence. On your turn, you (and anyone else who knows this spell), can attempt to direct the motion of the sphere by passing a DC 10 Charisma check. On success, you direct its actions. On failure, it directs its own. It can move up to 10 squares per round, and anyone it touches must pass a Dex save (same DC as the control check) or be completely annihilated from existence. Each time it annihilates a creature, its DC and movement increases by 5. Annihilating 10 square feet of matter increases the DC and movement by 1 (which it can do in lieu of 2 squares of movement). Each round it fails to annihilate anything, its DC and movement decreases by 5. To end the spell, you must force it to remain motionless until the DC decreases to 0. Note: you may optionally increase the starting DC beyond 10 to any number up to your caster level. If you're insane."
    },
    {
      "Level": "",
      "School": "",
      "Discipline": "",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "",
      "Discipline": "",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "",
      "Discipline": "",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Evocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Shadow Dichotomy",
      "Description": "If you die while your Shadow Double is active, you were actually the double, and continue living just fine. It was the double that died."
    },
    {
      "Level": "",
      "School": "",
      "Discipline": "",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Binding",
      "Spell": "Animal Companion",
      "Description": "You gain an animal companion (CR 1/4 or lower). By binding Mana, you can increase the CR limit (exact math TBD)"
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Binding",
      "Spell": "Hawkeye",
      "Description": "Binds 1 Mana; you can see as well at 200 feet as you normally would at 20, in dim or brighter conditions. You gain advantage to Perception checks where discerning detail is important."
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Binding",
      "Spell": "Monkey's Grip",
      "Description": "Binds 2 Mana; you gain the movement type of Brachiation 30 ft."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Binding",
      "Spell": "Bat's Eye",
      "Description": "Binds 3 Mana; you gain blindsight in a 30 foot radius."
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "Speak With Animals",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "Summon Beasts",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Affinity",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Binding",
      "Type": "Binding",
      "Spell": "Mystic Eyes",
      "Description": "MOved to Invocation (faerie)"
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Binding",
      "Type": "Binding",
      "Spell": "Devil's Sight",
      "Description": "Moved to Invocation (shadow)"
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Binding",
      "Type": "Binding",
      "Spell": "Air Step",
      "Description": "Binds 3 mana; you can Levitate at will."
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Binding",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Binding",
      "Type": "Binding",
      "Spell": "Devil Wing",
      "Description": "Moved to Invocation (infernal)"
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Channeling",
      "Type": "Binding",
      "Spell": "Wild Growth, rank 1",
      "Description": "Binds 1 mana, at-will, swift, centered circle 5; the earth radiates heat, and thick plant life blossoms from every surface, soil or no. The warm air is rich with the smell of life-giving soil. Allies heal for light damage each round."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Channeling",
      "Type": "Binding",
      "Spell": "Wild Growth, rank 2",
      "Description": "Replaces Wild Growth, rank 1. Binds 3 mana, at-will, swift, centered circle 5; as Wild Growth, rank 1, but the area becomes difficult terrain for enemies, and you can make grapple attacks at range using your spellcasting ability modifier."
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Ritual",
      "Spell": "Miracle",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Manifest",
      "Description": "Similar to SRD Thaumaturgy"
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Power Word: Shield",
      "Description": "Medium range, swift; with a single word, you call upon your faith to protect the subject. They gain Absorb 100% (all), to a limit equal to a heavy damage roll, expiring in 5 rounds."
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Exorcism",
      "Description": "Medium range, swift; subject is freed of one ongoing compulsion or charm effect, or of any magical effect initatied by an extraplanar creature, or of possession by an outsider or incorporeal spirit. In the case of dispelling, no check is required if your Mana cost meets or exceeds that of the targeted effect, otherwise (or always, in the case of possession) a contest of wills is required."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Repentance",
      "Description": "Medium range, swift; subject is unable to take any action but to contemplate their moral choices in life (Wis ends, also ends if subject is harmed). Lasts up to 3 rounds."
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Power Word: Sanctuary",
      "Description": "Medium range, swift; subject is rendered invulnerable, but unable to take hostile actions. Lasts up to 2 rounds, or until dismissed by you or the subject, or dispelled."
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Consecrate",
      "Description": "Swift, centered circle 3, 3 rds; area is designated as holy ground. All profane magic and creatures suffer light radiant damage on turn start while in area. For each ongoing effect originated by such creatures, roll a Faith check against its DC; on success, the effect ends."
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Redemption",
      "Description": "Medium range, std; sufficiently-evil subject is faced with divine judgment, and offered a choice: accept a holy quest to seek redemption, or be annihilated. Cha mitigates annihilation to medium disintegration damage; there is no save against the holy quest."
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Power Word: Barrier",
      "Description": "Swift, centered circle 10, concentration; a barrier of semitransparent radiance surrounds you and your allies. Enemies, and their attacks and spells, cannot cross the barrier, and those inside are compelled to exit immediately (Cha negates, each round). The barrier itself can be attacked; it has Hit Points equal to 500% of a heavy damage roll. You must remain within the area to concentrate on this effect."
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Reprieve",
      "Description": "Std, range 10, 1 hr cooldown; you and allies are teleported to a heavenly realm to rest, reflect, and plan for 10 minutes. When you return, it is exactly the same time and place. Alternatively, you can teleport to the nearest temple of your faith, without the ability to return."
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Spell",
      "Spell": "Vengeful Gaze of God",
      "Description": "std, close burst 5; for an instant, you reveal the true face of God, to the horror of infidels. Enemies suffer the following effects: death, blindness, stunned, each lasting 3 rounds (where applicable) and allowing a save to negate (Con for death, Wis for blindness, Cha for stun). For each effect avoided by any means, the subject suffers medium radiant damage."
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Upgrade",
      "Spell": "Reflective Shield",
      "Description": "Your Power Word: Shield inflicts radiant damage to attackers in the amount that they deplete its absorption. Also applies to Power Word: Barrier and Power Word: Sanctuary."
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Divinity",
      "Type": "Upgrade",
      "Spell": "Shield Regeneration",
      "Description": "You can \"heal\" your shields with any healing spell, up to their original maximum."
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "See Ethereal",
      "Description": "SRD?"
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "Ghost Touch",
      "Description": ""
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "Ethereal Jaunt",
      "Description": "Short-duration ethereal transit."
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "Etherealness",
      "Description": "Long-duration ethereal transit. (SRD)"
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 10,
      "School": "Invocation",
      "Discipline": "Ethereal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "Mystic Eyes",
      "Description": "Binds 1 Mana; you can Detect Magic at will."
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "Fey Step",
      "Description": "Binds 2 Mana, recharge 33%, move; you teleport to a location you can see within 30 ft."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "Glamour",
      "Description": "Binds 3 Mana; you can Disguise Self at will, and have advantage to checks to persuade, seduce, etc."
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "Summon Sprite",
      "Description": "tbd"
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Faerie",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "Flame Infusion",
      "Description": "Each time you attack with a weapon or spell that doesn't cost Mana, you may spend 1 Mana to add the attack's base damage dice again as fire damage."
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "Infernal Barb",
      "Description": "Binds 1 Mana; you gain a claw, or bite, or other natural weapon that inflicts medium slashing or piercing damage and strikes as a magic weapon."
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "Born in Flames",
      "Description": "Binds 3 Mana; you are resistant to fire damage."
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "Devil's Wing",
      "Description": "Binds 5 Mana; at will, you may sprout hellish, bat-like wings, gaining a Fly speed of 30."
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "Born in Flames, rank 2",
      "Description": "Binds 6 Mana; you are immune to fire damage. Replaces Born in Flames, rank 1."
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "Anti-Magic Hide",
      "Description": "Binds 7 Mana; you have advantage on saving throws against spells and other magical effects"
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Immolate",
      "Description": "range 10, std action; target burst into flames, suffering light fire damage plus same ongoing for 3 rds."
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Conflagration",
      "Description": "range 10, std action; ongoing fire effect on subject bursts with renewed intensity, inflicting 3 rounds worth of damage and spreading the effect to subjects within a burst 2."
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Curse of Agony",
      "Description": "range 10, swift action; subject is incapacitated with pain (Con ends)."
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Bolt of Spite",
      "Description": "Long range, std action; inflicts 3d6 poison damage, plus a -2 penalty to attacks and damage (Con ends). For each extra point of Mana spent, add one damage die and -1 penalty."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Hellfire",
      "Description": "std action, close burst 3; enemies suffer 6d6 fire damage plus the ongoing component of Immolate."
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Wave of Pain",
      "Description": "std action, 30-ft cone; subjects are incapacitated with pain (Con reduces to disadvantaged to all checks) for 1 rd."
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Inferno",
      "Description": "std action, long range, burst 2; enemies suffer 8d6 fire damage, plus an Infernal appears (stats as fire elemental but vulnerable to holy damage) and attacks targets in order of proximity (concentration duration)."
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Wretched Deliquescence",
      "Description": "std action, range 10; subject's bones melt, his skin sloughs off, and generally becomes a nasty, disgusting blob, unable to take physical actions besides shuffling painfully at 5-ft/rd. Fort negates, otherwise permanent, but can be reversed with Polymorph or similar effects (but not merely dispelled)."
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Chaos Bolt",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Infernal",
      "Type": "Spell",
      "Spell": "Hellmouth",
      "Description": "std action, long range, circle 5; a portal to Hell opens, spewing forth abominations and sucking hapless fools permanently into Hell. Rules TBD (let's get a game of this level going first)"
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "Armor of Darkness",
      "Description": "Binds 1 Mana; you gain +Cha as an armor bonus (halved in bright light, overlaps with worn armor)"
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "Darkvision",
      "Description": "Binds 2 Mana; you can see in darkness, including magical darkness."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "Guardian Force",
      "Description": "Binds 3 Mana; a shadowy mantle accompanies you constantly. It has a 50% chance to intercept any harmful effect that otherwise would affect you; this ability recharges in one minute."
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Binding",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 2,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 4,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "Shadow Walk",
      "Description": ""
    },
    {
      "Level": 6,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Invocation",
      "Discipline": "Shadow",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Summoning",
      "Type": "Binding",
      "Spell": "Rank 1 Minion",
      "Description": "Binds 1 mana; you gain the service of a permanent minion of rank 1, such as an imp, voidwalker, or pixie. You can summon and unsummon the minion at will, and they must obey without question. Details inside."
    },
    {
      "Level": 3,
      "School": "Invocation",
      "Discipline": "Summoning",
      "Type": "Binding",
      "Spell": "Rank 2 Minion",
      "Description": "Binds 3 mana; etc etc etc."
    },
    {
      "Level": 0,
      "School": "Invocation",
      "Discipline": "Summoning",
      "Type": "Spell",
      "Spell": "Magic Circle",
      "Description": "Ritual (1 minute), circle 1-5 (your choice); magic and extraplanar creatures cannot cross the circle in either direction. The circle itself is only as strong as what it's made of (by default, chalk and salt, but other, more resilient structures can be made), but extraplanar creatures would have difficulty affecting it. It is possible to construct a circle in such a way that you may summon, bind, or dismiss outsiders within it while yourself remaining outside. Lasts one day, or until broken."
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Summoning",
      "Type": "Spell",
      "Spell": "Summon Outsider",
      "Description": "range 5, std action, concentration, costs 1 Mana/rd (if controlled); you summon a named outsider, or an example of a type. Each round, the Outsider is allowed a Charisma save to break free of your control, receiving a +1 swift to this save per point of difference between his challenge level and your level (or a penalty if lower level). If he fails in a given round, he must do as you command. If he succeeds, he takes no action that round, and next round, should he succeed again, he breaks free and can no longer be controlled. At any time, as a single action, you may dismiss an outsider who has not yet broken free. If you do not issue fresh commands each round, the outsider will simply continue acting on the most recent command. If you attempt to summon anything of your level or higher, it is allowed an initial Cha save to negate the summoning entirely."
    },
    {
      "Level": 1,
      "School": "Invocation",
      "Discipline": "Summoning",
      "Type": "Spell",
      "Spell": "Dismiss Outsider",
      "Description": "range 5, swift action; you send an extraplanar creature back to its home plane (Cha negates)."
    },
    {
      "Level": 0,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Sense Emotion",
      "Description": "You can sense emotions and psychic impressions. Rules TBD"
    },
    {
      "Level": 1,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Emotion",
      "Description": "Single action, range 10; subject is affected by a single, powerful emotion. Choose one of the following:\nCalm: Subject immediately ceases all action and contemplates life. Wisdom save ends; any hostility against target ends the effect. Can also use on an ally to nullify a negative emotion effect or berserker rage. Desire: Subject is overcome with desire for caster or another of caster's choice, undermining his judgment. Rules TBD. Fear: Subject becomes frightened, ceasing all action but to flee and defend himself. Wisdom save ends after first round. Resolve: Subject's will is hardened; he gains advantage to all saving throws for 1 minute. Rage: Subject immediately becomes hostile to everyone. Wisdom save ends."
    },
    {
      "Level": 1,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Sense Link",
      "Description": "swift, touch, concentration; you sense what target senses (your body remains helpless)."
    },
    {
      "Level": 2,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Pain Suppression",
      "Description": "swift action, touch; you absorb subject's pain, making them mostly immune: ignoring pain effects, and gaining the ability to take actions while disabled or dying. Rules TBD"
    },
    {
      "Level": 2,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Mind Flay",
      "Description": "single action, medium range; target suffers medium psychic damage plus ''wracked'' (unable to act) for 1 rd (Wis negates)."
    },
    {
      "Level": 3,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Alter Perceptions",
      "Description": "std action, range 10, concentration; you are aware of and entirely control subject's senses. You control the vertical and the horizontal. Your body remains motionless and unaware."
    },
    {
      "Level": 3,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Psychic Feedback",
      "Description": "swift, medium range, concentration; you cause any who inflict pain upon you to feel the same pain. When you suffer damage, the attacker, if within range, suffers the same as psychic damage."
    },
    {
      "Level": 4,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Greater Emotion",
      "Description": "As Emotion, but affects all targets in a 10-ft burst. Alternatively, a single target within range 10 gains one of the following effects:\nDespair: Subject takes no actions at all, even if attacked and harmed. Love: Subject loves you and no concern--not allies, nor even his own life--stands in the way. Zeal: Subject is so self-assured, he becomes immune to all mental control effects for 1 minute. Others TBD"
    },
    {
      "Level": 5,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Mind Blast",
      "Description": "std action, cone 6; subjects suffer medium psychich damage plus ''stunned'' 1 rd (Wis negates)."
    },
    {
      "Level": 5,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Spell",
      "Spell": "Mind Control",
      "Description": "std action, range 10, concentration; you make eye contact with target, and control their actions (on your Initiative) while your body remains motionless and unaware. Subject is allowed Cha to negate initially, and again once/rd to end the effect."
    },
    {
      "Level": 5,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Upgrade",
      "Spell": "Psychic Proxy",
      "Description": "Psychic Proxy: Upgrades Psychic Feedback so that you can grant its effect to a chosen subject by touch (attacks against them are retributed as psychic damage). Recipient must concentrate on the effect, not you."
    },
    {
      "Level": 5,
      "School": "Mentalism",
      "Discipline": "Empathy",
      "Type": "Upgrade",
      "Spell": "Mind Spike",
      "Description": "Mind Spike: Upgrades Mind Blast so that it can be focused on one target, inflicting heavy psychic damage plus stunned (Wis ends)."
    },
    {
      "Level": 1,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Ritual",
      "Spell": "Shield Against Time",
      "Description": "Ritual; touched object is immune to wear, corrosion, spoilage, or other ravages of time. Does not mitigate gross physical damage."
    },
    {
      "Level": 3,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Ritual",
      "Spell": "Timewalking",
      "Description": "Ritual; you (and optionally others) project your minds back in time, while remaining stationary in space. You can experience the past, but cannot affect it. You can stray from your starting point in space, using normal locomotion. How far back you can go is based on your casting skill. Draws mana constantly while used. Details TBD"
    },
    {
      "Level": 0,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Object Reading",
      "Description": "You touch an object, and immediately sense how long it has remained in its current condition, and various facts about the object's last owner. Can \"chain\" backward to previous owners."
    },
    {
      "Level": 1,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Lesser Recall",
      "Description": "Mark, which saves your current temporal state. Casting Lesser Recall (swift action, 1 mana) allows you to set your current physical properties to the state they were in when you cast Mark. You may omit some of these properties as you choose. The Mark must have been cast no longer ago than one minute per level. Properties include: physical location, current HP, objects in hand (no duplication, they will be teleported)."
    },
    {
      "Level": 2,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Time Hop",
      "Description": "swift action, range 10; subject teleports forward in time 1 round, effectively disappearing from reality, before reappearing in exactly the same place and condition, having experienced no time. +1 Mana to double duration."
    },
    {
      "Level": 3,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Haste",
      "Description": "Target moves and acts faster."
    },
    {
      "Level": 3,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Slow",
      "Description": "Target moves and acts slower."
    },
    {
      "Level": 4,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Temporal Refuge",
      "Description": "Ritual, 1-minute cast; you and others within a 20-ft circle are able to act normally while everything outside the circle is locked in time. Nothing you do can affect the outside world. It is possible to work, heal, and physically rest, but the mind cannot rest due to the inaccessibility of the astral plane, or some shit like that. (Can't regain spells)"
    },
    {
      "Level": 5,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Temporal Stasis",
      "Description": "std action, touch range; subject is temporally locked. They cannot be affected by the outside world, nor can anything affect them. They remain fixed relative to the earth, but are unaffected by gravity, should the ground move out from beneath them. Permanent, but dispellable. When the effect ends, however long it lasted, subject has experienced absolutely no passage of time and is no worse for wear."
    },
    {
      "Level": 6,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Greater Recall",
      "Description": "Lesser Recall, but theMark can be up to 1 day/level old, and you can have 3 Marks."
    },
    {
      "Level": 7,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Ravages of Time",
      "Description": "std action, range 10; subject is immediately and permanently aged to the maximum age category (Con save mitigates by half). Can only be undone with chronomancy or divine intervention."
    },
    {
      "Level": 9,
      "School": "Mentalism",
      "Discipline": "Time",
      "Type": "Spell",
      "Spell": "Time Stop",
      "Description": "Take actions while outside the time stream."
    },
    {
      "Level": 0,
      "School": "Necromancy",
      "Discipline": "Death",
      "Type": "Spell",
      "Spell": "Chill Touch",
      "Description": "std, 120 ft; a ghostly, skeletal hand seizes subject, inflicting medium necrotic damage. Until freed of the hand, subject cannot regain hit points through any means (the hand a magic effect that can be dispelled). The hand disappears at the start of the next round.\nAgainst an undead target, this spell inflicts no damage, but does impose disadvantage to attacks against you."
    },
    {
      "Level": 5,
      "School": "Necromancy",
      "Discipline": "Death",
      "Type": "Spell",
      "Spell": "Cloudkill",
      "Description": "SRD"
    },
    {
      "Level": 7,
      "School": "Necromancy",
      "Discipline": "Death",
      "Type": "Spell",
      "Spell": "Finger of Death",
      "Description": "SRD"
    },
    {
      "Level": 0,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "Infection",
      "Description": "std action, touch; you infect subject with a chosen disease. Diseases last 3 rounds (4 at level 5, 5 at level 10, etc).\nBlood Boil: subject suffers light fire damage per round, and when struck for physical damage, causes a burst 1 inflicting light fire damage to enemies. Frost Fever: subject suffers light cold damage per round, and is chilled (-50% movement). Shadow Plague: subject suffers light necrotic damage per round, and has disadvantage to damage rolls."
    },
    {
      "Level": 1,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "Plague Bolt",
      "Description": "std action, 120-ft range; inflicts medium disease damage, plus causes each disease on the target inflcit one round's worth of damage."
    },
    {
      "Level": 2,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "Mold",
      "Description": "Summon various molds, inflicting various nasty ailments and damage."
    },
    {
      "Level": 3,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "Pestilence",
      "Description": "swift, range 5; up to 5 diseases are spread from target to chosen targets within 15 ft of subject.\n  - Alternate use: swift, touch; subject is infected with all diseases you can infect with Infection."
    },
    {
      "Level": 4,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "Slime",
      "Description": "Summon various slimes, inflicting various nasty ailments and damage. They can move."
    },
    {
      "Level": 6,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 7,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 8,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 3,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Upgrade",
      "Spell": "Brain Worms",
      "Description": "Gain a new disease option for Infection, Brain Worms: subject suffers light psychic damage per round, and has a 25% chance each of acting as if under the effects of Confusion."
    },
    {
      "Level": 5,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Upgrade",
      "Spell": "Festering Boil",
      "Description": "Gain a new disease action for Infection, Searing Cysts: subject suffects light acid damage per round, and each time they are struck for non-internal damage, there is a 25% chance a boil will rupture and spill, causing heavy acid damage on the subject's next 3 turns, but ending the disease. (It can be re-infected afterward)"
    },
    {
      "Level": 7,
      "School": "Necromancy",
      "Discipline": "Disease",
      "Type": "Upgrade",
      "Spell": "Stone Scourge",
      "Description": "Gain a new disease option for Infection, Stone Scourge: subject suffers light piercing damage per round, and suffers -1 to movement and any skill check involving physical motion (cumulative) each round, until at 5 rounds, they are petrified. If they survive to 10 rounds, they mysteriously gain the ability to fly. Nobody knows why."
    },
    {
      "Level": 0,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Drain Life",
      "Description": "std action, touch; you sap the target's life force, inflicting medium necrotic damage. You gain the same amount as temporary Hit Points (expiring after 5 rounds if not used)."
    },
    {
      "Level": 1,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Drain Mana",
      "Description": "std action, touch; you drain 1d4+1 Mana from the subject, gaining the same as temporary Mana to be used within 5 rounds. At level 5, drains 1d6+2; at level 10, 1d8+3, etc.\nAlternate use: can use against an existing spell effect. If spell's Mana cost is equal to your drain limit or less, you end the spell while gaining the (temporary) Mana. If its Mana cost is less than twice your maximum, you halve its effectiveness (half damage or healing, subjects have advantage to save against it, etc); doing this twice will end the spell. If its Mana cost is higher still, you cannot affect it. Note that this spell does not confer immunity to the touched spell's effect, so touching a Wall of Firemight be a bad idea."
    },
    {
      "Level": 2,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Spectral Hand",
      "Description": "swift, concentration; a ghostly duplicate of your own hand emerges from it. Thereafter, once/rd, as a free action, you can direct it to move anywhere within 60 feet. If it touches a living creature, it inflicts medium necrotic damage. Alternatively, you may use the hand to deliver touch-range spells. The hand has 1 Hit Point, but is incorporeal and invulnerable to all damage types except Radiant."
    },
    {
      "Level": 3,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Drain Soul",
      "Description": "std, range 10; you extract a portion of the subject's soul, forming it into a glowing, black crystal called a Soul Shard. Choose one of the following:\n - Fetish: you drain one of the subject's ability scores. They suffer disadvantage to checks with that score while you possess the shard, and, you gain advantage in turn. Lasts up to 24 hours.\n - Phylactery: you use the soul fragment as the component for a phylactery (see [Create Phylactery]()).\n - Steal Ability: you gain access to a single chosen power, maneuver, or skill that the subject possesses, while you retain the shard. Lasts up to 24 hours."
    },
    {
      "Level": 4,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Anti-magic Touch",
      "Description": "swift, touch, sustain 1; touched creature or object is wreathed in anti-magic, nullifying all magic affecting or originating from them while it is active. Field lasts for 1 round, but you can sustain it by continuing to expend Mana (1 per turn)."
    },
    {
      "Level": 5,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Death and Decay",
      "Description": "AoE that drains life from all enemies, empowers undead. TBD"
    },
    {
      "Level": 6,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Harvest Soul",
      "Description": "Trap enemy's soul, allowing use of their body as a temporary (or permanent?) undead, use of their abilities, etc."
    },
    {
      "Level": 7,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Anti-magic Zone",
      "Description": "Zone of null magic. TBD"
    },
    {
      "Level": 8,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Ashes to Ashes",
      "Description": "AoE death? Dunno"
    },
    {
      "Level": 9,
      "School": "Necromancy",
      "Discipline": "Drain",
      "Type": "Spell",
      "Spell": "Soul Steal",
      "Description": "Make Alucard proud."
    },
    {
      "Level": 1,
      "School": "Necromancy",
      "Discipline": "Undeath",
      "Type": "Spell",
      "Spell": "Reanimate",
      "Description": "1 action, 60-ft, V/S, 5 rounds; you animate one or more recently-dead (within the last hour) corpses (of humanoids or animals). The cost is 1 Mana per creature animated. You may control a maximum of 1 + 1 per 2 levels as a bonus action (60-ft range, language-dependent); any others act on your last command, or, lacking such command, act as crazed, starved, wild animals might. The traits of the animated dead are:\nUndead: immune to death effects, energy drain, etc. Cannot be healed as living creatures would. Vulnerable to abilities that affect undead specifically. Clumsy: -2 to Dex and movement speed. Stupid: Int set to 5. They are barely able to understand the simplest of spoken commands, with the aid of gestures and nonverbal communication. They lose any spellcasting abilities, skills, feats, class features, and proficiencies. If wielding martial weapons, they are disadvantaged on attack rolls (but are fine with simple weapons). Doomed: At the end of the duration of the spell, they die once more, and cannot be raised again with Reanimate."
    },
    {
      "Level": 1,
      "School": "Necromancy",
      "Discipline": "Undeath",
      "Type": "Spell",
      "Spell": "Death Pact",
      "Description": "free action or reaction to taking damage; an undead creature under your control instantly dies, and you are healed for its current HP (not to exceed your own maximum)."
    },
    {
      "Level": 3,
      "School": "Necromancy",
      "Discipline": "Undeath",
      "Type": "Spell",
      "Spell": "Necrosis",
      "Description": "swift, 60-ft, concentration; subject grows an additional limb, which appears withered and monstrous. It is technically undead, feeding off their life energy, but acting under your control. Once per turn, as a free action, you can direct the necrosis' actions (if it is within 60 ft at the time). It has all the same abilities as the host, within reason (for instance, it could cast one of the hosts' spells, but it couldn't attack with the host's sword if said sword was in another hand (although it could grapple with said hand))."
    },
    {
      "Level": 1,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Ritual",
      "Spell": "Illusory Script",
      "Description": "SRD"
    },
    {
      "Level": 3,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Ritual",
      "Spell": "Glyph of Warding",
      "Description": "Explosive runes, spell trigger, etc."
    },
    {
      "Level": 7,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Ritual",
      "Spell": "Symbol",
      "Description": "Powerful symbol with many uses."
    },
    {
      "Level": 0,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Spell",
      "Spell": "Inscribe Rune",
      "Description": "You inscribe a rune upon a touched weapon or suit of armor, granting it various abilities (see detail page) for 24 hours."
    },
    {
      "Level": 1,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Spell",
      "Spell": "Sign",
      "Description": "std action; you quickly trace one of the simple signs of Sacred Geometry, producing various effects. TBD"
    },
    {
      "Level": 2,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Spell",
      "Spell": "Lesser symbol ideas",
      "Description": "Lesser Symbol: around level 4. Light, Wind, Fire, Sleep, Fear, Blindness, Pain, Despair, Compulsion, Spell Release."
    },
    {
      "Level": 2,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Spell",
      "Spell": "Greater symbol ideas",
      "Description": "Greater Symbol: 7ish. Stunning, Subdual, Death, Petrification, Teleportation, Disintegration, Spell Loss, Soul Trapping, Summoning,"
    },
    {
      "Level": 3,
      "School": "Special",
      "Discipline": "Glyph",
      "Type": "Spell",
      "Spell": "Sigil ideas",
      "Description": "Sigil: warlock + eldritch knight. Quick symbol on the ground. Shaping. Possibilities: force trap, calling diagram, empowerment, debilitation, teleportation (between sigils)."
    },
    {
      "Level": 0,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Ritual",
      "Spell": "Create Phylactery",
      "Description": "10 minutes, reagent cost (1 sp plus a sympathetic component); you create a phylactery: being an object that uses sympathetic magic to create a thaumaturgical connection to another creature. The key ingredient is a sympathetic component, such as blood, hair, or even a prized possession. The object's composition does not matter much; usually, it is a simple doll. The phylactery allows the following uses:\nLocate Creature: at-will; as you concentrate, you sense the direction of the creature, and the rough distance (1 yard, 10 yards, 100 yards, 1 mile, 10 miles, 100 miles, etc). Spirit Link: at-will; you create a mental link to the creature. You may speak to the subject through that creature. You perceive the subject and its most immediate surroundings (a few feet). Lasts as long as you concentrate. Transmit Weal or Woe: at-will; you may cast a spell or use a physical attack against the doll. This transmits the effect of the spell or attack to the subject, over any distance, bypassing all wards. Each such attack has a 25% chance of destroying the doll permanently. Recall Spirit: 1 minute cast, concentration, subject must be dead; you conjure the creature's spirit, allowing communication. If unwilling to cooperate, you may force the subject spirit to answer questions (Will ends effect, one save per question). Destroys phylactery. Steal Visage: 1 minute cast, reserve; you take the form of subject, down to the most minute detail. You know important knowledge the subject would know, such as the names and faces of his close companions. To recall an important detail, such as a secret only he would know, when prompted for it, you may force it from the phylactery (Will ends; a passed save means you can conjure no more secrets this casting). Destroys phylactery."
    },
    {
      "Level": 5,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Ritual",
      "Spell": "Create Hearthstone",
      "Description": ""
    },
    {
      "Level": 5,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Ritual",
      "Spell": "Create Greater Phylactery",
      "Description": "1 hour, reagent cost (1 gp plus a strong sympathetic component); as Create Phylactery, but requires the strongest of sympathetic components, such as a vial of fresh blood (no more than 5 minutes exposed at start of ritual) or a portion of subject's soul. Allows all uses of a standard phylactery, plus:\nTransmit Weal or Woe: same as normal, except phylactery can suffer 5 \"hits\" before being destroyed. Steal Visage: same as normal, but does not destroy phylactery. Steal Spell: at-will; you may cast a spell that the subject knows, as if you knew it. Magnify Harm: constant; any harm you inflict upon subject directly (not through Transmit Weal or Woe) is increased in effectiveness by 50%. Domination: at-will, concentration; you may control subject's actions (Contest of Wills)."
    },
    {
      "Level": 0,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Let Blood",
      "Description": "As a swift action, you let your own blood, suffering 5 internal damage and gaining 1 Mana. At level 5, you may suffer 10 to gain 2; level 10, 15 hp 3 mana, etc.\nAlternate use: you splatter your blood in a burst 2 within 30-ft. It lands on the ground. Could be useful."
    },
    {
      "Level": 1,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Burning Blood",
      "Description": "Std, circle 2, 30-ft range, concentration; targeted blood bursts into flame. Anyone standing in the area of burning blood suffers medium fire damage when the spell is cast, and again on turn start, as long as the spell lasts and they remain inside. (Assume that any time a creature with blood takes non-internal damage, they leave some blood in the square they currently occupy).\nAlternate use: ignite a bloodied weapon, such that it causes medium fire damage in addition to normal damage. Alternate use: target a single creature with blood; they suffer light fire damage on turn start, and each time they are struck for non-internal damage, they suffer light fire damage as flames erupt from their wounds."
    },
    {
      "Level": 1,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Transfusion",
      "Description": "swift, touch; you transfer your HP into subject (not to exceed their maximum). You may also expend 1 Mana to add +5 HP (stackable)."
    },
    {
      "Level": 2,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Ring of Fire",
      "Description": "swift, centered circle 3, concentration (must stay inside circle). A low ring of fire surrounds you, inscribing a pentagram. Does not block line of sight, but does block line of effect of hostile magic and projectiles. Enemies suffer heavy fire damage upon entering or starting turn within area."
    },
    {
      "Level": 2,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Mark of Blood",
      "Description": "swift, range 10, 5 rounds; each time any creature inflicts damage upon the marked subject, the attacker is healed for 1d8 + casting mod (does not heal past maximum)."
    },
    {
      "Level": 3,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Blood Nova",
      "Description": "std action, range 10, burst 2; inflicts fire damage equal to the difference between subject's max and current HP. If targeting self, does not hurt you."
    },
    {
      "Level": 3,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Hemophilia",
      "Description": "swift, range 10; all physical damage subject suffers inflicts half damage again on his next turn. Debuff lasts 3 rounds or until subject is fully healed."
    },
    {
      "Level": 4,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Ironguard",
      "Description": "swift action, concentration; you become immune to metal weapons. They simply pass through you, as if they were made of nothing at all. Has no effect on wooden or glass weapons."
    },
    {
      "Level": 5,
      "School": "Thaumaturgy",
      "Discipline": "Blood",
      "Type": "Spell",
      "Spell": "Frozen Blood",
      "Description": "TBD"
    },
    {
      "Level": 0,
      "School": "Thaumaturgy",
      "Discipline": "Healing",
      "Type": "Spell",
      "Spell": "Spare the Dying",
      "Description": "SRD"
    },
    {
      "Level": 1,
      "School": "Thaumaturgy",
      "Discipline": "Healing",
      "Type": "Spell",
      "Spell": "Cure Wounds",
      "Description": "costs 1 mana, std, touch; heals for medium damage."
    },
    {
      "Level": 1,
      "School": "Thaumaturgy",
      "Discipline": "Healing",
      "Type": "Spell",
      "Spell": "Healing Word",
      "Description": "costs 1 mana, swift, 60-ft; heals for light damage."
    },
    {
      "Level": 2,
      "School": "Thaumaturgy",
      "Discipline": "Healing",
      "Type": "Spell",
      "Spell": "Lesser Restoration",
      "Description": "SRD"
    },
    {
      "Level": 2,
      "School": "Thaumaturgy",
      "Discipline": "Healing",
      "Type": "Spell",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": 9,
      "School": "Thaumaturgy",
      "Discipline": "Healing",
      "Type": "Spell",
      "Spell": "Heroes Never Die",
      "Description": "AoE mass rez. TBD"
    },
    {
      "Level": 1,
      "School": "Thaumaturgy",
      "Discipline": "Transmutation",
      "Type": "Spell",
      "Spell": "Animorph",
      "Description": "swift, range 10; subject becomes a harmless animal. Con ends, damage ends."
    },
    {
      "Level": 2,
      "School": "Thaumaturgy",
      "Discipline": "Transmutation",
      "Type": "Spell",
      "Spell": "Enlarge/Reduce",
      "Description": "SRD"
    },
    {
      "Level": 2,
      "School": "Thaumaturgy",
      "Discipline": "Transmutation",
      "Type": "Spell",
      "Spell": "Alter Self",
      "Description": "SRD"
    },
    {
      "Level": 4,
      "School": "Thaumaturgy",
      "Discipline": "Transmutation",
      "Type": "Spell",
      "Spell": "Polymorph",
      "Description": "SRD"
    },
    {
      "Level": "",
      "School": "",
      "Discipline": "",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Illusion",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Illusion",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Illusion",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Illusion",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Illusion",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Metacreativity",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Metacreativity",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Metacreativity",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Metacreativity",
      "Type": "",
      "Spell": "",
      "Description": ""
    },
    {
      "Level": "",
      "School": "Mentalism",
      "Discipline": "Metacreativity",
      "Type": "",
      "Spell": "",
      "Description": ""
    }
  ]