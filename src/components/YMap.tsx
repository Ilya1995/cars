import React from 'react';
import Paper from '@material-ui/core/Paper';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const DEFAULT_COORDINATES = [56.311102, 43.790876];

type PropsType = {
  coordinates: number[];
};

const YMap: React.FC<PropsType> = ({ coordinates = DEFAULT_COORDINATES }) => {
  return (
    <Paper onClick={event => event.stopPropagation()} elevation={4}>
      <YMaps>
        <Map
          defaultState={{
            center: coordinates,
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
          <Placemark defaultGeometry={coordinates} />
        </Map>
      </YMaps>
    </Paper>
  );
};

export default React.memo(YMap);
