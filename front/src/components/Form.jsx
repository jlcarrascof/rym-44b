import { useState } from 'react';

function Form() {

    const [email, setEmail] = useState('');

    return <div>
        <form>
            <label htmlFor="email">
                Email:
                <input type="text" />
            </label>

            <label htmlFor="password">
                Password:
                <input type="text" />
            </label>

            <button>
                Submit
            </button>

        </form>           
    </div>
}

export default Form;
