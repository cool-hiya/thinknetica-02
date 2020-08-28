import React from 'react';

const Title = (props) => {
    return (
        <h2 className='card-title' onClick={props.click}>{props.children}</h2>
    );
}

export default Title;
