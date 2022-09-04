import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import { auth } from '../lib/firebase';

// UI COMPONENTS
import Hero from '../components/Hero';

const Landing: NextPage = () => {
  const user = auth.currentUser;

  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/feed');
    }
  });

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Index</title>
      </Head>
      {/* <div>
        <button onClick={() => toast.success('hello toast!')}>Toast Me</button>
      </div> */}

      <div className='container '>
        <Hero />
        <div className='columns'>
          {' '}
          <div className='column p-0 mt-6 '>
            <Link href='/login'>
              <a className='button button--mw315 mb-3'>Log In</a>
            </Link>
            <Link href='/signup'>
              <a className='button button--mw315 mb-3'>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <Loader show={true} /> */}
    </div>
  );
};

export default Landing;
