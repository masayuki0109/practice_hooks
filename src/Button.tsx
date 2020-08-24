import React, { useEffect } from 'react';

interface IProps {
  onClick: () => void;
}

const Button = React.memo((props: IProps) => {
  useEffect(() => {
    console.count();
  })

  return <button onClick={props.onClick}>hello world</button>
});

export default Button