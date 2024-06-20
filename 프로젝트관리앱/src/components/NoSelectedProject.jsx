import React from 'react';
import noProjectImage from '@/assets/no-projects.png'
import Button from './Button';

const NoSelectedProject = ({ onStartAddProject }) => {
    return (
        <div className='mt-24 text-center w-2/3'>
            <img src={noProjectImage} alt="프로젝트 없음" className='w-16 h-16 object-contain mx-auto' />
            <h2 className='text-xl font-bold text-stone-500 my-4'>선택된 프로젝트가 없어요</h2>
            <p className='text-stone-400 mb-4'>프로젝트를 선택하거나 새로운 프로젝트를 만들어 주세요 :D</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>프로젝트 만들기</Button>
            </p>
        </div>
    ); s
};

export default NoSelectedProject;