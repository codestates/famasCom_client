import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import click from 'images/click.png'
import pointer from '../../images/pointer.png'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import authModal from 'textBody/modalText/authModal'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const TransitionsModal = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    //스테퍼 설정
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = authModal.length;
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    //도움말 BODY
    const body = (
      <ModalBox className={classes.modal}>
        <h2 id="simple-modal-title">도움말</h2>
        <ModalBody >
          <Img
            src={authModal[activeStep].imgPath}
            alt={authModal[activeStep].label}
          />
          <ModalText square elevation={0} >
            <div>{authModal[activeStep].label}</div>
          </ModalText>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                다음으로
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                이전으로
              </Button>
            }
          />
        </ModalBody>
        <Btn  onClick={handleClose}>알았어요!</Btn>
      </ModalBox>
    );
    

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
  
 
           {body}
        
      </Modal>
    </div>
  );
}
export default TransitionsModal


const ModalBox = styled.div`
display:block;
justify-content:center;
position: absolute;
width: 400px;
background: white;
border: 2px solid #000;
box-shadow:0px 2px 2px 1px rgba(0, 0, 0, 0.2);
padding: 20px 35px;
`
const ModalBody = styled.div`
max-width: 400px;
flex-grow: 1;
`
const ModalText = styled(Paper)`
display: flex;
align-items: center;
height: 50px;
padding: 20px;
background: #fafafa;
`
const Img = styled.img`
height: 255px;
max-width: 400px;
overflow: hidden;
display: block;
width: 100%;
`
const Btn = styled.nav`
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
margin-top: 10px;
margin-right: 10px;
margin-left: 10px;
color: #010606;
font-size: 1.3rem;
outline: none;
border: none;
cursor: pointer;
text-decoration: none;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #1c2237;
  cursor: url(${click}), auto;
  color: #fff;
}
@media screen and (max-width: 770px) {
  width: 70%;
  height: 40px;
  font-size: 1rem;
  margin-bottom: 10px;
  };
`