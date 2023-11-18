import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Detail() {

    const { id } = useParams();
    const API_KEY = 'pi-javierjmartinezf';
    const [character, setCharacter] = useState({});

    console.log(character)

    useEffect(() => {
        axios(`https://rym2.up.railway.app/api/character/${id}?key=${API_KEY}`)
            .then(({ data }) => { 
                if (data.name) {
                    setCharacter(data)
                } else {
                    alert('No hay personajes con ese ID')
                }   
             })

             return setCharacter({})

    }, [id]);

    return <div>
        Estoy en el Detail
    </div> 
}

export default Detail;