import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import './styles.css';

export const Footer: React.FC = () => {
  return (
    <Box
      id="promo-page-4"
      className="footer promo-page-multiple-block"
      data-selector="4"
    >
      <Box className="footer-container">
        <Box>Copyright © 2018 Ilya Kovalev</Box>
        <Box>Privacy | Terms of Use | Site Map</Box>
        <Box>
          <Link to="https://vk.com/kaizerrus" className="social-vk" />
          <Link to="" className="social-fb" />
          <Link to="" className="social-tw" />
          <Link
            to="https://www.youtube.com/channel/UCBnJJcpyglvK7IDdNbCFsOQ"
            className="social-ut"
          />
        </Box>
      </Box>
    </Box>
  );
};
