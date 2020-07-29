import React, {Component} from 'react';
import Modal from '../modal/Modal';

class SubscribeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        console.log(
            'here'
        );
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const {isOpen} = this.state;

        return (
            <React.Fragment>
                <button className='btn btn-primary' onClick={() => this.toggle()}>Subscribe</button>
                <Modal isOpen={isOpen} onClose={() => this.toggle()}>
                    Hello
                </Modal>
            </React.Fragment>
        );
    }
}

export default SubscribeModal;
