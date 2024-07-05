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
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <Progressbar Timer={TIMER} />
    </div>
  );
}
