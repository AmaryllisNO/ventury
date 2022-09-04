import '../styles/main.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';

import { useUserData } from '../lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const userData = useUserData();

  console.log(userData);
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

  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
