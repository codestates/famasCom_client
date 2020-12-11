import React from 'react';
import ChattTemplate from '../components/write/ChattTemplate';
import Responsive from '../components/common/Responsive'
import Button from '../components/common/Button'
import ChattForm from '../components/write/ChattForm';

const Community = () => {
    return (
        <Responsive>
            <Button to="/login">로그인</Button>
            <ChattTemplate>
                <ChattForm />
            </ChattTemplate>
        </Responsive>
    )
}

export default Community;