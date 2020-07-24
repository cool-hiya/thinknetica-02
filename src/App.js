import React, {Component} from 'react';
import BookCard from './BookCard';
import AuthorCard from './AuthorCard';

class App extends Component {
    render() {
        const {book} = this.props;

        return (
            <div className='container'>
                <h1 style={styles.title}>Bookstore</h1>
                <div className='row'>
                    <div className='col-lg-4'>
                        <BookCard book={book} />
                    </div>
                    <div className='col-lg-4'>
                        <BookCard book={book} />
                    </div>
                    <div className='col-lg-4'>
                        <BookCard book={book} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <AuthorCard author={book.author} />
                    </div>
                    <div className='col-lg-4'>
                        <AuthorCard author={book.author} />
                    </div>
                    <div className='col-lg-4'>
                        <AuthorCard author={book.author} />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    title: {
        margin: '30px 0',
        fontSize: '60px'
    }
}

export default App;