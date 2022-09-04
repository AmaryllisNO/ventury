import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

import { auth, firestore } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  console.log(userData);

  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  const colRef = collection(firestore, 'characters');

  // fetch and read data
  /*  getDocs(colRef)
    .then((snapshot) => {
      let characters: any = [];

      snapshot.docs.forEach((doc) => {
        characters.push({ ...doc.data(), id: doc.id });
      });
      console.log(characters);
    })
    .catch((err) => {
      console.log(err.message);
    }); */

  /*  useEffect(() => {
    let unsubscribe: any;

    if (user) {
      const ref = collection(firestore, 'users').id;
      unsubscribe = ref.onSnapshot
    }

    return () => {};
  }, []); */

  onAuthStateChanged(auth, (user: any) => {
    console.log('user status changed:', user);
  });

  return (
    <UserContext.Provider value={{ user, username }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
