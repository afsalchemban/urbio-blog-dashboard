import React from 'react';
import { Button, ButtonProps } from '@mui/material';

const BaseButton: React.FC<ButtonProps> = ({
  children,
  sx,
  variant = 'outlined',
  ...props
}) => {
  return (
    <Button
      variant={variant}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontSize: '0.9rem',
        fontWeight: 500,
        borderColor: 'text.primary',
        color: 'text.primary',
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
          borderColor: 'text.primary',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
