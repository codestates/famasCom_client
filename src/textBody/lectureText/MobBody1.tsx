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

const MobBody1 = 
<ExplainBox>
    <ExplainBody>
        <Img>Img</Img>
        <Text>알림줄을 아래로 내리고 Wi-Fi 버튼을 길게 누르면 설정 화면으로 이동합니다.</Text>
    </ExplainBody>
    <ExplainBody>
        <Img>Img</Img>
        <Text>근처 와이파이 목록이 나열되면 사용 가능한 와이파이 이름을 선택합니다.<br></br>
        처음 연결할 때 비밀번호가 설정되어 있을 경우, 무선 비밀번호를 입력한 후 연결을 누르면 `연결됨` 메세지와 함께 접속됩니다.</Text>
    </ExplainBody>
</ExplainBox>



export default MobBody1