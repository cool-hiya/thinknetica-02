import React, {PureComponent} from 'react';
import PromoBookCard from '../promo-book-card';

class Recommended extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            books: this.props.books
        }
    }

    onBookDeleted(id) {
        this.setState((state, props) => {
            return {
                books: state.books.filter(book => id !== book.id)
            }
        });
    }

    renderBooks(books, max) {
        return books.slice(0, max).map(book => {
            return (
                <div className='col-lg-3' key={book.id}>
                    <PromoBookCard book={book} onDelete={() => this.onBookDeleted(book.id)} />
                </div>)
        });
    }

    render() {
        const {books} = this.state;

        return (
            <div className='row'>
                <h2 className='col-lg-12'>Recommended</h2>
                {this.renderBooks(books, 3)}
            </div>
        );
    }
}

export default Recommended;
