import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { fetchDetails } from '../../actions/search';

const useStyles = createUseStyles({
	container: {
		width: '500px',
		margin: '20px auto'
	},
	row: {
		display: 'grid',
		gridTemplateColumns: '150px 1fr',
		margin: '10px',
		textAlign: 'left'
	}
});

function UserDetails({ id }) {
	const history = useHistory();
	const classes = useStyles();
	const [details, setDetails] = useState({});

	useEffect(() => {
		const pathname = history.location.pathname;
		const id = pathname.match(/\d+/);

		if (!id) return;
		const fetchData = async userId => {
			const resp = await fetchDetails(userId);
			setDetails(resp);
		};
		fetchData(id[0]);
		return () => {
			setDetails({});
		};
	}, []);

	const renderAddress = addresses => {
		if (!Array.isArray(addresses)) return '';

		return addresses.map((address, idx) => {
			return <div key={`address_${idx}`}>{`Address ${idx + 1}: ${address.address_1}`}</div>;
		});
	};
	return (
		<div>
			<Link to='/'>Search User</Link>
			<section className={classes.container}>
				<div className={classes.row}>
					<div> Number: </div>
					<div> {details.number} </div>
				</div>
				<div className={classes.row}>
					<div> NPI Number: </div>
					<div> {details.enumeration_type} </div>
				</div>
				<div className={classes.row}>
					<div> Name: </div>
					<div> {details.basic?.name} </div>
				</div>
				<div className={classes.row}>
					<div> Addresses: </div>
					<div> {renderAddress(details.addresses)} </div>
				</div>
			</section>
		</div>
	);
}

export default UserDetails;
