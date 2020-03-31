import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { getCarById } from '../actions/cars';
import { CarType, ImageType } from '../types/cars';
import { RootReducerType } from '../reducers';
import StepperImages from './StepperImages';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { DEFAULT_PRICE, formatPrice } from '../resources';
import isEmpty from 'lodash/isEmpty';
import CircularProgress from '@material-ui/core/CircularProgress';

// const tutorialSteps = [
//   { url: '//media.jlr-connect.com/ZXFrovXCQTJQefkBEmdUn5' },
//   { imgPath: '//media.jlr-connect.com/QFjGd7doMErYYvpPThNnMc' },
//   { imgPath: '//media.jlr-connect.com/orr8bA2YUU7aGwT6RHYzcg' },
//   { imgPath: '//media.jlr-connect.com/LqziyRY8aRU9PWup5Dh4zJ' },
//   { imgPath: '//media.jlr-connect.com/5ApVwm2gT8XRWR49jMaMxF' },
//   { imgPath: '//media.jlr-connect.com/jmddRj3PPsEDqwLF3CvyXb' },
//   { imgPath: '//media.jlr-connect.com/NJzjtdo3DZAyGquyLUYhAS' }
// ];

const CarInfo: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  let carImages: ImageType[] = [];

  useEffect(() => {
    if (!id) {
      history.goBack();
      return;
    }
    dispatch(getCarById(id));
  }, [dispatch, history, id]);

  const car: CarType | null = useSelector(
    (state: RootReducerType) => state.cars.car
  );
  car && (carImages = car.images);
  const lastValue = car?.price.value.pop() || DEFAULT_PRICE;
  const price = { old: lastValue[0], new: lastValue[1] };

  console.log(car);

  return (
    <Container maxWidth="xl" style={{ paddingTop: '35px' }}>
      {car ? (
        <>
          <Grid container justify="space-between" alignItems="center">
            <Box>
              <Box fontWeight="fontWeightBold" component="h1" m={0}>
                {`${car?.brand} ${car?.model}`}
              </Box>
              <Typography variant="h6" color="textSecondary">
                {car.name}
              </Typography>
            </Box>
            <Box>
              <Box
                fontWeight="fontWeightBold"
                fontSize={14}
                color="text.secondary"
              >
                ЦЕНА, РУБ.
              </Box>
              <Box fontWeight="fontWeightBold" fontSize={30}>
                {formatPrice(price.new)}
              </Box>
              {price.new !== price.old && (
                <Box
                  fontSize={14}
                  color="text.secondary"
                  className="crossed-out-text"
                >
                  {formatPrice(price.old)}
                </Box>
              )}
            </Box>
          </Grid>

          {!isEmpty(carImages) && <StepperImages images={carImages} />}
        </>
      ) : (
        <CircularProgress id="loading" />
      )}
    </Container>
  );
};

export default React.memo(CarInfo);
