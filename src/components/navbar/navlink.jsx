import React from 'react';

const Navlink = ({ route }) => {
    return (
        <li>
            <a href={route.path}>{route.label}</a>
        </li>
    );
};

export default Navlink;