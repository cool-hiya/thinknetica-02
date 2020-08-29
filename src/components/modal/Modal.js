import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('modal');

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        ReactDom.createPortal(
            <div className={styles[bem('overlay')]}>
                <div className={styles[bem('content')]}>
                    <button type='button' className={styles[bem('button')]} onClick={() => onClose()}>X</button>
                    {children}
                </div>
            </div>,
            document.getElementById('modal-root'))
    );
}

export default Modal;
