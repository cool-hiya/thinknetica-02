import React from 'react';

const MainContainer = ({children}) => {
    return (
        <main className='container'>
            <h1 style={styles.title}>Bookstore</h1>
            {children}
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