import React from 'react';
// other imports

class YOUR_COMPONENT extends React.Component {
	// other member functions and variables can go here

	render() {
		// JS code goes here
		// but not _all_ your code
		const name = 'Jon Chin';

		return (
			// JSX / HTML  goes here
			<p>
				hello {name}
			</p>
		)
	}
}

export default YOUR_COMPONENT