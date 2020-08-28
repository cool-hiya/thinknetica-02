import React, {Component} from 'react';
import throttle from '../../utils/throttle';
import './scroll-up-button.scss';

class ScrollUpButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.scrollHandler = throttle(() => this.onWindowScroll(), 500);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    onWindowScroll() {
        if (window.pageYOffset > 100) {
            this.setState({visible: true})
        } else {
            this.setState({visible: false})
        }
    }

    scrollUp(e) {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        const {visible} = this.state;
        let scrollUpClass = 'scrollup';

        if (visible) {
            scrollUpClass += ' active';
        }

        return (
            <a className={scrollUpClass} onClick={(e) => this.scrollUp(e)}>Scroll up</a>
        )
    }
}

export default ScrollUpButton;
