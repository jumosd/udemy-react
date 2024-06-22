import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';
const NewProject = ({ onAdd, onCancel }) => {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const saveHandler = () => {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open()
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <div className='w-[35rem] mt-16'>
            <Modal ref={modal} >
                <h2 className='text-xl font-bold text-stone-700 my-4'>입력이 잘못 됐습니다</h2>
                <p className='text-stone-600 mb-4'>제목과 설명 그리고 기간을 정해주세요</p>
                <p className='text-stone-600 mb-4'>빈칸을 입력하면안됩니다 :D</p>
            </Modal>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>취소</button></li>
                <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-tone-950'
                    onClick={saveHandler}
                >저장</button></li>
            </menu>
            <div>
                <Input type='text' ref={title} label="제목" />
                <Input ref={description} label="설명" isTextarea />
                <Input type='date' ref={dueDate} label="마감일" />
            </div>
        </div>
    );
};

export default NewProject;