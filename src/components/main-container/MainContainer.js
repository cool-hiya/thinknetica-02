import React from 'react';
import ScrollUpButton from '../scroll-up-button';

const MainContainer = ({children}) => {
    return (
        <main className='container'>
            <h1 style={styles.title}>Bookstore</h1>
            {children}
            <ScrollUpButton/>
        </main>
    );
}

export default MainContainer;

const styles = {
    title: {
        margin: '30px 0',
        fontSize: '60px'
    }
}