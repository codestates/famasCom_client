import React from "react";
import { Button } from 'antd';

type addLikeProps = {
    // msgid: string;
    handleLike: (e: any) => void;
};

export default function AddLike({ handleLike }: addLikeProps) {
    return <Button
        //id={msgid} 
        onClick={handleLike}></Button>
}

