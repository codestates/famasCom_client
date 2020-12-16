import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme ,withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ReplyIcon from '@material-ui/icons/Reply';
import SaveIcon from '@material-ui/icons/Save';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Secession from '../components/myinfo/SecessionModal'
import Navbar from '../components/common/navbar'
import Siderbar from '../components/common/siderbar'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import InfoSection from 'components/myinfoSection/InfoSection'
import { Link as LinkR } from 'react-router-dom';
import { useHistory } from "react-router-dom";
//
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
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 500,
        flexDirection: 'column',
        justifyContent: 'space-even'
      },
      '& > *': {
        margin: theme.spacing(1),
      },
      margin: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
      button: {
        margin: theme.spacing(1),
        height: 55,
        width: 200,
        fontSize: 18,
        background: "#01bf71",
        color:"#010606"
        
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      head:{
        padding:'2em'
      },
      heading: {
        fontSize: theme.typography.pxToRem(25),
        flexBasis: '33.33%',
        flexShrink: 0,
      },
      body: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '33.33%',
        flexShrink: 0,
        padding:'1em 2em'
      },
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      arrow: {
        color: theme.palette.common.black,
      },
      tooltip: {
        backgroundColor: theme.palette.common.black,
      },
    }),
  );

  const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      right:'80%'
    },
  }))(Tooltip);

type ModifyInfoType = {
    // currentId: string;
    // currentPassword: string;
    // currentEmail: string;
    inputId: string;
    inputPassword: string;
    inputName: string;
}

export default function ModifyInfo() {
    const [infoModify, setInfoModify] = useState<ModifyInfoType>({
        // currentId: '',
        // currentPassword: '',
        // currentEmail: '',
        inputId: '',
        inputPassword: '',
        inputName:''
    });
    let history = useHistory();
    const [secessionState, setSecessionState] = useState<boolean>(false);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    //모달 설정
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => { setOpen(false); };
    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">모달 제목창</h2>
        <p id="simple-modal-description">강의를 눌러서 확인해보세요 !</p>
        <p>궁금한 점이 있다면 `질문하러 가기` 버튼을 눌러보세요!</p>
        <Button onClick={handleClose}>알았어요!</Button>
        </div>
    );
 
    console.log(localStorage.getItem("token"))
    
    // useEffect(() => {
    //     axios
    //         .post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-userData/')
    //         .then((res) => {
    //             console.log(res);
    //             const { data } = res;
    //             setInfoModify(Object.assign({}, infoModify, { currentId: data.username, currentPassword: data.password, currentEmail: data.email }));
    //         })
    // }, [infoModify.currentId, infoModify.currentPassword, infoModify.currentEmail]);

    const handleSecessionOpen = () => {
        setSecessionState(!secessionState)
    }
    const infoModifyHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.id === 'modifyBtn') {
            axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
            await axios.post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/update-userData/', {
                user_name: infoModify.inputName,
                nickName: infoModify.inputId,
                password: infoModify.inputPassword
            });
          await setInfoModify({ inputId: '', inputPassword: '', inputName: '' });

        }
        else if (e.currentTarget.className === 'secession_btn') {
            axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
            await axios.post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/delete-userData/');
            await history.push("/main")
        }
    }
    console.log(infoModify);
    const inputModifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === 'inputModifyId') {
            setInfoModify(Object.assign({}, infoModify, { inputId: e.currentTarget.value }));
            console.log("별명은요>>>>>>>>>",e.currentTarget.value)
        } else if (e.currentTarget.id === 'inputModifyPassword') {
            setInfoModify(Object.assign({}, infoModify, { inputPassword: e.currentTarget.value }));
            console.log("비밀번호는요>>>>>>>>>",e.currentTarget.value)
        } else if (e.currentTarget.id === 'inputModifyName') {
            setInfoModify(Object.assign({}, infoModify, { inputName: e.currentTarget.value }));
            console.log("본명은요>>>>>>>>>",e.currentTarget.value)
        }
    };
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <InfoSection />
      <MyInfoTemplateBlock>
        <div className="border">
      <WhiteBox>
        <div className={classes.root}>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
            <ListItemText primary="사진" secondary="파일명" />
              <>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
              </label>
              </>
          </ListItem>
        
          <Divider variant="inset" component="li" style={{ listStyle: 'none' }} />
      <div>
        <TextField
              id="inputModifyName"
              label="본명"
              style={{ margin: 8 }}
              placeholder="본명을 입력해 주세요."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
            }}
            onChange={inputModifyChange}
            value={infoModify.inputName}
            type="text"
            />
          </div>
          <div>
          <TextField
              id="inputModifyId"
            label="별명"
            style={{ margin: 8 }}
            placeholder="별명을 입력해 주세요."
            helperText="영어도 사용가능합니다."
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={inputModifyChange}
            value={infoModify.inputId}
            type="text"
          />
        </div>
        <div>
            <TextField
              id="inputModifyPassword"
                label="비밀번호"
                style={{ margin: 8 }}
                placeholder="변경할 비밀번호를 입력해 주세요."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={inputModifyChange}
                value={infoModify.inputPassword}
                type="text"
              />
          </div>

          <ButtonBox>
          <Btn id='modifyBtn'>
          <BtnLink to="/"> <ReplyIcon style={{fontSize:'20px'}} /> &nbsp; 나가기</BtnLink>
          </Btn>   
          <Btn id='modifyBtn'
            onClick={infoModifyHandler} > <SaveIcon /> &nbsp; 저장하기</Btn>
          </ButtonBox>
          
        </div>
            <Footer>
              <div onClick={handleOpen}>💬 도움말</div>
              <div onClick={handleSecessionOpen}>회원 탈퇴</div>
            </Footer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <Secession infoModifyHandler={infoModifyHandler} handleSecessionOpen={handleSecessionOpen} secessionState={secessionState} />
          </WhiteBox>
          
          </div>
          
      </MyInfoTemplateBlock>
      </>
        );
}
    


const MyInfoTemplateBlock = styled.div`
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.border {
  width: 100%;
  height: 580px;
  overflow: hidden;
  background-color: #fff;
}
`;

const WhiteBox = styled.div`
position: relative;
left: 33%;
top: 7%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 600px;
  height: 500px;
  border: 1px solid #000;
  background: white;
`;

const ButtonBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 1rem;
`;

const Footer = styled.div`
margin-top: 4rem;
font-size: 1.125rem;
display: flex;
flex-direction: row;
justify-content: space-between;
cursor: pointer;
div {
  text-decoration: none;
  &:hover {
    color: #01bf71;
  }
}
`;

const Btn = styled.nav`
display: flex;
align-items: center;
border-radius: 5px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
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
  color: #fff;
}

@media screen and (max-width: 1000px) {
  display: none;
}
`
const BtnLink = styled(LinkR)`
color: #010606;
&:hover {
  
  color: #fff;
}
`
//다시 머지
