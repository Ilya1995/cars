import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ImageType } from '../types/cars';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type PropsType = {
  images: ImageType[];
};

const StepperImages: React.FC<PropsType> = ({ images }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box maxWidth={800} m={'0 auto'} pt={5}>
      <AutoPlaySwipeableViews
        index={activeStep}
        interval={5000}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="step-img"
      >
        {images.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.url}
                alt="imaga"
              />
            ) : null}
          </Box>
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
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default React.memo(StepperImages);
