import React from 'react';
import ToggleList from '../../toggle-list';

const Authors = ({authors}) => {
    return (
        <ToggleList elements={authors} />
    );
}

export default Authors;