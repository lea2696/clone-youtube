import React from "react";

class SearchBar extends React.Component {
  state = {
    value: ""
  };
  onChangeHandler = e => {
    this.setState({ value: e.target.value });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.value);
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              placeholder="Introduce el video que quieres buscar"
              type="text"
              value={this.state.value}
              onChange={this.onChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
