import React, {useState} from 'react';
import Catalog from '../catalog';
import SearchForm from '../search-form';
import BookDetails from '../book-details';
import {useBooks} from '../../hooks';

const BookAppContainer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState(null)
    const books = useBooks(searchQuery);

    function selectBook(book) {
        setSelectedBook(book);
    }

    function search(searchQuery) {
        setSelectedBook(null);
        setSearchQuery(searchQuery);
    }

    function renderBookDetails() {
        if (selectedBook) {
            return <BookDetails book={selectedBook} />
        }
        return;
    }

    return (
        <React.Fragment>
            <SearchForm onSubmit={search} />

            <div className='row'>
                <div className='col-lg-12'>
                    {renderBookDetails()}
                </div>
            </div>

            <Catalog isLoading={!books} books={books} onSelect={selectBook} />

        </React.Fragment>
    );
}

export default BookAppContainer;
