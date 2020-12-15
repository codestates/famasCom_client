import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import click from '../../images/click.png'
import pointer from '../../images/pointer.png'
import { lectureModal } from '../../textBody/modalText'
import AccordionList from 'components/lectureAccordion/AccoList';
import text from 'textBody/IDKText';
import LectureNav from 'components/LectureNav';
import Navbar from 'components/common/navbar';
import Siderbar from 'components/common/siderbar';
import Responsive from 'components/common/Responsive';
import Wrapper from 'themes/Wrapper';
import IDKSection from 'components/IdkSection/IDKSection';

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


const IDK = () => {
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
    //도움말 BODY
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
    
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <IDKSection />
      <LectureTemplateBlock>
        <Wrapper>
          <LectureBody>
            <LectureNav/>
            <ButtonArea>
                  <Link to="/Community">
                    <Btn >질문하러 가기</Btn>
                  </Link>
                  <Btn onClick={handleOpen} >도움이 필요한가요?</Btn>
                    <Modal open={open} onClose={handleClose}>{body}</Modal>
            </ButtonArea>
            <Accordion>
              <AccordionList accordions={text}/>
            </Accordion>
          </LectureBody>
        </Wrapper>
        </LectureTemplateBlock>

    </>
    )
  }

//이하 스타일 설정
  const Wra = styled.div`
    cursor: url(${pointer}), auto;
  `
  const LectureBody = styled.div`
    display:flex;
    flex-direction:column;
    margin:30px auto 100px auto;
    max-width:960px;
  `
  const BannerSection = styled.div`
    position: relative;
    text-align:center;
  `
  const BannerImg = styled.img`
  filter: brightness(70%) blur(2px);
  `
  const BannerText = styled.div`
    position: absolute;
    top: 45%;
    left: 10%;
    font-size:3em;
    font-weight:bold;
    color: white;
    text-shadow: black 2px 2px 5px;
  `
  const Accordion = styled.div`
    display:block;
  `
  const ButtonArea = styled.div`
      display:flex;
      justify-content:flex-end;
      align-items:flex-end;
      padding-top:20px;
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
  const Btn = styled.button`
    background: #00796B;
    color: white;
    font-size: 20px;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid green;
    border-radius: 30px;
    outline: none;
    :hover{
        background : white;
        color: black;      
        cursor: url(${click}), auto;
      }
`
const LectureTemplateBlock = styled(Responsive)`
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #fff;
`;
export default IDK;