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

import React, { useState, useEffect } from 'react';
import { fetchDetails } from '../../actions/search';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import UserDetails from './UserDetails';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		width: '600px',
		margin: '20px auto',
		padding: '20px'
	}
});

function ClientSearchContainer() {
	const classes = useStyles();
	const [list, setList] = useState([]);
	const [details, setDetails] = useState({});

	const handleResp = resp => {
		setList(resp);
	};

	const onSelection = async id => {
		const resp = await fetchDetails(id);
		setDetails(resp);
	};
	// useEffect(() => {
	// 	return () => {

	// 	};
	// }, [list]);

	return (
		<div className={classes.container}>
			<SearchForm handleResp={handleResp} />
			<SearchResult list={list} onSelection={onSelection} />
			<UserDetails details={details} />
		</div>
	);
}

export default ClientSearchContainer;
