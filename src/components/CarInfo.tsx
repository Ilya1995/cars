import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { getCarById, putCar } from '../actions/cars';
import { CarType, ImageType } from '../types/cars';
import { RootReducerType } from '../reducers';
import StepperImages from './StepperImages';
import CharacteristicsCar from './CharacteristicsCar';
import DealerInfo from './DealerInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { DEFAULT_PRICE, formatPrice } from '../resources';
import isEmpty from 'lodash/isEmpty';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const CarInfo: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  let carImages: ImageType[] = [];

  useEffect(() => {
    if (!id) {
      history.goBack();
    } else {
      dispatch(getCarById(id));
    }
    return () => {
      dispatch(putCar(null));
    };
  }, [dispatch, history, id]);

  const car: CarType | null = useSelector(
    (state: RootReducerType) => state.cars.car
  );
  car && (carImages = car.images);
  const lastValue = car?.price.value.pop() || DEFAULT_PRICE;
  const price = { old: lastValue[0], new: lastValue[1] };

  console.log(car);

  return (
    <Box id="car-info">
      <Button
        size="small"
        variant="contained"
        color="default"
        onClick={() => history.goBack()}
        startIcon={<ChevronLeftIcon />}
      >
        Назад
      </Button>
      {car ? (
        <>
          <Grid container justify="space-between" alignItems="center">
            <Box>
              <Box
                fontWeight="fontWeightBold"
                component="h1"
                m={0}
                className="font-size_mobile"
              >
                {`${car?.brand} ${car?.model}`}
              </Box>
              <Typography
                variant="h6"
                color="textSecondary"
                className="font-size_mobile"
              >
                {car.name}
              </Typography>
            </Box>
            <Box>
              <Box
                fontWeight="fontWeightBold"
                fontSize={14}
                color="text.secondary"
                className="font-size_mobile"
              >
                ЦЕНА, РУБ.
              </Box>
              <Box
                fontWeight="fontWeightBold"
                fontSize={30}
                className="font-size_mobile"
              >
                {formatPrice(price.new)}
              </Box>
              {price.new !== price.old && (
                <Box
                  fontSize={14}
                  color="text.secondary"
                  className="crossed-out-text font-size_mobile"
                >
                  {formatPrice(price.old)}
                </Box>
              )}
            </Box>
          </Grid>

          <Box mt={5} pb={5} style={{ backgroundColor: 'white' }}>
            {!isEmpty(carImages) && <StepperImages images={carImages} />}
            <CharacteristicsCar car={car} />
            <DealerInfo office={car.main_office} dealerName={car.dealerName} />
          </Box>
        </>
      ) : (
        <CircularProgress id="loading" />
      )}
    </Box>
  );
};

export default React.memo(CarInfo);
