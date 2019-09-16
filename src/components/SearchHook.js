import React, { useState } from "react";
import axios from "axios";

const Search = ({ updateSearchResults }) => {
  const [formData, setFormData] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    axios.get(`/api/location?search=${formData}`).then(res => {
      updateSearchResults(res.data);
      setFormData("");
    });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          onChange={({ target: { value } }) => setFormData(value)}
          name="search"
          value={formData}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
