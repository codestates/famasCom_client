import React, { useState } from 'react';
import styled from 'styled-components';
import ChattTemplate from '../components/write/ChattTemplate';
import Responsive from '../components/common/Responsive'
import ChattForm  from 'components/write/ChattForm';
import ContentNavbar from 'components/common/navbar'
import Siderbar from '../components/common/siderbar'
import CommunitySection from 'components/communitySection/CommunitySection'
import GoToTop from 'components/common/GoToTop'

const Community = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
    return (
      <>
        <ContentNavbar toggle={toggle}/>
        <Siderbar isOpen={isOpen} toggle={toggle} />
        <CommunitySection />
        <CommunityTemplateBlock>
            <ChattTemplate>
                <ChattForm  />
            </ChattTemplate>
          
        </ CommunityTemplateBlock>
        <GoToTop />
        </>
    )
}
//
export default Community;

const CommunityTemplateBlock = styled(Responsive)`
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #fff;
margin-top: 5%;
margin-top: -2.6%;


`;