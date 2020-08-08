import React from 'react';
import Header from '../header';
import Footer from '../footer';
import BookAppContainer from '../book-app-container';
import ContactForm from '../contact-form';
import MainContainer from '../main-container';

const App = ({books}) => {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <BookAppContainer />
                <ContactForm />
            </MainContainer>
            <Footer />
        </React.Fragment>
    );
}

export default App;