import React, {Component} from 'react';
import ReactDom from 'react-dom';

class SubscribeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <React.Fragment>
                <button className='btn btn-primary' onClick={() => this.toggle()}>Subscribe</button>
                {this.state.isOpen && ReactDom.createPortal(
                    <div className='modal-overlay' style={styles.overlay}>
                        <button type='button' onClick={() => this.toggle()}>X</button>
                        <div className='content' style={styles.content}>Thanks</div>
                    </div>,
                    document.getElementById('modal-root'))}
            </React.Fragment>
        );
    }
}

export default SubscribeModal;

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
