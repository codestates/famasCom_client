import React, { useState } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import CommuJoinText from './texts/CommuJoinText'
import Navbar from 'components/common/navbar';
import Responsive from 'components/common/Responsive';
import Siderbar from 'components/common/siderbar';
import LectureUpper from 'components/lectureNav/LectureDetail';
import Wrapper from 'themes/Wrapper';
import styled from "styled-components";
import { useTheme, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import IDKSection from 'components/IdkSection/IDKSection';
import Footer from 'components/Footer';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
    text: {
      height:'auto',
      fontSize:20,
      wordBreak:'keep-all'
    },
    body: {
      height:'100',
    }
  }),
);

const CommuJoin = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = CommuJoinText.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
    <Wra>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <IDKSection />
      <LectureTemplateBlock>
        <Wrapper>
        <LectureUpper/>
            <LectureBox>
                <HeadText>커뮤니티 참여하기</HeadText>
                <Stepper className={classes.root}>
                  <img
                  className={classes.img}
                  src={CommuJoinText[activeStep].imgPath}
                  alt={CommuJoinText[activeStep].label}
                  />
                  <Paper square elevation={0} className={classes.header}>
                  <Typography className={classes.text}>{CommuJoinText[activeStep].label}</Typography>
                  </Paper>                
                  <MobileStepper
                  className={classes.body}
                  steps={maxSteps}
                  position="static"
                  variant="dots"
                  activeStep={activeStep}
                  nextButton={
                      <Button className={classes.text} size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                      다음으로
                      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                      </Button>
                  }
                  backButton={
                      <Button className={classes.text} size="large" onClick={handleBack} disabled={activeStep === 0}>
                      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                      이전으로
                      </Button>
                  }
                  />
                  </Stepper>
            </LectureBox>
        </Wrapper>
      </LectureTemplateBlock>
      <Footer/>
  </Wra>
  )
}

const Wra = styled.div`
cursor: url(src/images/pointer.png), auto;
`
const LectureTemplateBlock = styled(Responsive)`
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #fff;
`;
const LectureBox = styled.div`
  margin:50px 0;
  padding:60px;
  border: 1px solid #C2C5CD;
`
const HeadText = styled.h1`
font-size:3em;
border-bottom:10px solid #01bf71;
width:50%;
padding-bottom:10px;
`
const Stepper = styled.div`
  padding-bottom:70px;
`
export default CommuJoin