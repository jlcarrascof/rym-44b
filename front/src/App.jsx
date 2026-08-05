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

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);


  function onSearch(id) {
    if (!id) return alert('Please enter a character ID');
    if (characters.find((char) => Number(char.id) === Number(id))) {
      return alert(`Character with ID ${id} is already added`);
    }

    axios(`/rickandmorty/character/${id}`)
      .then(({ data }) => setCharacters((oldChars) => [...oldChars, data]))
      .catch((err) => {
        const msg = err.response?.data?.error || 'Character not found';
        alert(msg);
      });
  }

  const onClose = (id) => setCharacters(characters.filter((char) => Number(char.id) !== Number(id)));

  async function login(userData) {
    try {
      const { email, password } = userData;
      const { data } = await axios(`/rickandmorty/login?email=${email}&password=${password}`);
      if (data.access) {
        setAccess(true);
        navigate('/home');
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || 'Invalid credentials';
      alert(errorMsg);
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