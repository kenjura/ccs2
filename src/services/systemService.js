import { powers as Powers, skills } from '../fixtures/system';

export { read };

async function read() {
	const powers = Powers.map(p => ({
		level: p.Level,
		school: p.School,
		discipline: p.Discipline,
		type: p.Type,
		name: p.Spell,
		description: p.Description,
	}));
	return { powers, skills };
}
