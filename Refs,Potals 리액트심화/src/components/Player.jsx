import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState(null)
  // const [submitted, setSubmitted] = useState(false)

  // const handleChange = (event) => {
  //   setEnteredPlayerName(event.target.value)
  // }
  const handleClick = () => {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''
  }
  return (
    <section id="player">
      <h2>환영합니다 {enteredPlayerName ?? '홍길동'} 님</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>이름 설정하기</button>
      </p>
    </section>
  );
}
