import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {routes}
      {/* <ListCarCard /> */}
      <Footer />
    </Router>
  );
};
