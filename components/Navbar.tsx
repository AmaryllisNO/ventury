import Link from 'next/link';
import Img from 'next/image';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {
  const { user, username } = useContext(UserContext);

  console.log(username);

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link passHref={true} href='/'>
            <button className='button'>FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className='push-left'>
              <Link passHref href='/admin'>
                <button className='button'>Write Posts</button>
              </Link>
            </li>
            <li>
              {user?.photoURL && (
                <Link passHref href={`/${username}`}>
                  <a>
                    <Img src={user?.photoURL} width='50px' height='50px' />
                  </a>
                </Link>
              )}
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link passHref href='/login'>
              <button className='button'>Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
