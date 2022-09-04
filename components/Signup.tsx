import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

const Signup = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label>Email address</label>
          <input
            type='email'
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </div>
        <button type='button' onClick={register}>
          Sign Up
        </button>
      </form>
      <div>Current User: {auth.currentUser?.email}</div>
    </div>
  );
};

export default Signup;
