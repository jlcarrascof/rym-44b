import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Nav from './components/nav/Nav.jsx'; 
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Error404 from './components/error404/Error404';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


function App() {
   
   const { pathname } = useLocation();
   const navigate = useNavigate();
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const API_KEY = 'pi-javierjmartinezf';
   const EMAIL = 'javier@mail.com';
   const PASSWORD = 'pass1234';
   // const URL = `http://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`;

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   function onSearch(id) {
      if (!id) alert('Ingresa por favor un ID')
      if (characters.find((char) => char.id === parseInt(id))) return alert (`Ya existe el personaje con ese id ${id}`)

      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({data})=> setCharacters((oldChars) => [...oldChars, data]))
      .catch((err) => alert(err.response.data.error));
   }

   const onClose = (id) => setCharacters(characters.filter((char) => char.id !== parseInt(id)));

   function login(userData) { 
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert('Usuario o contraseña incorrectos');
      }
   }

   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} /> }
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' 
            element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} /> 
            <Route path='/favorites' element={<Favorites />} /> 
            <Route path='*' element={<Error404 />} />
         </Routes>   
      </div>
   );
}

export default App;