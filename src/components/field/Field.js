import React from 'react';

const Field = (props) => {

    const {name, setValue, label, type: InputType, value} = props;

    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <InputType className="form-control" id={name} value={value} onChange={(e) => setValue(name, e)} />
        </div>
    );
}

export default Field;