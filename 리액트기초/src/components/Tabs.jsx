import React from 'react';

const Tabs = ({ children, button, buttonContainer }) => {
    const ButtonContainer = buttonContainer
    return (
        <>
            <ButtonContainer>
                {button}
            </ButtonContainer>
            {children}
        </>
    );
};

export default Tabs;