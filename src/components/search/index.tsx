import React, { useContext, useState } from 'react';
import GitHubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GitHubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { setAlert } = alertContext;

        if (text === '') {
            return setAlert(' Please enter something!', 'light');
        }

        githubContext.searchUsers!(text);
        setText('');
    };

    const handleClear = () => {
        githubContext.clear();
    };

    const renderClearBtn = () => (
      <button
          type="button"
          className="btn btn-light btn-block"
          onClick={handleClear}
      >
          Clear
      </button>
    );

    const { users } = githubContext;

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            onChange={handleSearch}
            value={text}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {users.length > 0 && renderClearBtn()}
        </form>
      </div>
    );
};

export default Search;
