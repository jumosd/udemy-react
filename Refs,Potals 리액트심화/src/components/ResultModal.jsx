import React from 'react';
import { createPortal } from 'react-dom'
import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
    const dialog = useRef()
    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
    console.log(score)
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal()
            }
        }
    })


    return createPortal(
        <dialog ref={dialog} className='result-modal' onClose={onReset}>

            {userLost && <h2>졌습니다</h2>}
            {!userLost && <h2>점수는: {score}점</h2>}
            <p>선택한 시간은 <strong>{targetTime}초</strong></p>
            <p>타이머를 멈췄을때 시간은 <strong>{formattedRemainingTime} 초 남았습니다!</strong></p>
            <form method='dialog' onSubmit={onReset}>
                <button>닫기</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;