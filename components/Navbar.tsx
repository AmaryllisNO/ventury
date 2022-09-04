import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

const Navbar = () => {
  const { user, username } = useContext(UserContext);

  console.log(user);
  console.log(username);

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link href='/'>
            <button className='button'>FEED</button>
          </Link>
        </li>{' '}
        {username && (
          <>
            <li>
              <Link href='/admin'>
                <button>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoUrl} />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <>
            <li>
              <Link href='/login'>
                <button className='button'>Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
