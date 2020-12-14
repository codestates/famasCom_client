import React,{useState} from 'react';
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
      padding:'1em 2em',
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


const ComExplain = () => {
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
        <Button title="눌러보세요!" onClick={handleClose}>알았어요!</Button>
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
        <ComExplainBox>
          <h1 className="textBox">컴퓨터 사용법</h1>
          <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccoSummary className={classes.head} title="눌러보세요!">
                <Typography className={classes.heading}>와이파이 사용하는 방법</Typography>
              </AccoSummary>
              <AccordionDetails>
                <Typography className={classes.body}>
                  <p>설명 쥬르륵</p>
                  <p>설명 쥬르륵</p>
                  <p>설명 쥬르륵</p>
                  <p>설명 쥬르륵</p>
                  <p>설명 쥬르륵</p>
                  <p>설명 쥬르륵</p>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccoSummary className={classes.head} title="눌러보세요!">
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
        <Button title="눌러보세요!">질문하러 가기</Button>
      </Link>
      <Button onClick={handleOpen} title="눌러보세요!">도움이 필요한가요?</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>

    </ButtonArea>
    </ComExplainBox>
      </Wrapper>
      </>
    )
  }

  interface IProps{
    title:string;
  }

  const ComExplainBox = styled.div`
    display:flex;
    align-items:center;  
    flex-direction: column;
    background:#f6f6f6;
    
  `

  const AccoSummary = styled(AccordionSummary)<IProps>`
    &:hover{
      background:#00796B;
      color:white;
      cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYR+3XvWsUYRDH8c8ZCIIWQYhWQfGtsLSyU0sJNmojhJBY+BKwCBKwsBUbCwtBLULQyiamyR8gWoSQLsQmJJCAjaWFNhoNA3uwWTaXZ/cudymysLDsPjPzndnZ3zPb0OOj0eP4qgA8xGOsIq5/dAI+FeAKFnIB53CrmwAP8DYXcA0XugkQJX+TC7iO84cAhxU4CBW4lkF8rguTqgNlX8EXjGeBZ3APQziNRfxJgUoFeIKXOYcbOFMIEAChFf1YwlX8x0WEbvwuA0oFmM4yDId/8QsDBYehDedy96YQAhZ68R3XM5AdZqkAxVeQUt0t9OUWvsdY0XA/AYqxSuW7mwDzuNnLCszizoEFiGaJRhvGcWxiGR+ywaNOExaTbVmBF3ha0tohJp/wE/dTWr/FmpYA33CpzQB7mbcEOImJ7Bzcy1PN50lNeBQjmNyHiiQBNJM7gthgRmtmW2ZWCSAcdBriI+5W1YFOQjzD86oAzUq8xqM2Xkd8zpexUgegaRPDR+jFqYog/xDzxKt25oGm7THcxg2cxQl2/b2LASTU9B2+7gaduhtWTDp9ec8BtgFQflUhIQsz9wAAAABJRU5ErkJggg==), auto;
    }
  `
  const ButtonArea = styled.div`
    
  `
  const Button = styled.button<IProps>`
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
        cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYR+3XvWsUYRDH8c8ZCIIWQYhWQfGtsLSyU0sJNmojhJBY+BKwCBKwsBUbCwtBLULQyiamyR8gWoSQLsQmJJCAjaWFNhoNA3uwWTaXZ/cudymysLDsPjPzndnZ3zPb0OOj0eP4qgA8xGOsIq5/dAI+FeAKFnIB53CrmwAP8DYXcA0XugkQJX+TC7iO84cAhxU4CBW4lkF8rguTqgNlX8EXjGeBZ3APQziNRfxJgUoFeIKXOYcbOFMIEAChFf1YwlX8x0WEbvwuA0oFmM4yDId/8QsDBYehDedy96YQAhZ68R3XM5AdZqkAxVeQUt0t9OUWvsdY0XA/AYqxSuW7mwDzuNnLCszizoEFiGaJRhvGcWxiGR+ywaNOExaTbVmBF3ha0tohJp/wE/dTWr/FmpYA33CpzQB7mbcEOImJ7Bzcy1PN50lNeBQjmNyHiiQBNJM7gthgRmtmW2ZWCSAcdBriI+5W1YFOQjzD86oAzUq8xqM2Xkd8zpexUgegaRPDR+jFqYog/xDzxKt25oGm7THcxg2cxQl2/b2LASTU9B2+7gaduhtWTDp9ec8BtgFQflUhIQsz9wAAAABJRU5ErkJggg==), auto;
      }
`

export default ComExplain;