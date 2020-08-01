import React from 'react';
import ToggleList from '../../toggle-list';

export default function Authors({authors}) {
    return (
        <ToggleList elements={authors} />
    );
}