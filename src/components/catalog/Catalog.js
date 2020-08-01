import React, {Component} from 'react';
import BookCard from '../book-card';

class Catalog extends Component {
    renderBooks() {
        const {books} = this.props;

        return books.map(book => {
            return (
            <div className='col-lg-4' key={book.id}>
                <BookCard book={book} />
            </div>)
        });
    }

    render() {
        return (
            <div className='row'>
                {this.renderBooks()}
            </div>
        );
    }
}

export default Catalog;
