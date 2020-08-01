import React from 'react';
import BookCard from '../book-card';

const Catalog = ({books}) => {

    const renderBooks = () => {
        return books.map(book => {
            return (
                <div className='col-lg-4' key={book.id}>
                    <BookCard book={book} />
                </div>)
        });
    }

    return (
        <div className='row'>
            {renderBooks()}
        </div>
    );
}

export default Catalog;
