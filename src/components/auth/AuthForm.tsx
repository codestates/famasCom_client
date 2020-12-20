import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { Kakao } from "./kakaoAuth"
import CommonButton from 'components/common/Button';
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
      flexDirection: 'column',
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

type typeProps = {
  token: string;
  value: string;
  email: string;
  password: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface Indexable {
  [key: string]: string;
}

const textMap: Indexable = {
  login: "회원 접속",
  signup: "회원가입",
}

const AuthForm = ({ value, email, password, handleSubmit, handleChange }: typeProps) => {
  const text = textMap[value];

  const theme = useTheme();
  //모달 설정
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };
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
      <Btn onClick={handleClose}>알았어요!</Btn>
    </ModalBox>
  );


  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput autoComplete="username" name="email" value={email} onChange={handleChange} placeholder="첫 번째! 계정을 입력해 주세요." />
        <StyledInput autoComplete="new-password" name="password" type="password" value={password} onChange={handleChange} placeholder="두 번째! 비밀번호를 입력해 주세요." />
        <CommonButton onClick={handleSubmit}>{text}</CommonButton>
      </form>
      <Line>
        <span className="line-or">
          <span className="txt-or">또는</span>
        </span>
      </Line>
      <Kakao />
      <Footer>
        <span style={{ cursor: `url(${click}), auto` }} onClick={handleOpen}>💬 도움말</span>
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
        {value === "login" ? (<Link style={{ cursor: `url(${click}), auto` }} to="/signup">회원가입</Link>) : (<Link style={{ cursor: `url(${click}), auto` }} to="/login">로그인</Link>)}
      </Footer>
    </AuthFormBlock>
  )
}
export default AuthForm;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: black;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
`;

// 폼 하단에 로그인 혹은 회원가입 링크 보여줌
const Footer = styled.div`
display: flex;
margin-top: 2rem;
font-size: 1.3rem;
flex-direction: row;
span {
  cursor: pointer;
  &:hover {
    color: #01BF71;
  }
}
a {
  margin-left: 52%;
  color: #1c2237;
  text-decoration: none;
  &:hover {
    color: #01BF71;
  }
}
`;

// &은 sass 문법임 
// css 에서 + 는 1 + 2애서 2에만 해당 css가 적용됨 https://developer.mozilla.org/ko/docs/Web/CSS/%EC%9D%B8%EC%A0%91_%ED%98%95%EC%A0%9C_%EC%84%A0%ED%83%9D%EC%9E%90
const StyledInput = styled.input`
font-size: 1.3rem;
border: none;
border-bottom: 2px solid #1c2237;
margin-bottom: 1em;
padding-bottom: 0.5em;
outline: none;
width: 100%;
&:focus {
  color: $oc-teal-7;
  border-bottom: 2px solid #01BF71;
}
& + & {
  margin-top: 1rem;
}
`;

const Line = styled.div`
.line-or {
  top: 10%;
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 0;
}
.line-or:before,
.line-or:after {
  display: inline-block;
  width: calc(50% - 20px);
  height: 1px;
  margin: 8px 0;
  background-color: rgba(0, 0, 0, 0.45);
  vertical-align: top;
  content: "";
}
.txt-or {
  display: inline-block;
  width: 40px;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.49);
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