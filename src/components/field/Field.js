import React from 'react';

export default function Field(props) {
    const {name, setValue, label, type, value} = props;

    const renderField = () => {
        if (type === 'textarea') {
            <textarea className="form-control" id={name} value={value} onChange={(e) => setValue(name, e)}></textarea>
        }

        return <input type='text' className="form-control" id={name} value={value} onChange={(e) => setValue(name, e)} />
    }

    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            {renderField()}
        </div>
    );
}