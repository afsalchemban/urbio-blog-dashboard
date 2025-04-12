import React from 'react';
import { CircularProgress, ButtonProps } from '@mui/material';
import BaseButton from './BaseButton'; // Importing the BaseButton

interface ButtonWithLoadingProps extends ButtonProps {
  isLoading: boolean;
  text: string;
}

const ButtonWithLoading: React.FC<ButtonWithLoadingProps> = ({ isLoading, text, ...props }) => (
  <BaseButton {...props} disabled={isLoading} >
    {isLoading ? <CircularProgress size={24} color="inherit" /> : text}
  </BaseButton>
);

export default ButtonWithLoading;
