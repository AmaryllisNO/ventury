import React from 'react';
import { auth, googleAuthProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

const login = (props: any) => {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  console.log(user);
  auth.signOut();

  return (
    <main>
      <h1>LOG IN </h1>

      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <>
          <SignInButton />
          <SignOutButton />
        </>
      )}
    </main>
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

const SignOutButton = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};

const UsernameForm = () => {
  return null;
};

export default login;
