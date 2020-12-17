import { Button, Card, MobileStepper, Modal } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { lectureModal } from "textBody/modalText";
import click from '../images/click.png'
import Paper from "@material-ui/core/Paper/Paper";

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }


const LectureUpper = () => {
    const theme = useTheme();
    //모달 설정
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};
    //스테퍼 설정
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = lectureModal.length;
    const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1); };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };
    
const body = (
    <ModalBox style={modalStyle}>
      <h2 id="simple-modal-title">도움말</h2>
      <ModalBody >
        <Img
          src={lectureModal[activeStep].imgPath}
          alt={lectureModal[activeStep].label}
        />
        <ModalText square elevation={0} >
          <div>{lectureModal[activeStep].label}</div>
        </ModalText>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              다음으로
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
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
        <>
            <TableArea>
              <GobackBtn onClick={()=>window.history.back()}>
                  <TableText>게시물 목록</TableText>
              </GobackBtn>    
                  <Btns>
                    <Link to="/Community">
                      <Btn >질문하러 가기</Btn>
                    </Link>
                    <Btn onClick={handleOpen} >도움이 필요한가요?</Btn>
                      <Modal open={open} onClose={handleClose}>{body}</Modal>
                  </Btns>
            </TableArea>        
        </>
    )
}
const TableArea = styled.div`
display:flex;
justify-content space-between;
align-items:flex-end;
margin: 30px 0px 80px 0px;
padding:20px 0;
border-bottom:2px solid;
`
const GobackBtn = styled.button`
border:none;
background:none;
outline:none;
&:hover{
  color:#01bf71;
  cursor: url(${click}), auto;
}
`
const TableText = styled.div`
font-size:24px;
`
const Btns = styled.div``
const Btn = styled.button`
background: #01bf71;
color: #010606;
font-size: 20px;
margin: 0 1em;
padding: 0.25em 1em;
border: none;
border-radius: 5px;
outline: none;
transition: all 0.2s ease-in-out;

&:hover{
  transition: all 0.2s ease-in-out;
  background: #1c2237;
  color: #fff;     
  cursor: url(${click}), auto;
}
`
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

export default LectureUpper