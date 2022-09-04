import React, { useState } from 'react';
import Link from 'next/link';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../lib/firebase';

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
      <h2>SIGN UP</h2>
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
      or
      <SignInButton />
      <div>Current User: {auth.currentUser?.email}</div>
      <div>
        Already have an account? <Link href='/login'>Login</Link>
      </div>
    </div>
  );
};

const SignInButton = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className='button' onClick={signInWithGoogle}>
      Sign In With Google
    </button>
  );
};

export default Signup;
