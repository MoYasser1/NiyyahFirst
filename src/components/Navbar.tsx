import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';
import MosqueIcon from '@mui/icons-material/Mosque';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <MosqueIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            NiyyahFirst
          </Typography>
          <Box>
            <Button
              color="inherit"
              component={RouterLink}
              to="/library"
            >
              Niyyah Library
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/dashboard"
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/reminders"
            >
              Reminders
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/group"
            >
              Group Niyyah
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 