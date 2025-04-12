import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          width: '100%',
          borderBottom: `1px solid ${theme.palette.divider}`,
          boxShadow:
            'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '48px' }}>
            <Typography
              variant="subtitle1"
              component="div"
              fontWeight={600}
              sx={{ color: theme.palette.text.primary }}
            >
              Urbio Technologies
            </Typography>
            <Box>
              <Button
                href="/"
                size="small"
                sx={{ color: theme.palette.text.primary, textTransform: 'none' }}
              >
                Home
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Navbar;
