import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	inputContainer: {
		display: 'grid',
		gridTemplateColumns: '150px 1fr',
		margin: '10px'
	},
	label: {
		textAlign: 'left'
	}
});

function SearchInput({ type, label, value, handleInput }) {
	const classes = useStyles();
	return (
		<div className={classes.inputContainer}>
			<label className={classes.label} htmlFor={type}>
				{label}
			</label>
			<input type='text' id={type} name={type} value={value} onChange={e => handleInput(e, type)} />
		</div>
	);
}

export default SearchInput;
