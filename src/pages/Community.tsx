import React, { useState } from 'react';
import ChattTemplate from '../components/write/ChattTemplate';
import Responsive from '../components/common/Responsive'
import Button from '../components/common/Button'
import ChattForm from '../components/write/ChattForm';
import Navbar from '../components/common/navbar'
import Siderbar from '../components/common/siderbar'

const Community = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
    return (
        <>
        <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
        <Responsive>
            <Button to="/login">로그인</Button>
            <ChattTemplate>
                <ChattForm />
            </ChattTemplate>
            </Responsive>
           
            </>
    )
}

export default Community;