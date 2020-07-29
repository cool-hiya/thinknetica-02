import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app/App';
import books from './data/books.json';
import user from './data/user.json';
import authContext from './context/authContext';

ReactDom.render(
    <authContext.Provider value={user}>
        <App books={books} />
    </authContext.Provider>,
    document.getElementById('root'));



