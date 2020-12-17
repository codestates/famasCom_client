import React from 'react'

function GameOver(props) {
  return (
    <div
      id='GameBoard'
      style={{
        width: props.width,
        height: props.height,
        borderWidth: props.width / 50,
      }}>
      <div id='GameOver' style={{ fontSize: props.width / 15 }}>
        <div id='GameOverText'>게임 종료!</div>
        <div>내 점수: {props.score}</div>
        <div>
          가장 높은 점수:{' '}
          {props.highScore}
        </div>
        <div id='PressSpaceText'>스페이스바를 누르고 재시작하기</div>
      </div>
    </div>
  )
}

export default GameOver