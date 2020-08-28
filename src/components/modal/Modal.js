import React from 'react';
import ReactDom from 'react-dom';
import './modal.scss';

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        ReactDom.createPortal(
            <div className='modal-overlay'>
                <button type='button' onClick={() => onClose()}>X</button>
                <div className='modal-content'>
                    {children}
                </div>
            </div>,
            document.getElementById('modal-root'))
    );
}

export default Modal;
