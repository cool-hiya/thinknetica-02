import React, {Component} from 'react';
import SubscribeModal from '../subscribe-modal';
import Authors from '../book-authors';
import Recommended from '../recommended';
import books from '../../data/books.json';
import styles from './book-details.module.scss';
import {bemNamesFactory} from 'bem-names';
import List from '../book-card/list';

const bem = bemNamesFactory('book-details');

class BookDetails extends Component {

    constructor(props) {
        super(props);

        this.priceInput = React.createRef();
    }

    componentDidMount() {
        this.focusPriceField();
    }

    componentDidUpdate() {
        this.focusPriceField();
    }

    focusPriceField() {
        this.priceInput.current.focus();
    }

    render() {
        const {title, pageCount, language, cover, followers, expectedPrice, authors} = this.props.book;

        return (
            <div className={styles[bem()]}>
                <div className={styles[bem('content')]}>
                    <img src={cover} className={styles[bem('img')]} />
                    <div className={styles[bem('info')]}>
                        <h1>{title}</h1>
                        <List.Group>
                            <List.Item label='Language'>{language}</List.Item>
                            <List.Item label='Page count'>{pageCount}</List.Item>
                            <List.Item label='Price'>${expectedPrice}</List.Item>
                            <List.Item label='Followers'>{followers}</List.Item>
                            <List.Item label='Authors'><Authors authors={authors} /></List.Item>
                            <List.Item label='Your price'> <input className={styles[bem('price-input')]} type='text' ref={this.priceInput} /></List.Item>
                        </List.Group>
                        <SubscribeModal />
                    </div>
                </div>
                <div className={styles[bem('recommended')]}>
                    <Recommended books={books} />
                </div>
            </div>
        );
    }
}

export default BookDetails;
