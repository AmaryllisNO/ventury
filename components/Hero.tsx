import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero__column'>
          <img
            className='hero__logo'
            src='/img/venturylogo.svg'
            alt='Ventury Logo'
          />
        </div>
        <div className='hero__column hero__column--grow'>
          <h1 className='hero__heading'>VENTURY</h1>
          <small className='hero__subtext'>
            Create your own venturing party.
          </small>
        </div>
      </div>
    </>
  );
};

export default Hero;
