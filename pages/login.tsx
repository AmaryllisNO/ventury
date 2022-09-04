import { auth, googleAuthProvider } from '../lib/firebase';
import Img from 'next/image';
import { UserContext } from '../lib/context';
import { useCallback, useContext, useEffect, useState } from 'react';
import { doc, getDoc, getFirestore, writeBatch } from 'firebase/firestore';
import { signInWithPopup, signOut } from 'firebase/auth';

const login = () => {
  const { user, username } = useContext(UserContext);

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
};

// Sign in with Google button
const SignInButton = () => {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider).catch((e: any) =>
      console.error(e)
    );
  };

  return (
    <button className='button' onClick={signInWithGoogle}>
      <Img src={'/google.png'} width='30px' height='30px' />
      Sign in with Google
    </button>
  );
};

// Sign out button
const SignOutButton = () => {
  return (
    <button onClick={() => signOut(auth).catch((e: any) => console.error(e))}>
      Sign Out
    </button>
  );
};

const UsernameForm = () => {
  return null;
};

export default login;
