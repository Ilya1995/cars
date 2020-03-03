import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import VisibilitySensor from 'react-visibility-sensor';

import CarCard from './CarCard';

export const ListCarCard: React.FC = () => {
  const history = useHistory();
  const [qq, setQq] = useState([
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random(),
    Math.random()
  ]);
  const [loadingBottom, setLoadingBottom] = useState(false);

  const onChangeBottom = (isVisible: boolean) => {
    console.log(`setLoadingBottom ${isVisible}`);
    if (isVisible) {
      setTimeout(() => {
        setLoadingBottom(true);
        console.log(1, qq, qq.length);
        qq.push(...[Math.random(), Math.random(), Math.random()]);
        console.log(3, qq, qq.length);
        setTimeout(() => {
          setQq([...qq]);
          setLoadingBottom(false);
        }, 2000);
      }, 500);
    }
  };

  return (
    <>
      <Grid
        className="my-50"
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {qq.map((el, index) => (
          <Zoom in style={{ marginTop: '50px' }} key={index} timeout={500}>
            <Paper elevation={4} onClick={() => history.push(`cars/${index}`)}>
              <CarCard />
            </Paper>
          </Zoom>
        ))}
      </Grid>
      <Container maxWidth="sm">
        <Box my={5}>
          {loadingBottom ? (
            <LinearProgress />
          ) : (
            <VisibilitySensor onChange={onChangeBottom}>
              <Box textAlign="center">. . . ещё 165 . . .</Box>
            </VisibilitySensor>
          )}
        </Box>
      </Container>
    </>
  );
};
