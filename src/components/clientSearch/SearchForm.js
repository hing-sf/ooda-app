import React, { useState } from 'react';
import { searchClient } from '../../actions/search';
import SearchInput from './SearchInput';

function SearchForm({ handleResp }) {
	const [number, setNumber] = useState('');
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [organization_name, setOrganization_name] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const params = {
			number,
			first_name,
			last_name,
			organization_name
		};
		const resp = await searchClient(params);
		handleResp(resp);
	};

	const handleInput = (e, type) => {
		const value = e.target.value;
		switch (type) {
			case 'first_name':
				setFirst_name(value);
				break;
			case 'last_name':
				setLast_name(value);
				break;
			case 'organization_name':
				setOrganization_name(value);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<SearchInput
					label='First Name'
					type={'first_name'}
					value={first_name}
					handleInput={handleInput}
				/>
				<SearchInput
					label='Last Name'
					type={'last_name'}
					value={last_name}
					handleInput={handleInput}
				/>
				<SearchInput
					label='Organization'
					type={'organization_name'}
					value={organization_name}
					handleInput={handleInput}
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}

export default SearchForm;
