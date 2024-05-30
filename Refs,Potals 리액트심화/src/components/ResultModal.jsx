import React from 'react';

const ResultModal = ({ result, targetTime }) => {
    return (
        <dialog className='result-modal' >
            <h2>{result}</h2>
            <p>선택한 시간은 <strong>{targetTime}초</strong></p>
            <p>타이머를 멈췄을때 시간은 <strong>X 초 입니다!</strong></p>
            <form method='dialog'>
                <button>닫기</button>
            </form>
        </dialog>
    );
};

export default ResultModal;