import React, { Component } from "react";

// other imports
import { Snackbar } from "@material-ui/core";
import MiniDrawer from './components/MiniDrawer';

class App extends Component {
	// other member functions and variables can go here
	add(a, b) {
		return a + b;
	}

	render() {
		// JS code goes here
		// but not _all_ your code

		return (
			// JSX / HTML  goes here
			<div className="App">
				<MiniDrawer>
				</MiniDrawer>
			</div>
		);
	}
}

export default App;