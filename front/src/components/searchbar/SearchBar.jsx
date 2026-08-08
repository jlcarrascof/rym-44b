import { useState } from 'react';
import PropTypes from 'prop-types';
import { Btn, BtnRandom, DivSearch, Input } from './SearchStyled';  

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState('');

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const search = () => {
    if (id) {
      onSearch(id);
      setID('');
    }
  };

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  return (
    <DivSearch role="search">
      <Input
        type="search"
        placeholder="Enter ID (1-826)..."
        aria-label="Character ID search input"
        onChange={handleChange}
        value={id}
      />
      <Btn onClick={search} aria-label="Add character by ID">
        Add
      </Btn>
      <BtnRandom onClick={handleRandom} aria-label="Add random character">
        Random 🎲
      </BtnRandom>
    </DivSearch>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
