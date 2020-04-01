import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export const Footer: React.FC = () => {
  return (
    <Box className="footer">
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Box>Copyright © 2020 Ilya Kovalev</Box>
        <Box>Privacy | Terms of Use | Site Map</Box>
        <Box>
          <Link to="https://vk.com/kaizerrus">
            <img src="/cars/vk.svg" alt="VK" />
          </Link>
          <Link to="">
            <img src="/cars/fb.svg" alt="FB" />
          </Link>
          <Link to="">
            <img src="/cars/tw.svg" alt="TW" />
          </Link>
          <Link to="https://www.youtube.com/channel/UCBnJJcpyglvK7IDdNbCFsOQ">
            <img src="/cars/you.svg" alt="UT" />
          </Link>
        </Box>
      </Grid>
    </Box>
  );
};
