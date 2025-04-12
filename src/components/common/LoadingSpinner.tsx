// /components/LoadingSpinner.tsx
import { CircularProgress } from '@mui/material';

const LoadingSpinner: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
    <CircularProgress />
  </div>
);

export default LoadingSpinner;
