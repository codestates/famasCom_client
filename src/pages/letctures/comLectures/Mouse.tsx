import Navbar from "components/common/mainNavbar";
import Responsive from "components/common/Responsive";
import Siderbar from "components/common/siderbar";
import ComSection from "components/computerSection/ComSection";
import LectureUpper from "components/LectureUpper";
import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "themes/Wrapper";
import mouse from '../../../images/Mouse.png'
const Mouse = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  return (
    <Wra>
      <Navbar toggle={toggle}/>
      <Siderbar isOpen={isOpen} toggle={toggle} />
      <ComSection />
      <LectureTemplateBlock>
        <Wrapper>
        <LectureUpper/>
            <LectureBox>
                <HeadText>마우스 사용하기</HeadText>
                <Img src={mouse} width="400" height="400"/>
                <TitleText>클릭 - 선택</TitleText>
                <Text>마우스 왼쪽 버튼을 한 번 눌렀다가 뗌으로서, 특정 개체를 선택할 때 쓰는 기능입니다.</Text>
                <TitleText>더블 클릭 - 실행</TitleText>
                <Text>왼쪽 버튼을 두 번 연속해 누릅니다. 프로그램을 실행하거나 파일을 엽니다.</Text>
                <TitleText>드래그 앤 드롭</TitleText>
                <Text>왼쪽 버튼을 누른 상태에서 마우스를 원하는 곳으로 끌어 놓은 후, 눌렀던 왼쪽 버튼에서 손을 뗍니다. 아이콘이나 창을 이동합니다.</Text>
                <TitleText>오른쪽 버튼 클릭 - 메뉴</TitleText>
                <Text>오른쪽 버튼을 한 번 눌렀다가 뗍니다. 메뉴를 실행합니다.</Text>
                <TitleText>휠(스크롤 버튼) 굴리기</TitleText>
                <Text>스크롤 버튼을 위/아래로 굴립니다. 화면의 내용을 위아래로 이동하여 봅니다.</Text>
            </LectureBox>
        </Wrapper>
      </LectureTemplateBlock>
    </Wra>
  )
}

const Wra = styled.div`
cursor: url(src/images/pointer.png), auto;
`
const LectureTemplateBlock = styled(Responsive)`
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
background: #fff;
`;
const LectureBox = styled.div`
    margin:50px 0;
    padding:60px;
    border: 1px solid #C2C5CD;
`
const HeadText = styled.h1`
  font-size:3em;
  border-bottom:2px solid black;
  padding-bottom:10px;
`
const Img = styled.img`
  margin:20px 0px;
`
const TitleText = styled.h2`
  padding-top:20px;
`
const Text = styled.div`
  font-size:20px;
  padding:10px 0px;
  word-break:keep-all;
`
export default Mouse