import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';


function App() {
   
   const [characters, setCharacters] = useState([]);
   
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

   /*

      function onSearch(id){
      if(!id) alert('Ingresa por favor un ID')
      if(characters.find(char => char.id === parseInt(id))) return alert (`Ya existe el personaje con ese id ${id}`)

      axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
      .then(({data})=>{
         // console.log(data);
         if(data.name){
            setCharacters(oldChars => [...oldChars,data])
         }
         else {
           alert( 'No hay personajes con ese ID')
         }
      })
      .catch(err => console.log(err))
   }

   */

   function onSearch(id) {
      /*
      if (!id) alert('Por favor, ingrese un ID válido');

      if (characters.find(char => char.id === parseInt(id))) 
      return alert('El personaje ya se encuentra en la lista');
      

      axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
      .then(({data}) => {
         if (data.name) {
            setCharacters(oldChars => [...oldChars, data]);
         }
         else {
            alert('No se encontró el personaje');
         }   
      })
      .catch(err => console.log(err));
      */
      if(!id) alert('Ingresa por favor un ID')
      if(characters.find(char => char.id === parseInt(id))) return alert (`Ya existe el personaje con ese id ${id}`)

      axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
      .then(({data})=>{
         // console.log(data);
         if(data.name){
            setCharacters(oldChars => [...oldChars,data])
         }
         else {
           alert( 'No hay personajes con ese ID')
         }
      })
      .catch(err => console.log(err))

      }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;