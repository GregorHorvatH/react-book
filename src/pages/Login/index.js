import React, { useContext, useState } from 'react';
import appContext from '../../reducer/appContext';

import { setToken } from '../../reducer/actions';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { dispatch } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === 'react' && password === 'book') {
      const token = '7bdf9835-262c-4a06-81fd-8d0b678dbfc4';

      dispatch(setToken(token));
      localStorage.setItem('token', token);
    } else {
      setError('Не верный логин или пароль');
    }
  };

  return (
    <div className="container login">
      <div className="row">
        <div className="col">
          <h2 className="title">Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
