import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';
import user from './data/user.json';
import AuthContext from './context/AuthContext';
import './styles.scss';

ReactDom.render(
    <AuthContext.Provider value={user}>
        <App />
    </AuthContext.Provider>,
    document.getElementById('root'));



