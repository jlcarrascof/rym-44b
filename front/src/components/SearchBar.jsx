import { set } from 'immer/dist/internal';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   
   const [id, setID] = useState('');
   
   const handleChange = (evento) => { 
      console.log(evento);
      setID(evento.target.value);
   }
   
   const search = () => {  
      onSearch();
      setID('');
   }

   return (
      <div>
         <input type='search' onChange={handleChange}  value={id} />
         <button onClick={search}>
            Agregar
         </button> 
      </div>
   );
}
