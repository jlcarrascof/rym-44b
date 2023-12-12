import { useState } from 'react';
import { Btn, DivSearch, Input } from './SearchStyled';  

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
         <Input type='search' onChange={handleChange}  value={id} />
         <Btn onClick={search}>
            Agregar
         </Btn> 
      </DivSearch>
   );
}
