import React from 'react';
import styled from 'styled-components'
import power from '../../images/power.png'
import desktop from '../../images/desktop.png'
import powerOff from '../../images/powerOff.png'
import wallpaper from '../../images/wallpaper.png'

const ExplainBox = styled.div``
const ExplainBody = styled.div`
    padding-bottom:20px;    
`
const TitleText = styled.h3``
const BodyText = styled.div`
    padding-left:20px;
` 
const ImgArea = styled.div`
    display:flex;
    align-items:center;
    padding:0px 0px 20px 10px;
`
const Img = styled.div``
const HeadText = styled.h4``
const Text = styled.div`
    word-break:keep-all;
`

const ComBody2 = 
<ExplainBox>
    <ExplainBody>
        <TitleText>컴퓨터 켜기</TitleText>
        <BodyText>
            <ImgArea>
                <img src={desktop}></img>
                <img src={power} width="100px" height="100px"></img>            
            </ImgArea>
            <Text>본체의 전원 단추를 누릅니다.</Text>
            <Text>이런 화면이 보이는 과정을 부팅, 현재 화면을 바탕화면이라고 합니다.</Text>
        </BodyText>
    </ExplainBody>
    <ExplainBody>
        <TitleText>바탕화면의 구성</TitleText>
        <BodyText>
            <img src={wallpaper} width='100%'></img>
           <HeadText>바탕화면</HeadText>
            <Text>작업에 필요한 개체를 펼쳐놓고 사용하는 작업 공간입니다.</Text>
            <HeadText>아이콘</HeadText>
            <Text>컴퓨터의 기능들을 알아보기 쉽게 그림 모양으로 표시한 것입니다.</Text>
            <HeadText>시작 버튼</HeadText>
            <Text>컴퓨터 안에 있는 기능을 시작하는 곳입니다.</Text>
            <HeadText>작업표시줄</HeadText>
            <Text>현재 작업 중인 내용이 표시됩니다.</Text>
            <HeadText>알림 영역</HeadText>
            <Text>현재 시각과 작업 상태를 아이콘으로 표시하는 곳입니다.</Text>
        </BodyText>
    </ExplainBody>
    <ExplainBody>
        <TitleText>컴퓨터 끄기</TitleText>
        <BodyText>
            <img src={powerOff} width='70%'></img>
            <Text>시작 버튼을 클릭한 후 나타나는 목록에서 시스템 종료를 클릭합니다.</Text>
        </BodyText>
    </ExplainBody>
</ExplainBox>



export default ComBody2