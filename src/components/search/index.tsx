import React, { useState } from 'react';

interface IProps {
    showBtnClear: boolean;
    searchUsers(query: Key): Promise<void>;
    clear(): Promise<void>;
    setAlert(msg: string, type: string): void;
}

const Search: React.FC<IProps> = (props) => {
    const [text, setText] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { searchUsers, setAlert } = props;

        if (text === '') {
            return setAlert(' Please enter something!', 'light');
        }

        searchUsers(text);
        setText('');
    };

    const handleClear = () => {
        const { clear } = props;
        clear();
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

    const { showBtnClear } = props;

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
          {showBtnClear && renderClearBtn()}
        </form>
      </div>
    );
};

export default Search;
