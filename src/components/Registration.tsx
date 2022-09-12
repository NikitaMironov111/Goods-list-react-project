import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import http from './http';
import Context from '../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {
  const { setOpenModalLogin, setIsLoginUser } = useContext(Context);

  const path = useLocation();
  const isLogin = path.pathname === '/login';
  const [login, setLogin] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [showPass, setShowPass] = useState(false);

  const authorization = async () => {
    const data = { username: login, password: password };
    try {
      const authorizationData = await http.post(
        'https://dummyjson.com/auth/login',
        data
      );
      const userData = authorizationData.data;
      if (authorizationData.data.token) {
        for (let key in userData) {
          localStorage.setItem(`${key}`, `${userData[key]}`);
        }
        setIsLoginUser(true);
        setOpenModalLogin(false);
        console.log(authorizationData.data);
      }
    } catch (error: any) {
      alert(error);
    }
  };
  return (
    <div className="row">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type={showPass ? 'text' : 'password'}
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <span
          className="input-group-text"
          id="basic-addon1"
          onClick={() => setShowPass((prev) => !prev)}
        >
          {showPass ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
      </div>
      {isLogin ? (
        <div>
          <Link to="registration">Don't have a account? Registration!</Link>
        </div>
      ) : (
        <div>
          <Link to="login">Have a account? Login!</Link>
        </div>
      )}
      <button className=" mt-2 btn btn-primary" onClick={() => authorization()}>
        {isLogin ? 'Log In' : 'Registration'}
      </button>
    </div>
  );
};

export default Registration;
