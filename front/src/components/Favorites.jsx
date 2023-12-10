import { useSelector, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../redux/actions/actions'
import Card from './Card'

function Favorites() {
    const dispatch = useDispatch()
    const myFavorites = useSelector(state => state.myFavorites)
    console.log(myFavorites)

    function handleOrder(evento) {
        dispatch(orderCards(evento.target.value))
    }

    function handleFilter(evento) { 
        dispatch(filterCards(evento.target.value))
    }

    return <div>

        <div>
            <select name="filter" onChange={filterCards}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option> 
            </select>

            <select name="order" onChange={orderCards}>
                <option value="ascendente">Ascendente</option>
                <option value="descendente">Descendente</option>
            </select>        
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