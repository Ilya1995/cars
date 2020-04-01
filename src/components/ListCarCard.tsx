import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
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
    <>
      <Grid
        className="my-50"
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
              onClick={() => history.push(`/cars/automobiles/${car.id}`)}
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
              <Box textAlign="center">. . . Загрузить еще . . .</Box>
            </VisibilitySensor>
          )}
        </Box>
      </Container>
    </>
  );
};
