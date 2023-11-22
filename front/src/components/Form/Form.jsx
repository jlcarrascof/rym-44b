import { useState } from 'react';

function Form() {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    function handleChange(evento) {
        setErrors(validate({ 
            ...userData, [evento.target.name]: evento.target.value 
        }));

        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
        })
    }
    
    function handleSubmit(evento) {
        evento.preventDefault();
        login(userData);

    }

    return <div>
        <form onSubmit={handleSubmit}>
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

            <span>{errors.email}</span>

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

            <span>{errors.password}</span>

            <button>
                Submit
            </button>

        </form>           
    </div>
}

export default Form;
