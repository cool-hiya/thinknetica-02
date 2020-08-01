import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';
import books from './data/books.json';
import user from './data/user.json';
import AuthContext from './context/AuthContext';

ReactDom.render(
    <AuthContext.Provider value={user}>
        <App books={books} />
    </AuthContext.Provider>,
    document.getElementById('root'));



