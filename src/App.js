import { Snackbar } from "@material-ui/core";
import React, { Component } from "react";
import MiniDrawer from './components/MiniDrawer';


// class YOUR_COMPONENT extends React.Component {
// 	// other member functions and variables can go here

// 	render() {
// 		// JS code goes here
// 		// but not _all_ your code
// 		const name = 'Jon Chin';

// 		return (
// 			// JSX / HTML  goes here
// 			<p>hello {name}</p>
// 		)
// 	}
// }

// export default YOUR_COMPONENT

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
	//jsCode goes here


    return (
      <div className="App">
		  <MiniDrawer>
		  </MiniDrawer>
      </div>
    );
  }
}

export default App;