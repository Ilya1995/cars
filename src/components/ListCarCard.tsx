import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import VisibilitySensor from 'react-visibility-sensor';
import CarCard from './CarCard';
import { getCars } from '../actions/cars';
import { RootReducerType } from '../reducers';
import { CarType } from '../types/cars';
import { PER_PAGE } from '../resources';

export const ListCarCard: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cars: CarType[] = useSelector(
    (state: RootReducerType) => state.cars.cars
  );
  const loadingBottom: boolean = useSelector(
    (state: RootReducerType) => state.app.loadingBottom
  );

  const [page, setPage] = useState<number>(cars?.length / PER_PAGE || 0);

  const onChangeBottom = (isVisible: boolean) => {
    if (isVisible) {
      setTimeout(() => {
        const newPage = page + 1;
        dispatch(getCars({ page: newPage }));
        setPage(newPage);
      }, 500);
    }
  };

  return (
    <Box>
      <AppBar position="relative" className="header_opacity">
        <Fade in timeout={1500}>
          <Box textAlign="center" component="h1">
            Подбери для себя новенький Landrover или Jaguar
          </Box>
        </Fade>
      </AppBar>

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {cars.map((car: CarType) => (
          <Zoom
            in
            style={{ marginTop: '50px', maxWidth: '350px' }}
            key={car.id}
            timeout={500}
          >
            <Paper
              elevation={4}
              onClick={() => history.push(`/cars/${car.id}`)}
            >
              <CarCard car={car} />
            </Paper>
          </Zoom>
        ))}
      </Grid>
      <Container maxWidth="sm">
        <Box my={5}>
          {loadingBottom ? (
            <LinearProgress className="linear-progress" />
          ) : (
            <VisibilitySensor onChange={onChangeBottom}>
              <Box>&nbsp;</Box>
            </VisibilitySensor>
          )}
        </Box>
      </Container>
    </Box>
  );
};
