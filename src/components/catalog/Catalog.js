import React from 'react';
import BookCard from '../book-card';
import {withLoading, withBooks} from '../../HOC';

const Catalog = ({books, onSelect}) => {

    const renderBooks = () => {
        return books.map(book => {
            return (
                <div className='col-lg-4' key={book.id}>
                    <BookCard book={book} onSelect={() => onSelect(book)} />
                </div>)
        });
    }

    return (
        <div className='row'>
            {renderBooks()}
        </div>
    );
}

export default withBooks(withLoading(Catalog));
