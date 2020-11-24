import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	container: {
		margin: 10,
		padding: 10
	},
	row: {
		display: 'grid',
		gridTemplateColumns: '100px 150px 150px 1fr ',
		margin: '10px'
	},
	label: {
		textAlign: 'left'
	}
});

function SearchResult({ list = [], onSelection }) {
	const classes = useStyles();
	return (
		<section className={classes.container}>
			{list.map(item => {
				return (
					<div className={classes.row} key={item.number} onClick={() => onSelection(item.number)}>
						<div>{item.number}</div>
						<div>{item.basic?.first_name}</div>
						<div>{item.basic?.last_name}</div>
					</div>
				);
			})}
		</section>
	);
}

export default SearchResult;
