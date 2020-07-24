import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import BookList from './BookList';

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