import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ children, variant = 'primary', ...props }: Props) {
  return (
    <button {...props} data-variant={variant}>
      {children}
    </button>
  );
}
