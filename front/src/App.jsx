import { useState } from 'react';
import './App.css';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';


function App() {
   
   const [characters, setCharacters] = useState([]);
   
   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   function onSearch(characters) {
      setCharacters(characters);
   }

   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />
      </div>
   );
}

export default App;