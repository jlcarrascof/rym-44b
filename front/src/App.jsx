import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Nav from './components/nav/Nav.jsx'; 
import Cards from './components/cards/Cards.jsx';
import Form from './components/Form/Form';

const About = lazy(() => import('./components/about/About'));
const Detail = lazy(() => import('./components/detail/Detail'));
const Favorites = lazy(() => import('./components/favorites/Favorites'));
const Error404 = lazy(() => import('./components/error404/Error404'));

function App() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   useEffect(() => {
      const handleKeyDown = (event) => {
         if (event.key === 'Escape' && pathname !== '/') {
            navigate('/home');
         }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
   }, [pathname, navigate]);

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
         { pathname !== '/' && (
            <header role="banner">
               <Nav onSearch={onSearch} />
            </header>
         )}
         <main role="main">
            <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center', padding: '2rem' }}>Loading view...</div>}>
               <Routes>
                  <Route path='/' element={<Form login={login} />} />
                  <Route path='/home' 
                  element={<Cards characters={characters} onClose={onClose} />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/detail/:id' element={<Detail />} /> 
                  <Route path='/favorites' element={<Favorites />} /> 
                  <Route path='*' element={<Error404 />} />
               </Routes>
            </Suspense>
         </main>   
      </div>
   );
}

export default App;