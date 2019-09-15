import React, { useState } from "react";
import ReactDOM from "react-dom";

import Map from "./components/MapHook";
import Search from "./components/SearchHook";

import "./scss/style.scss";

const App = () => {
  const [searchResults, setSearchResults] = useState({
    lat: 0,
    lon: 0
  });

  return (
    <div className="app">
      <Search updateSearchResults={setSearchResults} />
      <Map {...searchResults} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
