import { connect } from 'react-redux'
import Card from './Card'

function Favorites({ myFavorites }) {
    return <div>
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
}

function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps)(Favorites)