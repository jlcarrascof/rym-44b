const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const exLongChar = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

function validation(data) {
    let errors = {};

    if (!regexEmail.test(data.email)) errors.email = 'El correo electrónico no es válido';
    if (!exLongChar.test(data.name)) errors.name = 'El nombre no es válido';

}

export default validation;