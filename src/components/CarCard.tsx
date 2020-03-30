import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import YMap from './YMap';
import { CarType } from '../types/cars';
import isEmpty from 'lodash/isEmpty';

type PropsType = {
  car: CarType;
};

const DEFAULT_PRICE = [3500000, 3750000];

const CarCard: React.FC<PropsType> = ({ car }) => {
  const [checked, setChecked] = useState(false);
  const lastValue = car.price.value.pop() || DEFAULT_PRICE;
  const price = { old: lastValue[0], new: lastValue[1] };

  console.log(car);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setChecked(prev => !prev);
  };

  const formatPrice = (price: number): string =>
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <Card className="card-root shadow">
      <CardActionArea>
        <CardMedia
          style={{ height: 200 }}
          image={
            !isEmpty(car.images)
              ? car.images[0].url
              : '//media.jlr-connect.com/Dim2ibPVr83sJibS28oYWj'
          }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {`${car.brand} ${car.model}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {car.name}
          </Typography>

          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={Math.random() * 4 + 2} readOnly />
          </Box>
          <Grid container justify="space-between" alignItems="center">
            <Typography component="span">
              <Box fontWeight="fontWeightBold" fontSize={16}>
                ЦЕНА, РУБ.
              </Box>
            </Typography>
            <Typography component="span">
              <Box fontWeight="fontWeightBold" fontSize={16}>
                {formatPrice(price.new)}
              </Box>
            </Typography>
          </Grid>
          {price.new !== price.old ? (
            <Grid container justify="flex-end" alignItems="center">
              <Typography
                color="textSecondary"
                className="crossed-out-text"
                component="span"
              >
                <Box fontSize={14}>{formatPrice(price.old)}</Box>
              </Typography>
            </Grid>
          ) : (
            <Box>&nbsp;</Box>
          )}
          <Divider />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontSize={12}
            mt={2}
            mb={1}
          >
            <Box component="span" color="text.secondary">
              ЦВЕТ
            </Box>
            <Box component="span">{car.color.name}</Box>
          </Box>

          <Divider />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            fontSize={12}
            mt={2}
            mb={1}
          >
            <Box component="span" color="text.secondary">
              ГОД
            </Box>
            <Box component="span">{car.year}</Box>
          </Box>
          <Divider />
          <Box mt={2}>
            <Box mb={2} onClick={handleClick}>
              <LocationOnIcon style={{ verticalAlign: 'bottom' }} />
              {`${car.dealerName}, ${car.main_office.city}`}
            </Box>
            <Zoom in={checked} style={{ display: checked ? '' : 'none' }}>
              <Paper onClick={event => event.stopPropagation()} elevation={4}>
                <YMap coordinates={car.main_office.location.coordinates} />
              </Paper>
            </Zoom>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(CarCard);
