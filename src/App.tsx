import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
export const App: React.FC = () => {
  return (
    <Router>
      <Box className="content">
        <Header />
        <Container maxWidth="xl">{routes}</Container>
      </Box>
      <Footer />
    </Router>
  );
};
