import { useState } from 'react';
import { Btn, DivSearch, Input } from './SearchStyled';  

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState('');

  const handleChange = (evento) => {
    setID(evento.target.value);
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
    <DivSearch>
      <Input
        type="search"
        placeholder="Enter ID (1-826)..."
        onChange={handleChange}
        value={id}
      />
      <Btn onClick={search}>Add</Btn>
      <Btn onClick={handleRandom} style={{ marginLeft: '5px' }}>
        Random 🎲
      </Btn>
    </DivSearch>
  );
}
