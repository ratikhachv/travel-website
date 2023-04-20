import React, { useState } from 'react';
import loginImage from '../../../images/loginImage.png';
import './StaticHeader.css';
import LoginForm from './components/LoginForm';
export default function Login() {
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
    <header className='staticHeader'>
      <div className='loginDiv' onClick={handleClick}>
        <img className='loginImage' src={loginImage} alt='Login' />
        <span className='login'>LOGIN</span>
      </div>
      </header>

      {showLogin && (
        <LoginForm/>
          )}
    </>
  );
}