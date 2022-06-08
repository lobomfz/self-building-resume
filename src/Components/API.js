import axios from 'axios';

const API_ENDPOINT =
	process.env.REACT_APP_API_ENDPOINT || 'https://lobomfz.com/';

export async function GetConsoleLog() {
	try {
		let res = await axios.get(`${API_ENDPOINT}/api/console`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
}

export async function GetBuildNumber() {
	try {
		let res = await axios.get(`${API_ENDPOINT}/api/build`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
}

export async function BuildAgain() {
	try {
		let res = await axios.post(`${API_ENDPOINT}/api/newbuild`);
		return res.data;
	} catch (err) {
		console.error(err);
	}
}
