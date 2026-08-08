import { useState } from 'react';
import PropTypes from 'prop-types';
import validation from './validation';
import style from './Form.module.css';

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <h1 className={style.title}>Rick & Morty Portal</h1>
        <p className={style.subtitle}>Enter your credentials to access the multiverse</p>

        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.inputGroup}>
            <label htmlFor="email" className={style.label}>
              Email Address
            </label>
            <input
              type="text"
              placeholder="name@example.com"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={style.input}
            />
            {errors.email && <span className={style.error}>{errors.email}</span>}
          </div>

          <div className={style.inputGroup}>
            <label htmlFor="password" className={style.label}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={style.input}
            />
            {errors.password && <span className={style.error}>{errors.password}</span>}
          </div>

          <button type="submit" className={style.button}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

Form.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Form;
