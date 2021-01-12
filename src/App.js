import { Snackbar } from "@material-ui/core";
import React, { Component } from "react";
import MiniDrawer from './components/MiniDrawer';


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