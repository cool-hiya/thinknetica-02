import React, {Component} from 'react';
import Catalog from '../catalog';
import SearchForm from '../search-form';
import BookDetails from '../book-details';


class BookAppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBook: null,
            searchQuery: ''
        }
    }

    selectBook(book) {
        this.setState({
            ...this.state,
            selectedBook: book
        });
    }

    search(searchQuery) {
        this.setState({
            selectedBook: null,
            searchQuery
        })
    }

    renderBookDetails() {
        const {selectedBook} = this.state;

        if (selectedBook) {
            return <BookDetails book={selectedBook} />
        }

        return;
    }

    render() {
        const {books, searchQuery} = this.state;

        return (
            <React.Fragment>
                <SearchForm onSubmit={(q) => this.search(q)} />

                <div className='row'>
                    <div className='col-lg-12'>
                        {this.renderBookDetails()}
                    </div>
                </div>
                
                <Catalog searchQuery={searchQuery} isLoading={!books} books={books} onSelect={(book) => this.selectBook(book)} />

            </React.Fragment>
        );
    }

}

export default BookAppContainer;
