import React from 'react';
import styled from 'styled-components'
import mouse from '../../images/mouse.png'

const ExplainBox = styled.div``
const ImgBox = styled.div`
    display:flex;
    justify-content:center;
    padding:20px 0px 20px 0px;
`
const ImgArea = styled.div`
    position:relative;
`
const LeftBtn = styled.div`
`

const RithtBtn = styled.div`
`
const Wheel = styled.div`
`
const TextArea = styled.div`
`
const TitleText = styled.h3``

const Text = styled.div`
    padding:0px 0px 20px 0px;
    word-break:keep-all;
`
const ComBody1 = 
        <ExplainBox>
            <ImgBox>
                <ImgArea>
                    <img src={mouse}></img>
                    <LeftBtn><span></span></LeftBtn>
                    <RithtBtn></RithtBtn>
                    <Wheel></Wheel>
                </ImgArea>            
            </ImgBox>
            <TextArea>
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
            </TextArea>
        </ExplainBox>



export default ComBody1