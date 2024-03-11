import React from 'react';

const TabButton = ({ children, onSelect }) => {
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}

export default TabButton;