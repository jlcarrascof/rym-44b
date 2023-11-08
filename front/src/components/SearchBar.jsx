import { useState } from 'react';

export default function SearchBar({onSearch}) {
   
   const [id, setID] = useState('');
   
   const handleChange = (evento) => { 
      console.log(evento);
   }
   
   return (
      <div>
         <input type='search' onChange={handleChange}  value={id} />
         <button onClick={() => onSearch()}>
            Agregar
         </button> 
      </div>
   );
}
