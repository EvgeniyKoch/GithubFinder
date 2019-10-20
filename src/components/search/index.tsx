import React, { Component } from "react";

type StateSearch = {
  text: string,
};

type Props = {
    showBtnClear: boolean,
    searchUsers(query: Key): Promise<void>,
    clear(): Promise<void>,
}

class Search extends Component<Props, StateSearch> {
  state = {
    text: ""
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      this.setState({ text: value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { searchUsers } = this.props;
    const { text } = this.state;

    if (text === '') {
        return null;
    }

    searchUsers(text);
    this.setState({ text: ''});
  }

  handleClear = () => {
    const { clear } = this.props;
    clear();
  }

  renderClearBtn = () => (
      <button
          type="button"
          className="btn btn-light btn-block"
          onClick={this.handleClear}
      >
          Clear
      </button>
  )

  render() {
    const { text } = this.state;
    const { showBtnClear } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            onChange={this.handleSearch}
            value={text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {showBtnClear && this.renderClearBtn()}
        </form>
      </div>
    );
  }
}

export default Search;
