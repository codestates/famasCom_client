import React, { Component, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';

export interface BtnProps{
    isShown: boolean;
    hide: () => void;
    modalContent: JSX.Element;
    headerText: string;
}


export const HelpBtn: React.FC<BtnProps> = ({isShown,hide,modalContent,headerText}) => {
    const modal = (
        <React.Fragment>
          <Backdrop />
          <Wrapper>
            <StyledModal>
              <Header>
                <HeaderText>{headerText}</HeaderText>
                <CloseButton onClick={hide}>X</CloseButton>
              </Header>
              <Content>{modalContent}</Content>
            </StyledModal>
          </Wrapper>
        </React.Fragment>
      );
      return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}

export const useModal = () => {
    const [isShown, setIsShown] = useState <boolean> (false);
    const toggle = () => setIsShown ( ! isShown );
    return {
      isShown,
      toggle,
    };
}

//

const Button = styled.button`
    background: url("../images/questionMark.png") no-repeat;
    border: none;
    width: 32px;
    height: 32px;
    cursor: pointer;
    &:active,
    &:focus{
        outline: none;
    }
`

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;

const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;