import React, { useEffect, ReactNode } from 'react';

interface IProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = React.memo((props: IProps) => {
  useEffect(() => {
    alert(`${props.children}が再レンダリングされました`)
  })

  return <button onClick={props.onClick}>{props.children}</button>
});

export default Button