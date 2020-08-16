import React, {useState} from 'react';
import Catalog from '../catalog';
import SearchForm from '../search-form';
import BookDetails from '../book-details';
import {useBooks} from '../../hooks';

const BookAppContainer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState(null)
    const books = useBooks(searchQuery);

    function search(searchQuery) {
        setSelectedBook(null);
        setSearchQuery(searchQuery);
    }

    return (
        <React.Fragment>
            <SearchForm onSubmit={search} />

            <div className='row'>
                <div className='col-lg-12'>
                    {selectedBook ? <BookDetails book={selectedBook} /> : null}
                </div>
            </div>

            <Catalog isLoading={!books} books={books} onSelect={(book) => setSelectedBook(book)} />

        </React.Fragment>
    );
}

export default BookAppContainer;
