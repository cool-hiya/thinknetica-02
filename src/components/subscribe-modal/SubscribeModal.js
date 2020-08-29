import React, {Component} from 'react';
import Modal from '../modal';
import styles from './subscribe-modal.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('subscribe-modal');

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
        const {isOpen} = this.state;

        return (
            <React.Fragment>
                <button className={styles[bem('button')]} onClick={() => this.toggle()}>Subscribe</button>
                <Modal isOpen={isOpen} onClose={() => this.toggle()}>
                    Hello!
                </Modal>
            </React.Fragment>
        );
    }
}

export default SubscribeModal;
