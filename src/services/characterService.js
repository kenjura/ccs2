import Character from '../models/Character';

import { characters } from '../fixtures/characters';

export { create, read, update, remove };

const apiRoot = '/api';

async function create(asset) {
	const url = `${apiRoot}/characters`;
	const response = await fetch(url, { method:'POST', body:JSON.stringify(asset) });
	const json = await response.json();
	return json;

}

async function remove(assetId) {
	const url = `${apiRoot}/characters/${assetId}`;
	const response = await fetch(url, { method:'DELETE' });
	const json = await response.json();
	return json;
}

async function read(query = {}, options = {}) {
	return query.id ? readOne(query.id, options) : readMany(query, options);
}

async function readMany(query = {}) {
	return characters;

	// todo: make this fully functional (i.e. add filters, sort, etc)
	const url = `${apiRoot}/characters.json?limit=100`;
	const response = await fetch(url);
	const json = await response.json();
	const flattened = json.map(flattenAsset);
	return flattened;
}

async function readOne(id, options) {
	const character = characters.find(c => c.id === id);
	if (!options.parse) return character;
	else return await Character.parse(character);

	const url = `${apiRoot}/characters/${id}.json`;
	const response = await fetch(url);
	const json = await response.json();
	const flattened = flattenAsset(json);
	return flattened;
}

async function update(assetId, asset) {
	const url = `${apiRoot}/characters/${assetId}`;
	const response = await fetch(url, { method:'PUT', body:JSON.stringify(asset) });
	const json = await response.json();
	return json;

}


function flattenAsset(asset) {
	// const tagNames = asset.tags.map(tag => tag.name);
	const tags = {};
	const tagMap = {};
	asset.tags.forEach(tag => tagMap[tag.id] = tag.name);
	asset.tag_values.forEach(tag_value => tags[tagMap[tag_value.tag_id]] = tag_value.value );
	// const tags = asset.tag_values.map(tag_value => ({ [tagMap[tag_value.tag_id]]:tag_value.value }))
	return Object.assign(asset, { tags, rawTags:asset.tags });
}
