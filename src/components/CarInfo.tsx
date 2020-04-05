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
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NotificationManager } from 'react-notifications';

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

  return (
    <Box id="car-info">
      <AppBar position="sticky" className="header_opacity">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Button
              size="small"
              variant="contained"
              className="nav-btn"
              onClick={() => history.goBack()}
              startIcon={<ChevronLeftIcon />}
            >
              Назад
            </Button>
            <Button
              size="small"
              variant="contained"
              className="nav-btn"
              onClick={() =>
                NotificationManager.error(
                  'Не так быстро ковбой, сайт ещё не готов',
                  'Стоооой!'
                )
              }
              endIcon={<ChevronRightIcon />}
            >
              Заказать
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      {car ? (
        <>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ marginTop: '40px' }}
          >
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

          <Box pb={5} className="content">
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
