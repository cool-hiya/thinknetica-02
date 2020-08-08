import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Catalog from '../catalog';
import ContactForm from '../contact-form';
import MainContainer from '../main-container';

const App = ({books}) => {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <Catalog books={books} />
                <ContactForm />
            </MainContainer>
            <Footer />
        </React.Fragment>
    );
}

export default App;