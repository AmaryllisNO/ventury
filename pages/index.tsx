import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

import VenturyLogo from '../public/img/venturylogo.svg';

import Loader from '../components/Loader';
import Card from '../components/Card';
import Button from '../components/Button';

const Home: NextPage = () => {
  const user = false;
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);

    /*  if (!user) {
      router.push('/signin');
    } */
  });

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Index</title>
      </Head>
      <div>
        <button onClick={() => toast.success('hello toast!')}>Toast Me</button>
      </div>

      <div className='container '>
        <div className='columns is-mobile is-vcentered '>
          <div className='column is-one-fifth'>
            <Image
              src={VenturyLogo}
              alt='ventury logo'
              width='100px'
              height='120px'
            />
          </div>
          <div className='column'>
            <h1>VENTURY</h1>
            <small>Build your own venturing party</small>
          </div>
        </div>

        <div className='columns'>
          {' '}
          <div className='column p-0 mt-6 '>
            <Link href='/login'>
              <a className='button mb-3'>Log In</a>
            </Link>
            <Link href='/signup'>
              <a className='button mb-3'>Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <Loader show={true} /> */}
    </div>
  );
};

export default Home;
