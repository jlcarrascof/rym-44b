import './App.css';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />
      </div>
   );
}

export default App;