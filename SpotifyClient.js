import fetch from 'isomorphic-fetch';
import URI from 'urijs';
import camelcaseKeys from 'camelcase-keys';


const BASE_URI = 'https://api.spotify.com/v1';

function getFirstImageUrl = (images) => (
	images && images[0] && images[0].url
);

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
    tracks: album.tracks && album.track.items.map((i) => parseTrack(i)),
    artist: parseArtist(album.artist[0]),
    year: album.releaseDate && album.releaseDate.slice(0, 4),
    imageUrl: getFirstImageUrl(album.images),
    name: album.name.replace(/\s\(.+\)$/, '')
  };
}

function parseArtist(artist) {
	return {
		imageUrl: getFirstImageUrl(artist.images),
		name: artist.name,
		id: artist.id
	};
}

function parseTrack(track) {
	return {
		albumImage: track.album && getFirstImageUrl(track.album.images),
		name: track.name,
		durationMs: track.durationMs,
		id: track.id,
		trackNumber: track.trackNumber,
		previewUrl: track.previewUrl
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
	getAlbums
}

export default SpotifyClient;