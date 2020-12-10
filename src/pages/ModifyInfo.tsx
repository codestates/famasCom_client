import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
        fontSize: 18
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
    }),
  );

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
    const token = localStorage.getItem("token")
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
            // setInfoModify('')
        } else if (e.currentTarget.className === 'secession_btn') {
            axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
            await axios.post('https://jven72vca8.execute-api.ap-northeast-2.amazonaws.com/dev/delete-userData/');
            // history.push("/main")
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
    
        return (
        <MyInfoTemplateBlock>
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
          <Button
                                variant="contained"
                                id='modifyBtn'
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<ReplyIcon />}
          >
              <Link to="/">나가기</Link>
          </Button>   
          <Button
            variant="contained"
            color="primary"
                                size="large"
                                id='modifyBtn'
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={infoModifyHandler}
          >
              저장하기
          </Button>
          </ButtonBox>
          
        </div>
        <Footer1 onClick={handleSecessionOpen}>
        회원 탈퇴
        </Footer1>
        <Footer2>
        <div onClick={handleOpen}><HelpIcon/> 도움말</div>
        </Footer2>
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
      </MyInfoTemplateBlock>
        );
}
    


const MyInfoTemplateBlock = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: transparent 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 600px;
  height: 500px;
  border: 1px solid #000;
  background: transparent 100%;
`;

const ButtonBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Footer1 = styled.div`
margin-top: 4rem;
font-size: 1.125rem;
text-align: right;
a {
  color: gray;
  text-decoration: none;
  &:hover {
    color: black
  }
}
`;

const Footer2 = styled.div`
margin-top: -1.9rem;
font-size: 1.125rem;
text-align: left;
a {
  color: gray;
  text-decoration: none;
  &:hover {
    color: black
  }
}
`;