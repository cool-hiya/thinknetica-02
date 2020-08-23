import React from 'react';
import List from '.';

const ListGroup = (props) => {
    return (
        <div className='list-group'>{props.children}</div>
    );
}

const ListItem = (props) => {
    return (
        <div className='list-group-item'>
            <span>{props.label}</span>
            <span>{props.children}</span>
        </div>
    );
}

export default {
    Group: ListGroup,
    Item: ListItem
}