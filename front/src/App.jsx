import './App.css';
import Cards from './components/Cards.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <Cards characters={characters} />
      </div>
   );
}

export default App;