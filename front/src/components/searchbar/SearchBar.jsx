import { useState } from 'react';
import { DivSearch } from './SearchStyled';  

export default function SearchBar({onSearch}) {
   
   const [id, setID] = useState('');
   
   const handleChange = (evento) => { 
      console.log(evento);
      setID(evento.target.value);
   }
   
   const search = () => {  
      onSearch(id);
      setID('');
   }

   return (
      <DivSearch>
         <input type='search' onChange={handleChange}  value={id} />
         <button onClick={search}>
            Agregar
         </button> 
      </DivSearch>
   );
}
