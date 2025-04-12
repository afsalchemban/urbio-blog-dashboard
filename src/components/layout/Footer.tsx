import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 1,
        mt: "auto",
        backgroundColor: "transparent",
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="body2"
          align="center"
          sx={{ color: theme.palette.text.secondary }}
        >
          © {new Date().getFullYear()} Dashboard. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
