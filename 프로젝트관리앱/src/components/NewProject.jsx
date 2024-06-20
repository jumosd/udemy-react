import React, { useRef } from 'react';
import Input from './Input';

const NewProject = ({ onAdd }) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const saveHandler = () => {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button className='text-stone-800 hover:text-stone-950'>취소</button></li>
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