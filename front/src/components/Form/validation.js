const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const exLongChar = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

function validation(data) {
    let errors = {};

    if (!regexEmail.test(data.email)) errors.email = 'El correo electrónico no es válido';
    if (!exLongChar.test(data.email)) errors.email = 'La longitud debe tener entre 1 y 35 caracteres';
    if (!regexPassword.test(data.password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número';

    // Option 2 (using Javascript logic)
    
    /*
    if (data.email === '') errors.email = 'El correo electrónico es requerido';
    if (data.email.length > 35) errors.email = 'La longitud debe tener entre 1 y 35 caracteres';
    if (data.password === '') errors.password = 'La contraseña es requerida';
    if (data.password.length < 6) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres y al menos un número';
    */

    return errors;
}

export default validation;