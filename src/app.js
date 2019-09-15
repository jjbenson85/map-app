import React from "react";
import ReactDOM from "react-dom";

import Map from "./components/MapHook";
import Search from "./components/Search";

import "./scss/style.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: {
        lat: 0,
        lon: 0
      }
    };
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }
  updateSearchResults(searchResults) {
    console.log("searchResults", searchResults);
    this.setState({ searchResults });
  }
  render() {
    return (
      <div className="app">
        <Search updateSearchResults={this.updateSearchResults} />
        <Map {...this.state.searchResults} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
