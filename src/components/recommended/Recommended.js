import React, {PureComponent} from 'react';
import BookCard from '../book-card';
import styles from './recommended.module.scss';
import {bemNamesFactory} from 'bem-names';

const bem = bemNamesFactory('recommended');

class Recommended extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            books: this.props.books
        }
    }

    onBookDeleted(id) {
        this.setState((state) => {
            return {
                books: state.books.filter(book => id !== book.id)
            }
        });
    }

    renderBooks(books, max) {
        return books.slice(0, max).map(book => {
            return (
                <li key={book.id}>
                    <BookCard book={book} onDelete={() => this.onBookDeleted(book.id)} />
                </li>)
        });
    }

    render() {
        const {books} = this.state;

        return (
            <div className={styles[bem()]}>
                <ul className={styles[bem('list')]}>{this.renderBooks(books, 3)}</ul>
            </div>
        );
    }
}

export default Recommended;
