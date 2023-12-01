import { useState } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions/actions";
import { Link } from "react-router-dom";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav}) {
   
   const [isFav, setIsFav] = useState(false);

   function handleFavorite() { 
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image});
      }
   }  

   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <h2>{id}</h2>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      addFav:function(character) {
         dispatch(addFav(character));
      }, 
      removeFav:function(id) {
         dispatch(removeFav(id));
      }
   };
}

export default connect(null, mapDispatchToProps)(Card);
