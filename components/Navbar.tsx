import Link from 'next/link';

import React from 'react';

const Navbar = () => {
  const { user, username } = {
    user: 'user',
    username: 'username',
  };

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
