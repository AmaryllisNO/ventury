import React from 'react';

type Props = {
  name: string;
};
const Button = ({ name }: Props) => {
  return <div className='button'>{name}</div>;
};

export default Button;
