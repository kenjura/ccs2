import { classes } from '../fixtures/classes';

export { read };

const apiRoot = '/api';


async function read(query = {}, options = {}) {
	return query.id ? readOne(query.id, options) : readMany(query, options);
}

async function readMany(query = {}) {
	return classes;

	// todo: make this fully functional (i.e. add filters, sort, etc)
	const url = `${apiRoot}/classes.json?limit=100`;
	const response = await fetch(url);
	const json = await response.json();
	return json;
}

async function readOne(id, options) {
	const cls = classes.find(c => c.id === id);
	return cls;

	const url = `${apiRoot}/classes/${id}.json`;
	const response = await fetch(url);
	const json = await response.json();
	return json;
}

