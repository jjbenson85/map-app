import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      formData: {
        search: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const formData = this.state.formData;
    this.setState({ formData: { ...formData, [name]: value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`/api/location?search=${this.state.formData.search}`)
      .then(res => {
        this.props.updateSearchResults(res.data);
        this.setState({ formData: { search: "" } });
      });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="search"
            value={this.state.formData.search}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
