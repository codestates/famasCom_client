import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/navbar'
import Siderbar from '../components/common/siderbar'
import styled from 'styled-components'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Wrapper from '../themes/Wrapper'
import Modal from '@material-ui/core/Modal';


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
      width: '90%',
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


const MobExplain = () => {
    const classes = useStyles();
    //아코디언 설정
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    //모달 설정
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true);};
    const handleClose = () => {setOpen(false);};
    //도움말 BODY
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">모달 제목창</h2>
        <p id="simple-modal-description">강의를 눌러서 확인해보세요 !</p>
        <p>궁금한 점이 있다면 `질문하러 가기` 버튼을 눌러보세요!</p>
        <Button onClick={handleClose}>알았어요!</Button>
      </div>
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <>
    <Navbar toggle={toggle}/>
    <Siderbar isOpen={isOpen} toggle={toggle} />
    <Wrapper>
        
        <MobExplainBox>
            <h1 className="textBox">스마트폰 사용법</h1>
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccoSummary className={classes.head}>
          <Typography className={classes.heading}>네이버 밴드</Typography>
        </AccoSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            설명 2번
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccoSummary className={classes.head}>
          <Typography className={classes.heading}>제목입니다</Typography>
        </AccoSummary>
        <AccordionDetails>
          <Typography className={classes.body}>
            설명 2번
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    <ButtonArea>
      <Link to="/Community">
        <Button>질문하러 가기</Button>
      </Link>
      <Button onClick={handleOpen}>도움이 필요한가요?</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>

    </ButtonArea>
    </MobExplainBox>
      </Wrapper>
      
      </>
    )
  }

  interface IProps{
    title:string;
  }

  const MobExplainBox = styled.div`
    display:flex;
    align-items:center;  
    flex-direction: column;
    background:#f6f6f6;
  `

  const AccoSummary = styled(AccordionSummary)`
    &:hover{
      background:#00796B;
      color:white;
    }
  `
  const ButtonArea = styled.div`
    
  `
  const Button = styled.button`
    background: #00796B;
    color: white;
    font-size: 2em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 1px solid green;
    border-radius: 3px;
    &:hover{
        background : white;
        color: black;      
        cursor: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXPznJzia-b1rU6QAOTHXaj3pLK2-mWFWfg&usqp=CAU), auto;
      }
`

export default MobExplain;