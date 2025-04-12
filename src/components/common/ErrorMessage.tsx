// /components/ErrorMessage.tsx
import { Alert } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Alert severity="error">{message}</Alert>
);

export default ErrorMessage;
