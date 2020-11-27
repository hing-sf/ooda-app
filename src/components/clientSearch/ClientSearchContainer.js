// As a representative of an insurance company, I need to obtain a health provider&apos;s contact information.
// 	• I can search for provider by keywords (matches to their name or their org name).
// 	• I can select a search result for more information
// 	• I can see the following provider information in the detail view: name / org name, npi number, addresses, and practice locations.
// 	• I can share the URL of a provider details with a colleague (a copy/paste capable URL)
// 	• I am left with an impression of professionalism when using the application

// Tech requirements:
// 	• Must make use of this API: https://npiregistry.cms.hhs.gov/registry/help-api
// 	• Must use ReactJS with any framework/starter of your choice.
// 	• Must *not* use a CSS framework
// 	• Must include a git history of your work with *at least* 3 commits at these stages:

// 1. Project initialization
// 2. Completion of search functionality
// 3. Completion of provider detail functionality

// Notes:
// not sure organization name property in search input is correct as I don't see organization property in the response object

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const useStyles = createUseStyles({
	container: {
		width: '600px',
		margin: '20px auto',
		padding: '20px'
	}
});

function ClientSearchContainer() {
	const classes = useStyles();
	const history = useHistory();
	const [list, setList] = useState([]);

	const handleResp = resp => {
		setList(resp);
	};

	const onSelection = async id => {
		history.push(`/user-details/${id}`);
	};

	return (
		<div className={classes.container}>
			<SearchForm handleResp={handleResp} />
			<SearchResult list={list} onSelection={onSelection} />
		</div>
	);
}

export default ClientSearchContainer;
