import fetch from 'isomorphic-fetch';
import URI from 'urijs';
import camelcaseKeys from 'camelcase-keys';


const BASE_URI = 'https://api.spotify.com/v1';

function get(url) {
	return fetch(url, {
		method: 'get',
		headers: {
			accept: 'application/json'
		}
	}).then(checkStatus)
		.then(parseJson)
		.then((data) => camelcaseKeys(data, {deep:true}));
}

function checkStatus(res) {
	if(res.status >= 200 && res.status < 300) {
		return res;
	} else {
		const err = new Error(`HTTP Error ${res.statusText}`);
		err.status = res.statusText;
		err.response = res;
		throw err;
	}
}

function parseJson(res) {
	return res.json();
}

function parseAlbum(album) {
	return {
    id: album.id,

  };
}

export function getAlbum(albumId) {
	return get(
		BASE_URI + '/albums/' + albumid
	).then((data) => parseAlbum(data));
}

export function getAlbums(albumIds) {
	return get(
		BASE_URI + '/albums?ids=' + albumIds.join(',')
	).then((data) => (
		data.albums.map( (a) => parseAlbum(a))
	));
}


const SpotifyClient = {
	getAlbum
}

export default SpotifyClient;