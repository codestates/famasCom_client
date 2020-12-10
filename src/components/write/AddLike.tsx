import React from "react";

type addLikeProps = {
    msgid: string;
    handleLike: (e: any) => void;
};

export default function AddLike({ msgid, handleLike }: addLikeProps) {
    return <div id={msgid} onClick={handleLike}></div>
}
