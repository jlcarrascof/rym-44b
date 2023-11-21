import { useState } from 'react';

function Form() {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    function handleChange(evento) {
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
        })
    }   

    return <div>
        <form>
            <label htmlFor="email">
                Email:
                <input 
                    type="text"
                    placeholder='Ingrese un email'
                    id="email"
                    name='email'
                    value={userData.email}
                    onChange={handleChange} />
            </label>

            <label htmlFor="password">
                Password:
                <input 
                    type="text"
                    placeholder='Ingrese un password'
                    id='password'
                    name='password'
                    value={userData.password}
                    onChange={handleChange} />
            </label>

            <button>
                Submit
            </button>

        </form>           
    </div>
}

export default Form;
