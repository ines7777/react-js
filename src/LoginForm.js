import React from 'react';
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginForm() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
         <div className='login'>
         <h2 className='mb-3'>Login Form</h2>
         <form className='needs-validation'>
         <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'>email address</label>
            <input type='email' className='form-control' required></input>
            <div className='invalid-feedback'>
                please enter your email
            </div>
         </div>
         <div className='form-group was-validated mb-2'>
            <label htmlFor='password' className='form-label'>password</label>
            <input type='password' className='form-control' required></input>
            <div className='invalid-feedback'>
                please enter your password
            </div>
         </div>
         <div className='form-group form-check mb-2'>
            
            <input type='checkbox' className='form-check-input'></input>
            <label htmlFor='check' className='form-check-label'>remember me</label>
         </div>
         <button type='submit' className='btn btn-success w-100 mt-2'>Sign in</button>
         </form>
        </div>


    </div>
      
    
  )
}



