import React, { useEffect, useState } from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';

const NavLgoin = () => {
  const [redirect, setRedirect] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const token = localStorage.getItem("token")

  const handleLogout = () => {
    handleModalClick()
    localStorage.removeItem("token")
  };

  const handleModalClick = () => {
    setShowModal(!showModal);
  };

  const handleUiByLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!token) {
      return (
        <div className="nav-container-auth">
          <li className="nav-content">
            <Link className="nav-list-link" to="/login">회원으로 접속하기</Link>
          </li>
          <li className="nav-content">
            <Link className="nav-list-link" to="/signup">회원가입</Link>
          </li>
        </div>
      )
    } else {
      return (
        <div className="nav-container-auth">
          <li className="nav-content">
            <button className="user-progile-container" onClick={handleModalClick}>
            </button>
          </li>
          { showModal && (
            <div className="nav-modal-container">
              <Link className="modal-nav-content list-link" onClick={handleModalClick} to="/mypage">내정보</Link>
              <div>
              <button className="modal-nav-content logout" onClick={handleLogout}>접속종료</button>
              </div>
            </div>
          )}
          <li className="nav-content">
            <button className="nav-logout" onClick={handleLogout}>접속종료</button>
          </li>
        </div>
      )
    }
  };

  
  return (
  <>
    {redirect &&
    <>
      <div className="nav-container-auth">
        <li className="nav-content">
          <Link className="nav-list-link" to="/login">회원으로 접속하기</Link>
        </li>
        <li className="nav-content">
          <Link className="nav-list-link" to="/signup">회원가입</Link>
        </li>
      </div>
      <Redirect to={redirect} />
    </>
    }
      {!redirect && handleUiByLogin}
      </>
  )
}
export default withRouter(NavLgoin);