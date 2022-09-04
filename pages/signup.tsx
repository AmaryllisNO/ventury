import React from 'react';
import { auth, googleAuthProvider } from '../lib/firebase';

import Signup from '../components/Signup';

const signup = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default signup;
