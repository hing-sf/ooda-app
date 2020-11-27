import axios from 'axios';

export const searchClient = async params => {
	const { number, first_name, last_name, organization_name } = params;
	const url = `https://npiregistry.cms.hhs.gov/api/?number=${number}&first_name=${first_name}&last_name=${last_name}&organization_name=${organization_name}&version=2.0`;

	try {
		const res = await axios.get(url);
		console.log('res.data.results', res.data.results);

		return res.data.results;
	} catch (err) {
		console.log('err', err);
	}
};

export const fetchDetails = async number => {
	const url = `https://npiregistry.cms.hhs.gov/api/?number=${number}&version=2.0`;

	try {
		const res = await axios.get(url);
		return res.data.results[0];
	} catch (err) {
		console.log('err', err);
	}
};
