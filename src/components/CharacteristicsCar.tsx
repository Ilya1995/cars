import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import MinimizeIcon from '@material-ui/icons/Minimize';
import AddIcon from '@material-ui/icons/Add';
import { CarType } from '../types/cars';

type PropsType = {
  car: CarType;
};

const CharacteristicsCar: React.FC<PropsType> = ({ car }) => {
  const characteristicsLeft = [
    { title: 'VIN', item: car.vin },
    { title: 'Комплектация', item: car.grade },
    { title: 'Год выпуска', item: car.year },
    { title: 'Пробег', item: car.mileage },
    { title: 'Цвет кузова', item: car.color?.name }
  ];

  const characteristicsRight = [
    { title: 'Тип привода', item: car.drive_type },
    { title: 'Объем двигателя', item: `${car.engine_volume}.0 л.` },
    { title: 'Тип топлива', item: car.fuel },
    { title: 'Мощность', item: `${car.engine_power} л. с.` },
    { title: 'Трансмиссия', item: car.transmission }
  ];

  const [hideChar, setHideChar] = useState<boolean>(false);
  const handleToggle = () => {
    setHideChar(preHideChar => !preHideChar);
  };

  return (
    <Container maxWidth="md" id="characteristics">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Box mb={3} fontWeight="fontWeightBold">
          ХАРАКТЕРИСТИКИ
        </Box>
        <Box mb={3} onClick={handleToggle} className="cusor-pointer">
          {hideChar ? (
            <>
              Развернуть
              <AddIcon fontSize={'small'} style={{ verticalAlign: 'middle' }} />
            </>
          ) : (
            <>
              Скрыть
              <MinimizeIcon />
            </>
          )}
        </Box>
      </Grid>

      <Divider />
      {!hideChar && (
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Box className="char-grid">
            <List className="char-list">
              {characteristicsLeft.map(char => (
                <ListItem key={char.title} divider>
                  <ListItemText
                    primary={
                      <Box fontSize={12} pr={1} color="text.secondary">
                        {char.title}
                      </Box>
                    }
                  />
                  <Box pl={1} fontSize={12} fontWeight="fontWeightBold">
                    {char.item}
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box className="char-grid">
            <List className="char-list">
              {characteristicsRight.map(char => (
                <ListItem key={char.title} divider>
                  <ListItemText
                    primary={
                      <Box fontSize={12} pr={1} color="text.secondary">
                        {char.title}
                      </Box>
                    }
                  />
                  <Box
                    pl={1}
                    fontSize={12}
                    fontWeight="fontWeightBold"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {char.item}
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      )}
    </Container>
  );
};

export default React.memo(CharacteristicsCar);
