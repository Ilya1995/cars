import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
import { OfficeType } from '../types/cars';
import YMap from './YMap';

type PropsType = {
  office: OfficeType;
  dealerName: string;
};

const DealerInfo: React.FC<PropsType> = ({ office, dealerName }) => {
  return (
    <>
      {office && (
        <Container maxWidth="md" id="dealer">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Box className="item-grid">
              <Box my={3} fontWeight="fontWeightBold">
                {dealerName.toUpperCase()}
              </Box>
              <Box my={2} color="text.secondary" fontSize={13}>
                <LocationOnIcon
                  fontSize={'small'}
                  style={{ verticalAlign: 'bottom' }}
                />
                <Box component="span" px={1}>
                  {office.address}
                </Box>
              </Box>
              <Divider />
              <Box my={2} color="text.secondary" fontSize={13}>
                <PhoneIcon
                  fontSize={'small'}
                  style={{ verticalAlign: 'bottom' }}
                />
                <Box component="span" px={1}>
                  {office.phone}
                </Box>
              </Box>
              <Divider />
              <Box my={2} color="text.secondary" fontSize={13}>
                <LanguageIcon
                  fontSize={'small'}
                  style={{ verticalAlign: 'bottom' }}
                />
                <Box component="span" px={1}>
                  <Link to={{ pathname: office.url }} target="_blank">
                    {office.url}
                  </Link>
                </Box>
              </Box>
              <Divider />
            </Box>

            <Box className="item-grid">
              <YMap
                coordinates={office?.location.coordinates.reverse()}
                width="auto"
              />
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default React.memo(DealerInfo);
