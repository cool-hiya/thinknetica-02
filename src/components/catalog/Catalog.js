import React, {Component} from 'react';
import BookCard from '../book-card';
import BookDetails from '../book-details';

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBook: null
        }
    }

    selectBook(book) {
        console.log(book);
        this.setState({selectedBook: book});
    }

    renderBooks() {
        const {books} = this.props;

        return books.map(book => {
            return (
                <div className='col-lg-4' key={book.id}>
                    <BookCard book={book} onSelect={() => this.selectBook(book)} />
                </div>)
        });
    }

    renderBookDetails() {
        const {selectedBook} = this.state;

        if (selectedBook) {
            return <BookDetails book={selectedBook} />
        }

        return <p className='alert alert-primary'>Selected a book</p>
    }

    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-lg-12'>
                        {this.renderBookDetails()}
                    </div>
                </div>
                <div className='row'>
                    {this.renderBooks()}
                </div>
            </React.Fragment>
        );
    }
}

export default Catalog;
