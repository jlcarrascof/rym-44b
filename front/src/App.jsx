import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Error404 from './components/Error404';
import Form from './components/form/Form';


function App() {
   
   const { pathname } = useLocation();
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   /*
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
   */

   const API_KEY = 'pi-javierjmartinezf';
   const EMAIL = 'javier@mail.com';
   const PASSWORD = 'pass1234';

   function onSearch(id) {
      if(!id) alert('Ingresa por favor un ID')
      if(characters.find(char => char.id === parseInt(id))) return alert (`Ya existe el personaje con ese id ${id}`)

      axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
      .then(({data})=>{
         if(data.name){
            setCharacters(oldChars => [...oldChars,data])
         }
         else {
           alert( 'No hay personajes con ese ID')
         }
      })
      .catch(err => console.log(err))
   }

   const onClose = (id) => setCharacters(characters.filter(char => char.id !== parseInt(id)));

   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} /> }
         <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error404 />} />
         </Routes>   
      </div>
   );
}

export default App;