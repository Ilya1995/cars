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
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const CarCard: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setChecked(prev => !prev);
  };

  return (
    <Card className="card-root shadow">
      <CardActionArea>
        <CardMedia
          style={{ height: 140 }}
          image="//media.jlr-connect.com/Dim2ibPVr83sJibS28oYWj"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            Range Rover Evoque
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Evoque 5 Door 2.0 TD4 Diesel 150 SE
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
                2 500 000
              </Box>
            </Typography>
          </Grid>
          <Grid container justify="flex-end" alignItems="center">
            <Typography
              color="textSecondary"
              className="crossed-out-text"
              component="span"
            >
              <Box fontSize={14}>3 100 000</Box>
            </Typography>
          </Grid>
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
            <Box component="span">Santorini Black</Box>
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
            <Box component="span">2018</Box>
          </Box>
          <Divider />
          <Box mt={2}>
            <Box mb={2} onClick={handleClick}>
              <LocationOnIcon style={{ verticalAlign: 'bottom' }} />
              Юг-Авто, Краснодар
            </Box>
            <Zoom in={checked} style={{ display: checked ? '' : 'none' }}>
              <Paper elevation={4}>
                <YMaps>
                  <Map
                    defaultState={{
                      center: [56.311102, 43.790876],
                      zoom: 14,
                      controls: [
                        'zoomControl',
                        'fullscreenControl',
                        'geolocationControl',
                        'trafficControl'
                      ]
                    }}
                    modules={[
                      'control.ZoomControl',
                      'control.FullscreenControl',
                      'control.GeolocationControl',
                      'control.TrafficControl'
                    ]}
                  >
                    <Placemark defaultGeometry={[56.311102, 43.790876]} />
                  </Map>
                </YMaps>
              </Paper>
            </Zoom>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default React.memo(CarCard);
