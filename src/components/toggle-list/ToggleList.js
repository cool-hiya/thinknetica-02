import React, {Component} from 'react';
import styles from './toggle-list.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('toggle-list');

class ToggleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all: false
        }
    }

    onToggle() {
        this.setState({all: !this.state.all});
    }

    renderShowMoreButton(show) {
        if (!show) {
            return;
        }

        return (
            <button className={styles[bem('button')]} onClick={() => this.onToggle()}>{this.state.all ? 'Hide' : 'Show'}</button>
        )
    }

    renderList(elements) {
        return elements.map(({name, id}) => {
            return (
                <p className={styles[bem('item')]} key={id}>{name}</p>
            )
        })
    }

    render() {
        let {elements} = this.props;
        const showMoreButton = elements.length > 3;

        if (!this.state.all) {
            elements = elements.slice(0, 3);
        }

        return (
            <div className={styles[bem()]}>
                {this.renderList(elements)}
                {this.renderShowMoreButton(showMoreButton)}
            </div>
        );
    }
}

export default ToggleList;
