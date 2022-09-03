import React from 'react';

type Props = {
  name: string;
};
const LinkButton = ({ name }: Props) => {
  return <a className='button'>{name}</a>;
};

export default LinkButton;
