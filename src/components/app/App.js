import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BookList from '../book-list/BookList';

class App extends Component {

    render() {
        const {books} = this.props;

        return (
            <React.Fragment>
                <Header />
                <main className='container'>
                    <h1 style={styles.title}>Bookstore</h1>
                    <BookList books={books} />
                </main>
                <Footer />
            </React.Fragment>
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