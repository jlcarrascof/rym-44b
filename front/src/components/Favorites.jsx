import { useSelector } from 'react-redux'
import Card from './Card'

function Favorites() {
    const myFavorites = useSelector(state => state.favorites)
    console.log(myFavorites)

    return <div>

        <div>
            
        </div>    

        <div>
            <h1>Favorites</h1>
            {
                myFavorites.map((char) => { 
                    return <Card 
                    key={char.id}
                    id={char.id} 
                    name={char.name}
                    status={char.state}
                    species={char.species}
                    gender={char.gender}
                    origin={char.origin}
                    image={char.image}
                     />   
                })
            }
        </div>
    </div>    
}




export default Favorites