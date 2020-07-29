import React from 'react';
import ToggleList from '../toggle-list/ToggleList';

export default function BookCardAuthors({authors}) {
    return (
        <ToggleList elements={authors} />
    );
}