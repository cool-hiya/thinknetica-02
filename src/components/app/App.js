import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Catalog from '../catalog';
import ContactForm from '../contact-form';
import MainContainer from '../main-container';
import Recommended from '../recommended';

const App = ({books}) => {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <Catalog books={books} />
                <Recommended books={books}/>
                <ContactForm />
            </MainContainer>
            <Footer />
        </React.Fragment>
    );
}

export default App;