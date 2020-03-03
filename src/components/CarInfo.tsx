import React from 'react';
import Container from '@material-ui/core/Container';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  { imgPath: '//media.jlr-connect.com/ZXFrovXCQTJQefkBEmdUn5' },
  { imgPath: '//media.jlr-connect.com/QFjGd7doMErYYvpPThNnMc' },
  { imgPath: '//media.jlr-connect.com/orr8bA2YUU7aGwT6RHYzcg' },
  { imgPath: '//media.jlr-connect.com/LqziyRY8aRU9PWup5Dh4zJ' },
  { imgPath: '//media.jlr-connect.com/5ApVwm2gT8XRWR49jMaMxF' },
  { imgPath: '//media.jlr-connect.com/jmddRj3PPsEDqwLF3CvyXb' },
  { imgPath: '//media.jlr-connect.com/NJzjtdo3DZAyGquyLUYhAS' }
];

const CarInfo: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    // style={{ backgroundColor: '#f2f5f5' }}
    <Container maxWidth="xl" style={{ paddingTop: '35px' }}>
      <Box fontWeight="fontWeightBold" component="h1">
        Range Rover Evoque
      </Box>
      {/* <Box fontWeight="fontWeightBold" component="span" fontSize={32}>
        Range Rover Evoque
      </Box> */}
      <Box fontWeight="fontWeightBold" component="h2" color="text.secondary">
        Evoque 5 Door 2.0 TD4 Diesel 150 SE
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
      <div style={{ maxWidth: 800, margin: '40px auto' }}>
        <AutoPlaySwipeableViews
          index={activeStep}
          interval={5000}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  style={{
                    height: 510,
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: '100%'
                  }}
                  src={step.imgPath}
                  alt="imaga"
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    </Container>
  );
};

export default React.memo(CarInfo);
