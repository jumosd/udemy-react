import { useEffect, useState } from "react";
import Progressbar from "./Progressbar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {



  useEffect(() => {
    console.log("타이머시작")
    const timer = setTimeout(() => {
      onConfirm()
    }, TIMER)


    return () => {
      clearTimeout(timer)
    }
  }, [onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>해당 장소를 없앨까요?</h2>
      <p>정말 이 장소를 삭제하시겠습니까??</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          아니오
        </button>
        <button onClick={onConfirm} className="button">
          네
        </button>
      </div>

      <Progressbar Timer={TIMER} />
    </div>
  );
}
