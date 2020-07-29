import React, {Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BookList from '../book-list/BookList';
import ContactForm from '../contact-form/ContactForm';
import MainContainer from '../main-container/MainContainer';

class App extends Component {

    render() {
        const {books} = this.props;

        return (
            <React.Fragment>
                <Header />
                <MainContainer>
                    <BookList books={books} />
                    <ContactForm />
                </MainContainer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;