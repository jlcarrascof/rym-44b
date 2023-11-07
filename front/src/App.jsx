import { useState } from 'react';
import './App.css';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';


function App() {
   
   const [characters, setCharacters] = useState([]);
   
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />
      </div>
   );
}

export default App;