import React from 'react';
import Header from '../header';
import Footer from '../footer';
import BookAppContainer from '../book-app-container';
import ContactForm from '../contact-form';
import MainContainer from '../main-container';
import styles from './app.module.scss';
import bemNames from 'bem-names';

const App = () => {
    return (
        <div className={styles[bemNames('content')]}>
            <Header />
            <MainContainer>
                <BookAppContainer />
                <ContactForm />
            </MainContainer>
            <Footer />
        </div>
    );
}

export default App;