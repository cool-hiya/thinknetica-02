import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Modal extends Component {

    render() {
        const {isOpen, onClose} = this.props;

        if (!isOpen) {
            return null;
        }

        return (
            ReactDom.createPortal(
                <div className='modal-overlay' style={styles.overlay}>
                    <button type='button' onClick={() => onClose()}>X</button>
                    <div className='content' style={styles.content}>
                        {this.props.children}
                    </div>
                </div>,
                document.getElementById('modal-root'))
        );
    }
}

export default Modal;

const styles = {
    overlay: {
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: 0,
        left: 0,
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: 'white',
        width: '300px',
        padding: '30px',
        position: 'relative'
    }
}