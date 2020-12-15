import React from 'react';
import styled from 'styled-components'

const ExplainBox = styled.div``
const ExplainBody = styled.div`
    padding-bottom:20px;    
`
const Img = styled.div``
const Text = styled.div`
    word-break:keep-all;
`

const MobBody2 = 
<ExplainBox>
    <ExplainBody>
        <Img>Img</Img>
        <Text>홈 화면에 있는 Play스토어 아이콘을 눌러 스토어를 화면에 띄웁니다. <br></br>
        상단의 검색상자를 눌러 `네이버 지도`를 입력하고 검색 아이콘을 누릅니다.</Text>
    </ExplainBody>
    <ExplainBody>
        <Img>Img</Img>
        <Text>설치 버튼을 누르고 동의 버튼을 누른 후 설치가 완료될 때까지 기다립니다. <br></br>
        설치가 완료되면 `열기` 버튼이 나옵니다.</Text>
    </ExplainBody>
</ExplainBox>



export default MobBody2