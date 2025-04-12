import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ flex: 1, paddingTop: 10 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
