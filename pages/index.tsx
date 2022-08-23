import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import Loader from '../components/Loader';
import Card from '../components/Card';

const Home: NextPage = () => {
  const user = false;
  const router = useRouter();
  useEffect(() => {
    console.log(router.pathname);

    if (!user) {
      router.push('/signin');
    }
  });

  return (
    <div>
      <Link
        href={{
          pathname: '/[username]',
          query: { username: 'amaryllis' },
        }}
      >
        <a href=''>Link</a>
      </Link>

      <Loader show />

      <div className='columns'>
        <div className='column'>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
