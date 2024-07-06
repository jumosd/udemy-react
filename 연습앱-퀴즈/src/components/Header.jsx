import React from 'react';
import logoImg from '../assets/quiz-logo.png'

const Header = () => {
    return (
        <header>
            <img src={logoImg} alt="퀴즈로고" />
            <h1>리액트 퀴즈</h1>
        </header>
    );
};

export default Header;