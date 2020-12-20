import React from 'react';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useTheme } from '@material-ui/core/styles';
// import click from '../../images/click.png'
import Paper from '@material-ui/core/Paper';

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

type ReadyProps = {
  handleClose: () => void;
  open: boolean;
}

const ReadyModal = ({handleClose, open}: ReadyProps) => { 
  //모달 설정
  const classes = useStyles();
  const body = (
    
      <h2 id="simple-modal-title" onClick={handleClose} style={{color:"#01bf71", fontSize:"1.8rem"}}>아직 준비중이에요!</h2>
    
  );

  return (
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
  )

}

export default ReadyModal;

