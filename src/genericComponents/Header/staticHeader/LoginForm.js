import React from 'react'
import './components/LoginForm.css'
export default function LoginForm() {
  return (
   <>
        <div className='loginSection'>
          <div className='bothInput'>
          <label className='emailLabel'>Email address:</label>
          <input type='email' className='emailInput' />
          <label className='passwordLabel'>Password:</label>
          <input type='password' className='passwordInput'></input>
          </div>
          <div className='signinDiv'>
            <span className='signin'>sign in</span> 
          </div>
          <div className='details'>
          <span className='Forgotpassword'>Forgot password ?</span>
          <div className='hrLine'></div>
          <span className='Notamember'>Not a member?</span>
          <span className='registerNow'>REGISTER NOW</span>
          </div>
        </div>
   </>
  )
}
