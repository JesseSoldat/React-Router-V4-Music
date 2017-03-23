import fetch from 'isomorphic-fetch';

const LOCAL_STORAGE_KEY = 'fsr-spotify-fake-auth';

class Client {
	constructor() {
		this.useLocalStorage = (typeof localStorage !== 'undefined');
		// console.log(this.useLocalStorage); //TRUE

		if(this.useLocalStorage) {
			this.token = localStorage.getItem(LOCAL_STORAGE_KEY);

			if(this.token) {

			}
		}  
	}

	isLoggedIn() {
		return !!this.token;
	}

	login() {
		return fetch('/api/login', {
			method: 'post',
			headers: {
				accept: 'application/json'
			}
		}).then(this.checkStatus)
			.then(this.parseJson)
			.then( (json) => this.setToken(json.token));
	}

	logout() {
		this.removeToken();
	}

	removeToken() {
		this.token = null;

		if(this.useLocalStorage) {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
		}
	}

	setToken(token) {
		this.token = token;

		if(this.useLocalStorage) {
			localStorage.setItem(LOCAL_STORAGE_KEY, token);
		}
	}

	getAlbums(albumIds){
		// console.log(albumIds);
		const url = (
			'/api/albums?ids=' + albumIds.join(',') + '&token=' + this.token
		);
		// console.log(url);

		return fetch(url, {
			method: 'get',
			headers: {
				accept: 'application/json'
			}
		}).then(this.checkStatus)
			.then(this.parseJson);
	}


	checkStatus(res) {
		if(res.status >= 200 && res.status < 300) {
			return res;
		} else {
			const err = new Error(`HTTP Error ${res.statusText}`);
			err.status = res.statusText;
			err.response = res;
			console.log(err);
			throw err;
		}
	}

	parseJson(res) {
		return res.json();
	}
}

export const client = new Client();
